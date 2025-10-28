'use server';

import { supabase } from '@/lib/supabase';
import { getVisitorId } from '@/lib/visitor';
import { headers } from 'next/headers';

export async function logVisit() {
  const headerList = headers();
  const ip = headerList.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const userAgent = headerList.get('user-agent') || '';
  const referrer = headerList.get('referer') || '';
  const pathname = headerList.get('x-nextjs-pathname') || '/'; // we’ll set this

  const visitorId = getVisitorId();

  const { error } = await supabase.from('visits').insert({
    visitor_id: visitorId,
    ip,
    user_agent: userAgent,
    pathname,
    referrer,
  });

  if (error) console.error('Supabase insert error:', error);
}