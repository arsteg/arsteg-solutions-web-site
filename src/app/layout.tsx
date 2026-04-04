// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import './App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrackVisit from '@/components/TrackVisit';

export const metadata: Metadata = {
  title: {
    default: 'ARSTEG Solutions - Enterprise Software Development | Web, Mobile, Zoho',
    template: '%s | ARSTEG Solutions',
  },
  description: 'Enterprise software development company with 50+ senior engineers. Custom web & mobile apps, Zoho development, API integrations, and dedicated engineering teams. 150+ products shipped worldwide.',
  keywords: [
    'software development company',
    'custom software development',
    'web development',
    'mobile app development',
    'Zoho development',
    'Zoho CRM implementation',
    'Zoho integration',
    'API integration',
    'dedicated development team',
    'enterprise software',
    'software outsourcing',
    'Gurugram',
    'India',
  ],
  authors: [{ name: 'ARSTEG Solutions Pvt. Ltd.' }],
  creator: 'ARSTEG Solutions',
  publisher: 'ARSTEG Solutions Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arsteg.com',
    siteName: 'ARSTEG Solutions',
    title: 'ARSTEG Solutions - Enterprise Software Development',
    description: 'Enterprise software development company with 50+ senior engineers. Custom web & mobile apps, Zoho development, API integrations.',
    images: [
      {
        url: 'https://arsteg.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARSTEG Solutions - Enterprise Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARSTEG Solutions - Enterprise Software Development',
    description: 'Enterprise software development company with 50+ senior engineers. Custom web & mobile apps, Zoho development, API integrations.',
    images: ['https://arsteg.com/og-image.jpg'],
    creator: '@ARSTEGSolutions',
  },
  alternates: {
    canonical: 'https://arsteg.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <TrackVisit />
        <Navbar />
        <main className="flex-grow container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}