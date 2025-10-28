import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';

export const VISITOR_COOKIE = 'sb-visitor-id';

export async function getVisitorId(): Promise<string> {
  const cookieStore = await cookies();
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