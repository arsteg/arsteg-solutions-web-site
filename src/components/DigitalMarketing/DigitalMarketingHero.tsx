"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Globe, Zap, TrendingUp, CheckCircle, BarChart, Smartphone } from "lucide-react";
import Link from "next/link";

export const DigitalMarketingHero = () => {
  return (
    <>
      {/* Digital Marketing Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing Services",
            "name": "Expert Digital Marketing Services – ARSTEG Solutions",
            "description": "Comprehensive digital marketing solutions including SEO, PPC, Social Media, Content Marketing, and Email Marketing. Drive growth and ROI.",
            "url": "https://arsteg.com/digital-marketing",
            "provider": {
              "@type": "Organization",
              "name": "ARSTEG Solutions Pvt. Ltd.",
              "url": "https://arsteg.com",
              "logo": "https://arsteg.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "LG-048, Elan Miracle, Sector 84",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122004",
                "addressCountry": "IN"
              },
              "telephone": "+91-844-747-0101"
            },
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "name": "Free Digital Marketing Strategy Session",
              "url": "https://arsteg.com/contact",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            }
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-32 lg:py-40">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            {/* SEO Badge */}
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/70 to-indigo-100/70 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-md ring-1 ring-blue-200/50 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              Full-Service Digital Marketing Agency
            </div>

            {/* H1 with High-Intent Keywords */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Drive Growth with
              </span>{" "}
              Data-Driven Marketing
            </h1>

            {/* SEO-Rich Subheading */}
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 md:text-xl lg:text-2xl">
              From <strong>SEO & PPC</strong> to <strong>Social Media</strong> and <strong>Email Marketing</strong>,
              we build integrated strategies that deliver measurable results.
              <strong>Maximize ROI</strong>, increase visibility, and convert more customers.
            </p>

            {/* Primary CTA */}
            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group">
                <Button
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Trust & Results Stats */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                { Icon: Globe, value: "300%", label: "Traffic Growth", color: "blue" },
                { Icon: TrendingUp, value: "10x", label: "ROI Improvement", color: "emerald" },
                { Icon: BarChart, value: "24/7", label: "Analytics & Support", color: "purple" },
              ].map(({ Icon, value, label, color }, i) => (
                <div
                  key={i}
                  className="group rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-1">
                    {value}
                    {label.includes("ROI") && <CheckCircle className="h-6 w-6 text-emerald-600" />}
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
                </div>
              ))}
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <h2>Digital Marketing Services in Gurugram – SEO, PPC, Social Media</h2>
              <p>
                ARSTEG is a leading digital marketing agency offering comprehensive solutions including
                Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing,
                Content Marketing, and Web Design. We help businesses grow online with data-driven strategies
                and expert execution.
              </p>
            </div>
          </div>
        </div>

        {/* Fade-in animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          [style] { animation: fadeIn 0.6s ease-out forwards; }
        `}</style>
      </section>
    </>
  );
};