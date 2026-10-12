/**
 * Privacy-safe analytics wrapper.
 *
 * Rules:
 *  - NEVER pass PII (names, emails, phone numbers, project descriptions).
 *  - A conversion event means an action completed, not a contact link click.
 *    `enquiry_submitted` is only fired after the backend confirms acceptance.
 *    `booking_confirmed` is intentionally NOT fired client-side — only the
 *    booking provider (Calendly webhook) can confirm a booking.
 *  - No-ops silently when no analytics provider is configured, so calls are
 *    always safe to leave in the code.
 *
 * Wire a provider by setting NEXT_PUBLIC_GA_MEASUREMENT_ID and rendering
 * <Analytics /> (see components/Analytics.tsx).
 */

export type AnalyticsEvent =
  | 'cta_click' // any primary/secondary CTA. props: { id, location }
  | 'form_start' // user focused/typed in the enquiry form the first time
  | 'enquiry_submitted' // backend-confirmed enquiry. props: { service? }
  | 'booking_start' // user opened the booking UI / Calendly
  | 'contact_email_click'
  | 'contact_phone_click'
  | 'contact_whatsapp_click';

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === 'undefined') return;

  // Guard against accidental PII keys.
  const forbidden = ['name', 'email', 'phone', 'message', 'description'];
  for (const k of Object.keys(props)) {
    if (forbidden.includes(k.toLowerCase())) {
      delete props[k];
    }
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, props);
    }
    // Also push to dataLayer for GTM / debugging, if present.
    window.dataLayer?.push({ event, ...props });
  } catch {
    /* analytics must never break the UI */
  }
}
