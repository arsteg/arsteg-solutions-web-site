"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <>
      {/* CTA & Offer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Free Email Marketing Consultation & Strategy Session",
            "description": "Get a free 30-minute email marketing audit, growth strategy, and personalized ROI projection. No obligation.",
            "url": "https://arsteg.com/contact",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "offeredBy": {
              "@type": "Organization",
              "name": "ARSTEG Solutions",
              "url": "https://arsteg.com"
            },
            "validThrough": "2026-12-31"
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-blue-600/5" />

        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            {/* Icon */}
            <div className="mx-auto mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl ring-4 ring-white/50">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <Mail className="h-10 w-10 text-blue-600" />
              </div>
            </div>

            {/* SEO-Optimized H1 */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Ready to Get <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">42x ROI</span> from Email Marketing?
            </h1>

            {/* High-Conversion Copy */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 lg:text-xl">
              <strong>Free 30-Minute Strategy Session:</strong> Get a full email marketing audit, growth roadmap, and personalized ROI projection — <strong>no obligation</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group">
                <Button
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
                >
                  Claim Your Free Strategy Session
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 border-t border-gray-200/50 pt-8">
              <p className="mb-5 text-sm font-medium text-gray-600">
                Trusted by 500+ growing businesses
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 md:gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                  <span>Active Clients</span>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">10M+</span>
                  <span>Emails Sent Monthly</span>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">42x</span>
                  <span>Avg. ROI Delivered</span>
                </div>
              </div>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
              <h2>Free Email Marketing Consultation – Get 42x ROI</h2>
              <p>
                Claim your free 30-minute email marketing strategy session. 
                We’ll audit your current campaigns, build a growth roadmap, 
                and show you exactly how to achieve 42x ROI with Klaviyo, 
                Mailchimp, or custom automation. 500+ clients. 10M+ emails/month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};