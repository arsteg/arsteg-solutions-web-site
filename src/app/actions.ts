'use server';

import { supabase } from '@/lib/supabase';
import { getVisitorId } from '@/lib/visitor';
import { headers } from 'next/headers';

// Hard upper bound on how long visit logging may take. If Supabase is slow or
// unreachable the insert is abandoned so it can never stall a page response.
const LOG_TIMEOUT_MS = 2500;

function withTimeout<T>(p: PromiseLike<T>, ms: number): Promise<T | undefined> {
  return Promise.race([
    Promise.resolve(p),
    new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), ms)),
  ]);
}

export async function logVisit(pathname: string) {
  try {
    // No consent → no visitor id → do not log anything.
    const visitorId = await getVisitorId();
    if (!visitorId) return;

    const headerList = await headers();
    const ip =
      headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    const userAgent = headerList.get('user-agent') ?? '';
    const referrer = headerList.get('referer') ?? '';

    const result = await withTimeout(
      supabase.from('visits').insert({
        visitor_id: visitorId,
        ip,
        user_agent: userAgent,
        pathname,
        referrer,
      }),
      LOG_TIMEOUT_MS,
    );
    if (result?.error) console.error('[visit] Supabase insert failed:', result.error.message);
  } catch (e) {
    // Visit logging must never surface to the user or break a response.
    console.error('[visit] logVisit threw:', e);
  }
}
