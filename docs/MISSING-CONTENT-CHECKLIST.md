# Missing-Content Checklist

These items would materially strengthen the site but require **real, approved**
assets from the business. Nothing here is invented or placeholdered on the
public site — each slot stays empty until you supply the asset.

## 1. Trust & evidence (highest impact on conversion)

You indicated these exist — please supply the actual content so they can be published:

- [ ] **Named clients / logos.** For each: exact brand name, logo file (SVG/PNG), and written permission to display. → add to `clients` in `src/data/evidence.ts`, drop logo files in `public/logos/clients/`.
- [ ] **Attributed testimonials.** Real quote + person's full name, role, company, and ideally a link (LinkedIn/review). No anonymous titles. → `testimonials` in `src/data/evidence.ts`.
- [ ] **Review profiles.** The real Clutch / GoodFirms / Google Business profile URL (and only cite a rating if it's live on that profile). → `reviewProfiles` in `src/data/evidence.ts`.
- [ ] **Certifications / partner status.** e.g. "Zoho Authorized Partner", ISO — with the issuer's verification link. → `certifications` in `src/data/evidence.ts`.

## 2. Case studies (replace the representative examples)

The `/portfolio` items are currently **representative capability examples**, clearly
labelled as not being specific client engagements. To upgrade any to a real case study:

- [ ] Client name (or an approved anonymized descriptor with truthful scope).
- [ ] Context, constraints, and **ARSTEG's specific contribution** (distinct from the client's overall business growth).
- [ ] Deliverables and any results you can substantiate (with how they were measured).
- [ ] Written approval to publish.

## 3. Verified metrics (only if substantiable)

- [ ] Years in business, team size, number of projects — only publish exact numbers you can stand behind. (Currently omitted.)
- [ ] A confirmed **response-time SLA** (e.g. "within 1 business day"). Set `site.flags.responseSLA` once committed.

## 4. Imagery

- [ ] **Team photos** (real people, with consent) for the About page.
- [ ] **Real product screenshots** you have the right to show (replace the illustrative portfolio images / hero concept diagram).
- [ ] **Open Graph image** at `public/og-image.jpg` (1200×630) — currently referenced but not present, so social shares have no preview image.

## 5. Integrations to finish wiring (see LEAD-INTEGRATION.md)

- [ ] Confirm Postmark sender signature + that delivery works end-to-end (authorize one test send).
- [ ] Create the Supabase `enquiries` table (SQL in LEAD-INTEGRATION.md).
- [ ] Supply a real **Calendly URL** (`NEXT_PUBLIC_CALENDLY_URL`) if you want in-page booking.
- [ ] Supply a **GA4 measurement id** (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) to turn on analytics.
- [ ] Optional: CRM (e.g. Zoho CRM) lead push — not yet built; boundary noted in LEAD-INTEGRATION.md.

## 6. Pre-launch confirmations

- [ ] Confirm office address, phone and email are current.
- [ ] Confirm LinkedIn + X URLs resolve to the real profiles.
- [ ] Decide whether to keep the three blog posts (now reworded) or replace with fresh, dated content.
