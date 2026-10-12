# Verification Results & Launch Blockers

## What was run

| Check | Tool | Result |
|---|---|---|
| Production build | `npm run build` (Next 15.5.9) | ✅ Passes — 31 routes generated |
| Type-check | `tsc` (via next build) | ✅ Passes (see note on `3d/` below) |
| Lint | `eslint` (via next build) | ✅ No errors blocking build |
| Runtime smoke test | `next start` + browser | ✅ Home, services, service detail, contact render; no console errors |
| Contact form validation | Manual (empty submit) | ✅ Blocks submit, shows field errors, preserves input |
| Redirects | `curl /zoho` | ✅ 308 → `/services/zoho-development` |
| Logo legibility | Visual | ✅ White wordmark now on a dark header, clearly readable |

Desktop screenshots were captured for the homepage, a service page, and the
contact page. (Mobile-width screenshots could not be reliably captured — the
browser tool's window resize did not change the rendered viewport. Responsive
layout is implemented via Tailwind breakpoints: mobile hamburger nav, single-column
stacks, and a mobile sticky CTA.)

## Verified after the first pass

- **End-to-end enquiry delivery is VERIFIED.** A live test POST to
  `/api/send-email` returned `{ ok: true, stored: false, emailed: true }` (HTTP 200);
  Postmark delivered to the configured receiver with no error. The sender
  signature and server token work.
- **Booking fallback renders** on `/contact` (no fake calendar); the Calendly
  embed activates automatically once `NEXT_PUBLIC_CALENDLY_URL` is set.

## Honestly not yet verified (do before launch)

1. **Supabase `enquiries` table** must be created (SQL in LEAD-INTEGRATION.md).
   The delivery test confirmed the store step currently fails with
   "Could not find the table 'public.enquiries'" — email still went through, but
   enquiries are NOT being persisted until you create the table. (Requires DB-owner
   access; run the SQL in the Supabase console.)
3. **Rotate the Postmark token** — the old `NEXT_PUBLIC_` key may have leaked into
   client bundles historically.
4. **Accessibility:** semantic structure, labels, visible focus, reduced-motion
   (via `MotionConfig reducedMotion="user"`) and contrast were built to target
   WCAG 2.2 AA, but this has **not** been validated with a screen reader or a full
   audit. Do not claim conformance on automated checks alone.
5. **Core Web Vitals** not measured on production hardware. First-load JS is
   ~102 kB shared + small per-route; framer-motion is the main dependency.
6. **Mobile layout** verify on real devices at 360/390/768/1024/1440.

## Known pre-existing issue (unrelated to this work)

- `src/components/3d/Canvas3D.tsx` (an untracked, in-progress file that predates
  this work, imported by nothing) has a type error — `useLoader` is imported
  from `@react-three/drei` but it lives in `@react-three/fiber`. It was left
  untouched and excluded from type-checking in `tsconfig.json` so it doesn't
  block builds. Fix the import (or finish the component) before using it.

## Launch blockers (must-do)

- [ ] Verify Postmark delivery end-to-end + rotate the token.
- [ ] Create the `enquiries` Supabase table.
- [ ] Confirm company contact details, LinkedIn/X URLs are current.
- [ ] Add `public/og-image.jpg` (social shares currently have no image).
- [ ] Decide on and supply real evidence (see MISSING-CONTENT-CHECKLIST.md) — the
      site is honest without it, but evidence is the biggest conversion lever.

## Nice-to-have before launch

- [ ] Real Calendly URL + GA4 id.
- [ ] Screen-reader pass and Lighthouse run on the deployed build.
- [ ] Replace illustrative imagery with real product screenshots.
