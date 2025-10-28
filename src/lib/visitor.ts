import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers'; // App Router
// import { cookies } from 'next/headers' works in server components/actions

export const VISITOR_COOKIE = 'sb-visitor-id';

export function getVisitorId() {
  // Server-side (App Router or API route)
  const cookieStore = cookies();
  let vid = cookieStore.get(VISITOR_COOKIE)?.value;

  if (!vid) {
    vid = uuidv4();
    // Set cookie (max 1 year)
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