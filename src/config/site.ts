/**
 * Single source of truth for VERIFIED ARSTEG business facts.
 *
 * Only put facts here that are independently verifiable (appear on the real
 * company's official channels / supplied by the business). Marketing claims,
 * metrics, review scores and testimonials do NOT belong here — see
 * `src/data/evidence.ts`, which stays empty until approved assets are supplied.
 *
 * Anything that is a promise to a prospect (e.g. a response-time SLA) is gated
 * so it only renders once the business confirms it.
 */

export const site = {
  name: 'ARSTEG Solutions',
  legalName: 'ARSTEG Solutions Pvt. Ltd.',
  // Short, buyer-facing description. Plain English, no superlatives.
  tagline: 'Software engineering partner for growing businesses',
  url: 'https://www.arsteg.com',
  // Canonical host without protocol (used in a few places)
  domain: 'www.arsteg.com',

  contact: {
    email: 'info@arsteg.com',
    phone: '+91-844-747-0101',
    // E.164, digits only — used for tel: and wa.me links
    phoneDigits: '918447470101',
    whatsapp: '918447470101',
  },

  address: {
    line1: 'LG-048, Elan Miracle',
    line2: 'Sector 84',
    city: 'Gurugram',
    region: 'Haryana',
    postalCode: '122004',
    country: 'IN',
    countryName: 'India',
  },

  social: {
    linkedin: 'https://in.linkedin.com/company/arsteg-solutions-pvt--ltd',
    x: 'https://x.com/ARSTEGSolutions',
  },

  /**
   * Markets we actively serve and typical engagement size.
   * Confirmed by the business: SMBs across India + US/UK/EU, ~$10k–$75k projects.
   */
  markets: {
    audience: 'Small and mid-sized businesses',
    regions: ['India', 'United States', 'United Kingdom', 'Europe'],
    typicalProjectSize: '$10,000 – $75,000',
  },

  /**
   * Feature flags / gated claims.
   * `null` or `false` means the asset/claim is NOT confirmed and must not render.
   */
  flags: {
    // Response-time promise. Set to a confirmed string (e.g. "within 1 business day")
    // ONLY when the business commits to it. Until then we show a soft, non-SLA line.
    responseSLA: null as string | null,

    // Calendly booking URL. Supply via NEXT_PUBLIC_CALENDLY_URL. When absent,
    // the "Book a call" UI falls back to the enquiry form + direct contact.
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? null,

    // Live-chat widget (Tawk.to etc.). Off until a real property/widget id is set.
    liveChat: false,
  },
} as const;

/** Full postal address as a single line. */
export function formattedAddress(): string {
  const a = site.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.region} ${a.postalCode}, ${a.countryName}`;
}

/** Pre-filled WhatsApp deep link. */
export function whatsappUrl(
  message = "Hi ARSTEG, I'd like to discuss a project.",
): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telHref = `tel:${site.contact.phone.replace(/[^0-9+]/g, '')}`;
export const mailHref = `mailto:${site.contact.email}`;
