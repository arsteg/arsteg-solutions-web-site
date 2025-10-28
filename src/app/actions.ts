'use server';

import { supabase } from '@/lib/supabase';
import { getVisitorId } from '@/lib/visitor';
import { headers } from 'next/headers';

export async function logVisit(pathname: string) {
  const headerList = await headers();

  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const userAgent = headerList.get('user-agent') ?? '';
  const referrer = headerList.get('referer') ?? '';

  const visitorId = await getVisitorId();

  const { error } = await supabase.from('visits').insert({
    visitor_id: visitorId,
    ip,
    user_agent: userAgent,
    pathname,
    referrer,
  });

  if (error) console.error('Supabase insert error:', error);
}