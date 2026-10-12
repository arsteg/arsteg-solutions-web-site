import { NextRequest, NextResponse } from 'next/server';
import { ServerClient } from 'postmark';
import { supabase } from '@/lib/supabase';

/**
 * Enquiry intake endpoint.
 *
 * Responsibilities:
 *  - Validate and sanitize input (server-side, never trust the client).
 *  - Spam protection: honeypot + per-IP rate limiting + short-window dedup.
 *  - Persist the enquiry to Supabase (operational record of truth).
 *  - Deliver the enquiry by email via Postmark using SERVER-ONLY credentials.
 *  - Only report success once an acceptance path (store and/or email) succeeded.
 *
 * Credentials are read from server-only env vars (POSTMARK_*). They are never
 * exposed to the browser.
 */

export const runtime = 'nodejs';

// ---------------------------------------------------------------------------
// In-memory spam controls.
// NOTE: these reset on cold start and are per-instance. They are a cheap first
// line of defence, not a substitute for an edge WAF. Documented in
// docs/LEAD-INTEGRATION.md. For stronger guarantees, move to a shared store.
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // submissions per IP per window
const DEDUP_WINDOW_MS = 2 * 60 * 1000; // ignore identical resubmits within 2 min

const ipHits = new Map<string, number[]>();
const recentSubmissions = new Map<string, number>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function isDuplicate(key: string): boolean {
  const now = Date.now();
  const last = recentSubmissions.get(key);
  // prune occasionally to avoid unbounded growth
  if (recentSubmissions.size > 500) {
    for (const [k, t] of recentSubmissions) {
      if (now - t > DEDUP_WINDOW_MS) recentSubmissions.delete(k);
    }
  }
  if (last && now - last < DEDUP_WINDOW_MS) return true;
  recentSubmissions.set(key, now);
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Enquiry {
  name: string;
  email: string;
  message: string;
  company: string;
  website: string;
  budget: string;
  service: string;
  referral: string;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots
  // don't learn they were caught, but drop the submission.
  if (str(body.hp_field)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Normalize (accept both new `message` and legacy `description`).
  const enquiry: Enquiry = {
    name: str(body.name),
    email: str(body.email).toLowerCase(),
    message: str(body.message) || str(body.description),
    company: str(body.company),
    website: str(body.website),
    budget: str(body.budget),
    service: str(body.service) || str(body.zohoProduct),
    referral: str(body.referral),
  };

  // ---- Validation -------------------------------------------------------
  const errors: Record<string, string> = {};
  if (enquiry.name.length < 2 || enquiry.name.length > 100) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_RE.test(enquiry.email) || enquiry.email.length > 200) {
    errors.email = 'Please enter a valid email address.';
  }
  if (enquiry.message.length < 10 || enquiry.message.length > 5000) {
    errors.message = 'Please tell us a little about what you need (10+ characters).';
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields: errors }, { status: 422 });
  }

  // ---- Spam controls ----------------------------------------------------
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later or email us directly.' },
      { status: 429 },
    );
  }
  if (isDuplicate(`${enquiry.email}|${enquiry.message.slice(0, 64)}`)) {
    // Treat as already-received so the user sees success, not an error.
    return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
  }

  // ---- Persist (best effort) -------------------------------------------
  let stored = false;
  try {
    const { error } = await supabase.from('enquiries').insert({
      name: enquiry.name,
      email: enquiry.email,
      message: enquiry.message,
      company: enquiry.company || null,
      website: enquiry.website || null,
      budget: enquiry.budget || null,
      service: enquiry.service || null,
      referral: enquiry.referral || null,
      ip,
      user_agent: req.headers.get('user-agent') ?? null,
    });
    if (error) {
      // Table may not exist yet — log for operators, continue to email.
      console.error('[enquiry] Supabase insert failed:', error.message);
    } else {
      stored = true;
    }
  } catch (e) {
    console.error('[enquiry] Supabase insert threw:', e);
  }

  // ---- Deliver by email -------------------------------------------------
  const apiKey = process.env.POSTMARK_API_KEY;
  const from = process.env.POSTMARK_SENDER_EMAIL;
  const to = process.env.POSTMARK_RECEIVER_EMAIL;

  let emailed = false;
  if (apiKey && from && to) {
    try {
      const client = new ServerClient(apiKey);
      const safe = {
        name: escapeHtml(enquiry.name),
        email: escapeHtml(enquiry.email),
        company: escapeHtml(enquiry.company || '—'),
        website: escapeHtml(enquiry.website || '—'),
        budget: escapeHtml(enquiry.budget || '—'),
        service: escapeHtml(enquiry.service || '—'),
        referral: escapeHtml(enquiry.referral || '—'),
        message: escapeHtml(enquiry.message).replace(/\n/g, '<br>'),
      };
      await client.sendEmail({
        From: from,
        To: to,
        ReplyTo: enquiry.email,
        Subject: `New enquiry from ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ''}`,
        HtmlBody: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Company:</strong> ${safe.company}</p>
          <p><strong>Website:</strong> ${safe.website}</p>
          <p><strong>Service:</strong> ${safe.service}</p>
          <p><strong>Budget:</strong> ${safe.budget}</p>
          <p><strong>Heard about us:</strong> ${safe.referral}</p>
          <p><strong>What they need:</strong><br>${safe.message}</p>
          <hr><p style="color:#888;font-size:12px">IP: ${escapeHtml(ip)}</p>
        `,
        TextBody:
          `New website enquiry\n\n` +
          `Name: ${enquiry.name}\nEmail: ${enquiry.email}\n` +
          `Company: ${enquiry.company || '—'}\nWebsite: ${enquiry.website || '—'}\n` +
          `Service: ${enquiry.service || '—'}\nBudget: ${enquiry.budget || '—'}\n` +
          `Heard about us: ${enquiry.referral || '—'}\n\n${enquiry.message}\n`,
        MessageStream: 'outbound',
      });
      emailed = true;
    } catch (e) {
      console.error('[enquiry] Postmark send failed:', e);
    }
  } else {
    console.error('[enquiry] Postmark not configured (POSTMARK_API_KEY / SENDER / RECEIVER missing).');
  }

  // Only report success if the enquiry was actually accepted somewhere.
  if (emailed || stored) {
    return NextResponse.json({ ok: true, stored, emailed }, { status: 200 });
  }

  return NextResponse.json(
    { error: 'We could not submit your enquiry right now. Please email info@arsteg.com.' },
    { status: 502 },
  );
}
