# Lead Integration — setup & operations

How enquiries flow, what's required, and how to verify delivery.

## Flow

```
Visitor submits form (ContactForm / LeadForm / service pages)
        │  POST /api/send-email  (JSON)
        ▼
/api/send-email  (src/app/api/send-email/route.ts, Node runtime)
  1. Honeypot check (hp_field) ....... silently drop bots
  2. Validate + sanitize ............. name, email, message (server-side)
  3. Rate limit (per IP) ............. 5 / hour, in-memory
  4. Dedup .......................... ignore identical resubmits < 2 min
  5. Store in Supabase `enquiries` ... operational record (best effort)
  6. Email via Postmark .............. to POSTMARK_RECEIVER_EMAIL
  7. Respond ........................ { ok: true } only if stored OR emailed
```

The UI shows **success only when the backend returns `{ ok: true }`**. On error
the user's input is preserved and a useful message is shown. Delivery is never
simulated.

## Required environment variables

See `.env.example`. Server-only (never `NEXT_PUBLIC_`):

- `POSTMARK_API_KEY` — Postmark **server token**.
- `POSTMARK_SENDER_EMAIL` — a **verified** Postmark sender signature.
- `POSTMARK_RECEIVER_EMAIL` — inbox that receives enquiries (e.g. info@arsteg.com).

> **Security note:** the previous site exposed the Postmark key as
> `NEXT_PUBLIC_POSTMARK_API_KEY`, which ships secrets to the browser. These were
> moved to server-only names and the `NEXT_PUBLIC_` copies removed. **Rotate the
> Postmark token**, since the old one may have been exposed in client bundles.

## Supabase table

Create the `enquiries` table (SQL editor in Supabase):

```sql
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  message text not null,
  company text,
  website text,
  budget text,
  service text,
  referral text,
  ip text,
  user_agent text
);

alter table public.enquiries enable row level security;

-- Allow inserts from the anon key (used by the server route). Reads stay blocked.
create policy "anon can insert enquiries"
  on public.enquiries for insert to anon with check (true);
```

If the table is missing, the route logs a server error and still attempts email,
so a single missing table won't lose the lead — but **create it** for a reliable
record. (The existing `visits` and `subscriptions` tables follow the same anon-insert pattern.)

## Verifying delivery (do this before launch)

Delivery is currently **unverified** — it was not tested end-to-end to avoid
sending unsolicited mail. To verify:

1. Set the three `POSTMARK_*` vars with a **test receiver** (or your own inbox).
2. Submit the form once, or:
   ```bash
   curl -X POST http://localhost:3000/api/send-email \
     -H 'Content-Type: application/json' \
     -d '{"name":"Test User","email":"you@example.com","message":"This is a delivery test."}'
   ```
3. Confirm: `{ "ok": true, "stored": true, "emailed": true }`, the email arrives,
   and a row appears in `enquiries`.

## Spam protection notes

- Rate limiting and dedup are **in-memory and per-instance** — they reset on cold
  start and don't coordinate across serverless instances. They're a cheap first
  line of defence. For stronger guarantees add an edge WAF / Turnstile, or move
  the counters to Supabase/Upstash.
- The honeypot catches naive bots. Consider adding Cloudflare Turnstile for more.

## Booking (Calendly)

Set `NEXT_PUBLIC_CALENDLY_URL` to a real scheduling link. When unset, the site
does **not** show a fake calendar — it falls back to the enquiry form and direct
phone/email/WhatsApp. (`site.flags.calendlyUrl` in `src/config/site.ts`.)

## CRM push (not yet built)

A Zoho CRM (or other) lead push is **not** implemented. The clean place to add it
is inside `/api/send-email` after a successful store/email: post the enquiry to
the CRM's API using a server-only token (`ZOHO_*`). Keep it best-effort and
logged, like the Supabase step, so a CRM outage never blocks the enquiry.

## Connecting enquiries to won business (attribution)

- Each enquiry row has `created_at`, `service`, `referral`, `ip`, `user_agent`.
- To tie an enquiry to a qualified opportunity and revenue: give each enquiry a
  stable id (the table's `id`) and carry it into your CRM as the lead source
  reference. Tag the CRM deal with that id so you can later report
  enquiry → qualified → won. Analytics (below) measures the top of funnel; the
  CRM owns the money end. Do not store names/emails in analytics.
