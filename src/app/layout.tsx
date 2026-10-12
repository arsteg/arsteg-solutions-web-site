// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import './App.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import Analytics from '@/components/Analytics';
import TrackVisit from '@/components/TrackVisit';
import { site } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'ARSTEG Solutions — Custom software, integrations & AI automation',
    template: '%s | ARSTEG Solutions',
  },
  description:
    'ARSTEG is a software engineering partner for small and mid-sized businesses. We build custom applications, modernize legacy systems, and connect and automate the tools you already use.',
  keywords: [
    'custom software development',
    'software modernization',
    'system integration',
    'workflow automation',
    'AI automation',
    'dedicated development team',
    'Zoho implementation',
    'Gurugram',
    'India',
  ],
  authors: [{ name: site.legalName }],
  creator: site.name,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'ARSTEG Solutions — Custom software, integrations & AI automation',
    description:
      'Software engineering partner for growing businesses: custom applications, modernization, integrations and AI automation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ARSTEG Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARSTEG Solutions — Custom software, integrations & AI automation',
    description:
      'Software engineering partner for growing businesses: custom applications, modernization, integrations and AI automation.',
    images: ['/og-image.jpg'],
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

// Organization structured data — verified facts only.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  description:
    'Software engineering partner for small and mid-sized businesses: custom applications, modernization, integrations and AI automation.',
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.markets.regions,
  sameAs: [site.social.linkedin, site.social.x],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Analytics />
        <TrackVisit />
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
