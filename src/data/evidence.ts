/**
 * VERIFIED evidence only.
 *
 * Every entry here is published on the public website as a factual claim, so it
 * must be true and approved by the business AND (where it involves a third
 * party) something we have permission to show.
 *
 * These arrays are intentionally EMPTY. The previous site shipped fabricated
 * client names, anonymous testimonials and round-number metrics; those have
 * been withheld. Components that read this file render nothing (or a neutral
 * state) while the arrays are empty — they do not invent placeholders.
 *
 * To publish, add real entries and fill every required field. See
 * docs/MISSING-CONTENT-CHECKLIST.md for exactly what the business must supply.
 */

export interface ClientLogo {
  /** Exact client / brand name as approved for display. */
  name: string;
  /** Path under /public (e.g. "/logos/clients/acme.svg"). */
  logo: string;
  /** Optional link to a public reference of the engagement. */
  href?: string;
}

export interface Testimonial {
  /** The quote, verbatim and approved. */
  quote: string;
  /** Real, attributable person. No anonymous titles like "A CEO". */
  author: string;
  role: string;
  company: string;
  /** Optional link proving the quote is genuine (LinkedIn, review, etc.). */
  sourceUrl?: string;
}

export interface Certification {
  /** e.g. "Zoho Authorized Partner", "ISO 27001". */
  name: string;
  /** Link to the issuer's verification page / certificate. Required. */
  verifyUrl: string;
  /** Optional badge image under /public. */
  badge?: string;
}

export interface ReviewProfile {
  /** e.g. "Clutch", "GoodFirms", "Google". */
  platform: string;
  /** Public profile URL. Required so visitors can verify. */
  url: string;
  /** Rating, only if it can be read live on the linked profile. */
  rating?: number;
  reviewCount?: number;
}

/** Named clients with permission to display. Empty = withheld.
 * Example (fill with real, approved values and drop logos in /public/logos/clients/):
 *   { name: "Acme Health", logo: "/logos/clients/acme-health.svg", href: "https://acme.example" }
 */
export const clients: ClientLogo[] = [];

/** Attributed, approved testimonials. Empty = withheld.
 * Example (real person, approved quote — no anonymous titles):
 *   { quote: "They rebuilt our ops tool and it just works.",
 *     author: "Jane Cooper", role: "COO", company: "Acme Health",
 *     sourceUrl: "https://www.linkedin.com/in/janecooper" }
 */
export const testimonials: Testimonial[] = [];

/** Verified certifications / partner statuses. Empty = withheld.
 * Example:
 *   { name: "Zoho Authorized Partner", verifyUrl: "https://www.zoho.com/partners/...", badge: "/logos/zoho-partner.png" }
 */
export const certifications: Certification[] = [];

/** Public review profiles. Empty = withheld.
 * Example (only include rating/count if they're live on the linked profile):
 *   { platform: "Clutch", url: "https://clutch.co/profile/arsteg", rating: 4.9, reviewCount: 12 }
 */
export const reviewProfiles: ReviewProfile[] = [];

/** Convenience flags for conditional rendering. */
export const hasClients = clients.length > 0;
export const hasTestimonials = testimonials.length > 0;
export const hasCertifications = certifications.length > 0;
export const hasReviewProfiles = reviewProfiles.length > 0;
