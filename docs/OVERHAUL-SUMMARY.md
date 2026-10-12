# ARSTEG Website Overhaul — Summary

A conversion- and trust-focused rebuild of arsteg.com, done **in the existing
stack** (Next.js 15 App Router, Tailwind v4, framer-motion). Branch:
`redesign/lead-gen-overhaul`.

## The one-line change in positioning

From a broad, interchangeable "enterprise software company with 50+ engineers,
150+ projects" → to a specific, honest partner: **"Software that fits how your
business actually works"** — for SMBs, with three clear offers (custom software &
modernization, integrations & AI automation, dedicated teams).

## Positioning decisions

- **Audience named everywhere:** SMBs across India/US/UK/Europe, ~$10k–$75k. Copy
  speaks to buyers' problems (spreadsheets, legacy systems, disconnected tools),
  not generic "innovation/excellence".
- **Three priority services featured; others secondary.** Zoho and marketing are
  preserved as secondary service pages, not pushed as equally important.
- **AI automation emphasized** as requested — woven into the Integrations service
  with an honest stance (human-in-the-loop, validation, no over-claiming).
- **Technologies moved below the business case** (onto service pages, after
  "who it's for / problems / deliverables / process").

## Trust & honesty (the core of this work)

- Built a **claims register** (`CLAIMS-REGISTER.md`): every fabricated metric,
  anonymous testimonial, fake rating and unconfirmed guarantee was withheld or
  reworded. Nothing invented was published.
- **Evidence is data-driven and empty by default** (`src/data/evidence.ts`):
  client logos, testimonials, certifications and review profiles render **only**
  when real, approved assets are supplied — no placeholders.
- Portfolio reframed as **clearly-labelled representative capability examples**,
  with all invented numbers and testimonials removed.
- Response-time promises **gated** behind a flag; default copy is honest
  ("We read every enquiry and reply personally").

## Lead capture

- **Security fix:** Postmark credentials moved from `NEXT_PUBLIC_*` (browser-exposed!)
  to server-only env vars; the public copies were removed. **Rotate the token.**
- `/api/send-email` rewritten (TypeScript): server-side validation, HTML-escaping,
  honeypot, per-IP rate limiting, duplicate-submission guard, Supabase persistence,
  Postmark delivery, and **success reported only on backend confirmation**.
- Simplified first-contact form (name, email, "what do you need help with?",
  optional company/website, optional area & budget with "Not sure yet"). Accessible
  labels, field-level errors, input preserved on error, "what happens next".
- One consistent primary action site-wide: **"Discuss your project."**
- WhatsApp/phone/email accessible without blocking mobile use (single sticky CTA).

## Design

- **Dark, legible header** solves the white-logo-on-pale-background problem using
  the real logo; **red** (from the logo) is the single restrained accent.
- Light neutral backgrounds, dark readable text, consistent spacing, varied
  layouts (not every section is a card grid), labelled conceptual diagram in the hero.
- Removed: exit-intent popup, placeholder Tawk.to widget, repeated stat counters,
  fabricated testimonials/trust badges, duplicate CTAs, and full blog/portfolio
  page injections on the homepage.
- Reduced-motion respected globally via `MotionConfig reducedMotion="user"`.

## SEO & analytics

- `sitemap.ts`, `robots.ts`, per-page titles/descriptions/canonicals, verified-only
  Organization/Service/FAQ structured data (fake aggregate ratings removed),
  Open Graph, redirect map for changed URLs, new `/privacy` page reflecting real
  data flows.
- Privacy-safe analytics scaffold (`lib/analytics.ts` + `Analytics.tsx`): GA4 loads
  only when configured, IP anonymized, PII stripped. See `ANALYTICS-EVENTS.md`.

## Site structure

Home · Services (overview + 5 service pages) · Our Work (index + 5 detail pages) ·
About · Insights (blog) · Privacy · Contact. Nav: Services / Our Work / About /
Insights / Discuss your project.

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
# or a production preview:
npm run build && npm run start
```

Set env vars from `.env.example` for email/analytics/booking to work.

## Deploy (do NOT deploy without authorization)

The app is a standard Next.js 15 app (Vercel-friendly, or any Node host).
Before production:
1. Complete the **launch blockers** in `VERIFICATION.md` (verify email delivery,
   create the Supabase `enquiries` table, rotate the Postmark token, add OG image).
2. Set production env vars (server-only Postmark; Supabase; optional Calendly/GA4).
3. Deploy the `redesign/lead-gen-overhaul` branch to a **preview** URL first, review,
   then promote.

## Docs index

- `CLAIMS-REGISTER.md` — every claim, source, verdict.
- `MISSING-CONTENT-CHECKLIST.md` — what the business must supply.
- `REDIRECT-MAP.md` — old → new URLs.
- `LEAD-INTEGRATION.md` — email/CRM setup, env, Supabase SQL, verification.
- `ANALYTICS-EVENTS.md` — event definitions & rules.
- `VERIFICATION.md` — what was tested; launch blockers.
- `ACQUISITION-PLAN-30-60-90.md` — the go-to-market plan.
