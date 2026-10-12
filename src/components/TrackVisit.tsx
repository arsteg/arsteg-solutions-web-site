'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logVisit } from '@/app/actions';

export default function TrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    // Fire-and-forget visit logging; never let it surface to the user.
    logVisit(pathname).catch(() => {});
  }, [pathname]);

  return null;
}
