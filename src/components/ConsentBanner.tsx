'use client';

import { useEffect, useState } from 'react';
import { CONSENT_COOKIE, CONSENT_MAX_AGE, type ConsentValue } from '@/lib/consent';

export const CONSENT_EVENT = 'arsteg-consent-change';

function readConsent(): ConsentValue | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  const value = match?.split('=')[1];
  return value === 'granted' || value === 'denied' ? value : null;
}

function writeConsent(value: ConsentValue) {
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export default function ConsentBanner() {
  // null = not yet decided (show banner). Start hidden to avoid SSR flash.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  const decide = (value: ConsentValue) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Privacy consent">
      <div className="consent-inner">
        <p className="consent-copy">
          We use a cookie to understand site traffic. It&apos;s only set if you
          agree — declining keeps your visit anonymous. See our{' '}
          <a href="/privacy">privacy notice</a>.
        </p>
        <div className="consent-actions">
          <button type="button" className="consent-decline" onClick={() => decide('denied')}>
            Decline
          </button>
          <button type="button" className="consent-accept" onClick={() => decide('granted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
