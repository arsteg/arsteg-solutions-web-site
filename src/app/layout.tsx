// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { indexable } from "@/lib/seo";
import ConversionTracking from "@/components/ConversionTracking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import TrackVisit from "@/components/TrackVisit";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hire Developers & Dedicated Teams in India — ARSTEG Solutions",
    template: "%s | ARSTEG Solutions",
  },
  description:
    "ARSTEG is an India-based engineering partner. Hire dedicated developers, augment your team, or stand up a dedicated development team — plus custom software, integrations and AI automation.",
  keywords: [
    "hire developers in India",
    "IT staff augmentation",
    "dedicated development team India",
    "hire .NET developers",
    "hire Python developers",
    "hire React developers",
    "hire full-stack developers",
    "hire AI developers",
    "hire QA automation engineers",
    "hire DevOps engineers",
    "custom software development",
    "software modernization",
    "system integration",
    "AI automation",
    "Gurugram",
    "India",
  ],
  authors: [{ name: site.legalName }],
  creator: site.name,
  publisher: site.legalName,
  robots: {
    index: indexable,
    follow: true,
    googleBot: {
      index: indexable,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Hire Developers & Dedicated Teams in India — ARSTEG Solutions",
    description:
      "Hire dedicated developers and teams in India, or augment your team — .NET, Python, React, full-stack, AI, QA and DevOps — plus custom software and AI automation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ARSTEG Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Developers & Dedicated Teams in India — ARSTEG Solutions",
    description:
      "Hire dedicated developers and teams in India, or augment your team — .NET, Python, React, full-stack, AI, QA and DevOps — plus custom software and AI automation.",
    images: ["/opengraph-image"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f6f5f0",
  width: "device-width",
  initialScale: 1,
};

// Organization structured data — verified facts only.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  description:
    "India-based software engineering partner providing dedicated developers, staff augmentation and dedicated teams, plus custom software, integrations and AI automation.",
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.markets.regions,
  sameAs: [site.social.linkedin, site.social.x],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Analytics />
        <ConversionTracking />
        <TrackVisit />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
