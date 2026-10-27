// Analytics/visitor-tracking consent.
//
// The consent choice itself is stored in a strictly-necessary cookie
// (permitted without prior consent). No visitor-id cookie is set and no visit
// is logged until the user explicitly grants consent.
export const CONSENT_COOKIE = "arsteg-consent";
export type ConsentValue = "granted" | "denied";

// Shared on client and server. 180 days keeps the banner from nagging while
// still expiring the choice periodically.
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
