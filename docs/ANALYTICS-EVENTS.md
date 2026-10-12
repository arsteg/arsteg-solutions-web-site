# Analytics Event Definitions

Implemented in `src/lib/analytics.ts` via `track(event, props)`. Loads GA4 only
when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (`src/components/Analytics.tsx`),
with `anonymize_ip`. No provider configured → `track()` is a safe no-op.

**Privacy rules enforced in code:** the tracker strips any `name`, `email`,
`phone`, `message`, `description` keys before sending. Never send PII.

| Event | Fires when | Props | Notes |
|---|---|---|---|
| `cta_click` | A primary/secondary CTA is clicked (hero, navbar, mobile sticky) | `id`, `location` | e.g. `id: "discuss_project"`, `location: "hero"` |
| `form_start` | User first interacts with an enquiry form | `location` | Fires once per form instance |
| `enquiry_submitted` | **Backend confirms** the enquiry (`{ ok: true }`) | `service`, `location` | This is the conversion. Not fired on validation/network error |
| `booking_start` | User opens the booking UI / Calendly | — | Reserved for when Calendly is wired |
| `contact_email_click` | A `mailto:` link is clicked | — | Intent signal, **not** a completed enquiry |
| `contact_phone_click` | A `tel:` link is clicked | — | Intent signal, not a conversion |
| `contact_whatsapp_click` | The WhatsApp button is clicked | — | Intent signal, not a conversion |

## Rules of interpretation

- **Count as conversions:** `enquiry_submitted` only. Optionally
  `booking_confirmed` — but that must come from the **Calendly webhook**, never
  the browser, so it is intentionally not a client event here.
- **Do NOT count as conversions:** contact-link clicks (`contact_*`),
  `form_start`, `cta_click`. These are funnel/intent signals.
- **Recommended GA4 funnel:** `cta_click` → `form_start` → `enquiry_submitted`.
- **Consent:** GA4 loads with IP anonymization. If you operate under GDPR/UK GDPR,
  add a consent gate before loading `<Analytics />` (e.g. Google Consent Mode).

## Recommended GA4 setup

1. Create a GA4 property, copy the `G-XXXXXXX` id into `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
2. Mark `enquiry_submitted` (and, once wired, `booking_confirmed`) as **key events**.
3. Build an exploration on the funnel above to find the biggest drop-off.
