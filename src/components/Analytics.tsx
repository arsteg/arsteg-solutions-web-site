import Script from 'next/script';

/**
 * Loads Google Analytics 4 only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * IP anonymization is on. No PII is ever sent (see lib/analytics.ts).
 *
 * This renders nothing when the measurement id is absent, so local/dev and
 * un-configured deployments stay clean.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
