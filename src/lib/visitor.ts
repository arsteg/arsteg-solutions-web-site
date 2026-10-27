import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';
import { CONSENT_COOKIE } from '@/lib/consent';

export const VISITOR_COOKIE = 'sb-visitor-id';

/**
 * Returns a stable visitor id ONLY when the visitor has granted consent.
 *
 * Without consent we never set the `sb-visitor-id` cookie and return null, so
 * no persistent identifier is written to the browser.
 */
export async function getVisitorId(): Promise<string | null> {
  const cookieStore = await cookies();

  // Strictly-necessary consent cookie gates all tracking.
  if (cookieStore.get(CONSENT_COOKIE)?.value !== 'granted') {
    return null;
  }

  let vid = cookieStore.get(VISITOR_COOKIE)?.value;
  if (!vid) {
    vid = uuidv4();
    cookieStore.set(VISITOR_COOKIE, vid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
  }
  return vid;
}
