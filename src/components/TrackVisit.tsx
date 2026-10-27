'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logVisit } from '@/app/actions';
import { CONSENT_COOKIE } from '@/lib/consent';
import { CONSENT_EVENT } from '@/components/ConsentBanner';

function hasConsent(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie
    .split('; ')
    .some((c) => c === `${CONSENT_COOKIE}=granted`);
}

export default function TrackVisit() {
  const pathname = usePathname();

  useEffect(() => {
    // Only log once consent has been granted.
    const log = () => {
      if (hasConsent()) logVisit(pathname).catch(() => {});
    };
    log();
    // If the visitor accepts after this page loaded, log the current view then.
    window.addEventListener(CONSENT_EVENT, log);
    return () => window.removeEventListener(CONSENT_EVENT, log);
  }, [pathname]);

  return null;
}
