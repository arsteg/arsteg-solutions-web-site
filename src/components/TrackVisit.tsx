'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logVisit } from '@/app/actions';

export default function TrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    // Send pathname to server action via FormData trick
    const send = async () => {
      const form = new FormData();
      // Server actions can read form data; we just need to trigger
      // We'll use a tiny trick: call via fetch + POST
      await fetch('/__track', {
        method: 'POST',
        body: JSON.stringify({ pathname }),
        headers: { 'Content-Type': 'application/json' },
      });
    };
    send();
  }, [pathname]);

  return null;
}