"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Globe, Zap, TrendingUp, CheckCircle, BarChart } from "lucide-react";
import Link from "next/link";

export const DigitalMarketingHero = () => {
  return (
    <>
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
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* SEO Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/70 to-indigo-100/70 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-md ring-1 ring-blue-200/50 backdrop-blur-sm"
            >
              <Zap className="h-4 w-4" />
              Full-Service Digital Marketing Agency
            </motion.div>

            {/* H1 */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Drive Growth with
              </span>{" "}
              Data-Driven Marketing
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 md:text-xl lg:text-2xl">
              From <strong>SEO & PPC</strong> to <strong>Social Media</strong> and <strong>Email Marketing</strong>,
              we build integrated strategies that deliver measurable results.
              <strong>Maximize ROI</strong>, increase visibility, and convert more customers.
            </p>

            {/* CTA */}
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

            {/* Trust Stats */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                { Icon: Globe, value: "300%", label: "Traffic Growth" },
                { Icon: TrendingUp, value: "10x", label: "ROI Improvement" },
                { Icon: BarChart, value: "24/7", label: "Analytics & Support" },
              ].map(({ Icon, value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
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
                </motion.div>
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingHero;
