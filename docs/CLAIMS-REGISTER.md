# Claims Register

Every trust claim found on the previous site, its source, whether it could be
verified, and the decision taken. "Publish" = kept. "Withhold" = removed from
public pages until the business supplies verified evidence. "Revise" = reworded
to a truthful, non-numeric statement.

The guiding rule: **existing website copy is not evidence.** A number or quote
only ships if it is independently true and (for third parties) approved.

| # | Claim (as previously published) | Where it appeared | Source | Verified? | Decision |
|---|---|---|---|---|---|
| 1 | "150+ products shipped" / "150+ projects" | Home stats, services, blog | Site copy only | No | **Withhold** — removed |
| 2 | "50+ senior engineers" | Home, footer, service pages, FAQ | Site copy only | No | **Withhold** — removed |
| 3 | "10+ years" / "20+ countries" | Home stats | Site copy only | No | **Withhold** — removed |
| 4 | "90% client retention" | Services (dedicated teams) | Site copy only | No | **Withhold** — removed |
| 5 | "42x average ROI on email" | Services (marketing) | Site copy only | No | **Withhold** — removed |
| 6 | "100% data sync accuracy" | Services (integrations, Zoho) | Site copy only | No | **Withhold** — removed |
| 7 | "80% faster / 60% lower cost post-migration" | Services, portfolio, blog | Site copy only | No | **Revise** — reworded to general outcomes, no numbers |
| 8 | Portfolio metrics: "500K+ users", "$10M+ processed", "100K daily orders", "1M+ docs", "1B+ data points", "200+ enterprise clients" | Portfolio cards & detail | Site copy only | No | **Withhold** — all removed; portfolio reframed as representative capability examples |
| 9 | "4.8 App Store rating", "200K+ downloads", "PCI-DSS certified" | Portfolio (mobile banking) | Site copy only | No | **Withhold** — item removed entirely (redirects to /portfolio) |
| 10 | Anonymous testimonials ("Chief Technology Officer, Health-Tech Startup, USA", etc.) | Portfolio detail | Site copy only | No | **Withhold** — all removed |
| 11 | Named testimonials "Sarah Mitchell, TechCorp" / "Michael Chen, GlobalTrade" | Zoho page | Site copy only — names not verifiable | No | **Withhold** — removed (page now redirects) |
| 12 | "98% client satisfaction", "40% avg efficiency gain", "50+ Zoho implementations" | Zoho page | Site copy only | No | **Withhold** — removed |
| 13 | "99.9% uptime", "24/7 support" | Process, service detail, Zoho | Site copy only | No | **Withhold** — removed |
| 14 | "30-day guarantee", "48-hour onboarding", "100% satisfaction or we make it right" | Process, service detail | Site copy only | No | **Withhold** — removed (unconfirmed guarantees) |
| 15 | "SOC 2 compliant processes" | Service detail "Why choose us" | Site copy only | No | **Withhold** — removed |
| 16 | "We'll reply within 24 hours" / "Free quote in 24 hours" | Contact form, floating CTA, service forms | Unconfirmed SLA | No | **Revise** — replaced with "We read every enquiry and reply personally." Gated behind `site.flags.responseSLA`; set it only when the business commits to an SLA |
| 17 | Review-platform mentions (Clutch/GoodFirms) in form dropdown | Contact form | Referral option only, not a claim | n/a | **Keep** (it's a "how did you hear about us" option, not a rating claim) |
| 18 | Blog: "Lessons from 150+ Integrations", "reduce manual processing by 90%, 5x response times", "80% faster… 40% reduction" case story, "75% of enterprises" | Blog posts | Site copy / uncited | No | **Revise** — retitled and reworded to remove fabricated self-metrics and uncited stats |
| 19 | Client logos | Previously none shown; audit recommended adding | — | n/a | **Withhold path ready** — `src/data/evidence.ts` renders real logos once supplied + approved |
| 20 | Company name, address, phone, email, LinkedIn, X | Footer, contact, schema | Consistent across site; business-owned | Treated as verified (confirm before launch) | **Publish** |

## Verified & published

- **Company identity:** ARSTEG Solutions Pvt. Ltd.; Gurugram office (LG-048, Elan Miracle, Sector 84, Haryana 122004); +91-844-747-0101; info@arsteg.com; LinkedIn + X profiles. (Please confirm these are current before go-live.)
- **Markets & engagement size:** SMBs across India, US, UK, Europe; ~$10k–$75k projects. (Confirmed by the business in the project brief.)
- **Service descriptions, process, technologies:** factual descriptions of what ARSTEG does — no performance numbers attached.

## How evidence gets published later

Real evidence lives in `src/config/site.ts` (facts, flags) and
`src/data/evidence.ts` (clients, testimonials, certifications, review profiles).
Those arrays are empty today, so the trust strip and testimonial blocks render
nothing. Fill them with approved assets and they appear automatically — no
fabricated placeholders are ever shown. See `MISSING-CONTENT-CHECKLIST.md`.
