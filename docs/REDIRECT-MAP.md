# Redirect Map

Implemented in `next.config.ts` (`redirects()`), all HTTP 308 permanent.
Purpose: preserve SEO value and inbound links after restructuring, and
consolidate duplicate/fabricated pages into canonical ones.

| Old URL | New URL | Why |
|---|---|---|
| `/zoho` | `/services/zoho-development` | Standalone Zoho page (with fabricated testimonials/stats) consolidated into the canonical service page |
| `/DigitalMarketing` | `/services/digital-marketing-growth` | Standalone marketing page (fabricated case studies/stats) consolidated into the service page |
| `/services/software-maintenance-modernization` | `/services/custom-software-development` | "Legacy modernization" merged into the custom-software service |
| `/services/api-third-party-integrations` | `/services/integrations-automation` | Renamed to the repositioned "Integrations & AI automation" service |
| `/portfolio/mobile-banking` | `/portfolio` | Item removed (unverifiable "4.8 rating / 200K downloads / PCI-DSS" claims) |

## Unchanged (still valid) URLs

`/`, `/services`, `/portfolio`, `/about`, `/blog`, `/blog/[slug]`, `/careers`,
`/contact`, plus `/services/custom-software-development`,
`/services/dedicated-engineering-teams`, `/services/zoho-development`,
`/services/digital-marketing-growth`, and the retained `/portfolio/*` slugs
(`health-dashboard`, `ecommerce-platform`, `insurance-portal`,
`ai-document-processor`, `analytics-dashboard`).

## New URLs

`/privacy` (new), `/sitemap.xml`, `/robots.txt`.

## Note on the new service slug

`/services/integrations-automation` is a brand-new canonical URL. The old
`/services/api-third-party-integrations` redirects to it. If any external links
point to the old slug they'll be preserved via the 308.
