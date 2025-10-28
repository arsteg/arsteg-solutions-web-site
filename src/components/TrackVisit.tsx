'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logVisit } from '@/app/actions';

export default function TrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('[TrackVisit] useEffect fired for pathname:', pathname); // ← ADD THIS

    logVisit(pathname).then(() => {
      console.log('[TrackVisit] logVisit succeeded for:', pathname); // ← ADD THIS
    }).catch((err) => {
      console.error('[TrackVisit] logVisit failed:', err); // ← ADD THIS
    });
  }, [pathname]);

  console.log('[TrackVisit] Component rendered with pathname:', pathname); // ← ADD THIS (runs on render)

  return null;
}