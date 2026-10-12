# 30 / 60 / 90-Day Acquisition & Conversion Plan

Grounded in the confirmed target: **small and mid-sized businesses across India,
US, UK and Europe**, typical projects **~$10k–$75k**, with three priority offers
(custom software & modernization, integrations & AI automation, dedicated teams).

No revenue or conversion-rate forecasts are included — those depend on traffic
and sales data the business hasn't shared, and inventing them would be dishonest.
Instead each phase has concrete actions and the metric to watch.

---

## Days 0–30 — Make the funnel real and measurable

**Goal: nothing leaks.** Prove that an enquiry reliably reaches a human and that
you can see it happen.

- [ ] Finish lead plumbing: create the `enquiries` table, verify Postmark
      delivery end-to-end, rotate the token (see LEAD-INTEGRATION.md).
- [ ] Turn on analytics: set `NEXT_PUBLIC_GA_MEASUREMENT_ID`; mark
      `enquiry_submitted` as a key event; build the `cta_click → form_start →
      enquiry_submitted` funnel.
- [ ] Add `public/og-image.jpg` and confirm all contact details.
- [ ] Set up Google Search Console + Bing Webmaster; submit `/sitemap.xml`.
- [ ] Claim/complete a **Google Business Profile** (Gurugram) and a
      **Clutch/GoodFirms** profile — these are the review profiles the trust strip
      can cite once live.
- [ ] Ask 3–5 past clients for a short, attributable testimonial and permission
      to name them. Publish via `src/data/evidence.ts` as they come in.

**Watch:** backend-confirmed enquiries/week; funnel drop-off between `form_start`
and `enquiry_submitted`.

---

## Days 31–60 — Depth where buyers decide, and a repeatable outbound motion

**Goal: give high-intent visitors proof, and start creating demand.**

- [ ] Convert 1–2 representative portfolio items into **real, approved case
      studies** (context → ARSTEG's specific contribution → substantiated result).
      One strong case study per priority service beats five thin ones.
- [ ] Publish the Calendly link so discovery calls can be booked in-page; add
      `booking_start` tracking and a Calendly webhook for confirmed bookings.
- [ ] Add one deep, genuinely useful article per priority service (e.g. "When to
      modernize vs rebuild", "Where AI automation actually pays off") — these rank
      for high-intent, low-competition queries and give sales something to send.
- [ ] Start **targeted outbound** to the ICP: LinkedIn + email to operations/eng
      leaders at SMBs in your regions, referencing a specific problem the service
      pages describe. Keep volume low and personalized.
- [ ] Set up a simple lead → CRM flow (even a spreadsheet or Zoho CRM) so every
      enquiry is tagged with its `service` and `referral` and tracked to
      qualified/won.

**Watch:** which service pages and articles produce enquiries; discovery-call
booking rate; reply rate on outbound.

---

## Days 61–90 — Compound what works

**Goal: double down on the one or two channels showing qualified enquiries.**

- [ ] Review 90 days of funnel + CRM data. Identify the channel and service with
      the best **enquiry → qualified** ratio and concentrate effort there.
- [ ] Expand the winning content/service cluster (more articles, a second case
      study, internal links from the blog to the service page and `/contact`).
- [ ] Consider a small, tightly-targeted paid test (Google Search on high-intent
      terms like "custom software development for [industry]", or LinkedIn to the
      ICP) — only after organic measurement proves which messages convert, so you
      don't pay to learn what analytics can tell you free.
- [ ] Gather and publish more verified testimonials/logos; aim to have the trust
      strip populated with real evidence.
- [ ] Run a conversion review of the enquiry form and top service pages using the
      funnel data; tune the weakest step.

**Watch:** cost (time or money) per qualified enquiry by channel; enquiry →
qualified → won in the CRM.

---

## Principles throughout

- **Honesty is the strategy.** The site wins trust by being specific and verifiable.
  Keep claims evidenced; add numbers only when you can stand behind them.
- **One primary action everywhere:** "Discuss your project."
- **Measure the backend, not clicks.** A `tel:`/WhatsApp click is intent, not a lead.
- **Evidence is the biggest lever.** Real case studies, named testimonials and a
  live review profile will move conversion more than any design change.
