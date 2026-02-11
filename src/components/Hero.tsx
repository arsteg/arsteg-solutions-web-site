"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Award, Globe, ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { Icon: Briefcase, value: "150+", label: "Products Shipped", proof: "Series A to Fortune 500" },
  { Icon: Users, value: "50+", label: "Senior Engineers", proof: "Avg. 10+ years exp." },
  { Icon: Shield, value: "99.9%", label: "Uptime Delivered", proof: "Enterprise SLAs" },
  { Icon: Globe, value: "20+", label: "Countries", proof: "USA, UK, EU, APAC" },
] as const;

const clientTypes = [
  "Series A Startups",
  "Growth-Stage SaaS",
  "Enterprise Teams",
  "Health-Tech Companies",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Organization + WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Enterprise software development partner. 50+ senior engineers. Custom web, mobile, AI, cloud solutions. 150+ products shipped for startups and Fortune 500.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "LG-048, Elan Miracle, Sector 84",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "telephone": "+91-844-747-0101",
            "email": "info@arsteg.com",
            "foundingDate": "2015",
            "sameAs": [
              "https://www.facebook.com/arsteg/",
              "https://x.com/ARSTEGSolutions",
              "https://in.linkedin.com/company/arsteg-solutions-pvt--ltd",
              "https://instagram.com/arsteg"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "offers": {
              "@type": "Offer",
              "name": "Free Technical Consultation",
              "url": "https://arsteg.com/contact",
              "price": "0"
            }
          })
        }}
      />

      <section
        id="home"
        ref={containerRef}
        className="relative min-h-[95vh] overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32"
      >
        {/* Immersive Background elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/40 blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute -right-[5%] bottom-[5%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-100/40 to-purple-100/30 blur-[120px]"
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-8"
            >
              <div className="space-y-6">
                {/* Social Proof Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-800"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  Trusted by 150+ companies worldwide
                </motion.div>

                {/* Main Headline */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                  We engineer systems that{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      scale businesses
                    </span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="absolute bottom-1 left-0 h-3 w-full bg-blue-100/60 -z-10"
                    />
                  </span>
                </h1>

                {/* Value Proposition */}
                <p className="max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                  <strong className="text-gray-900">Enterprise-grade engineering. Startup speed.</strong>{" "}
                  50+ senior engineers who&apos;ve shipped products used by millions — from Series A startups to Fortune 500 innovation labs.
                </p>

                {/* Client Types */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {clientTypes.map((type, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-black"
                  >
                    <span className="relative z-10">Book a Strategy Call</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("portfolio")}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-900 hover:bg-gray-50"
                >
                  <Zap className="h-5 w-5" />
                  View Our Work
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>48-hour onboarding</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Direct senior access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>No long-term lock-in</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image / 3D Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="perspective-1000 relative hidden lg:block"
            >
              <motion.div
                whileHover={{ rotateY: -3, rotateX: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="preserve-3d relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80"
                  alt="ARSTEG engineering team building enterprise software"
                  width={1000}
                  height={1200}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating metrics card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 glass rounded-2xl p-5 shadow-xl pointer-events-none"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Deployment Success</p>
                    <p className="text-lg font-bold text-gray-900">99.9% Uptime</p>
                  </div>
                </div>
              </motion.div>

              {/* Team card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-1/4 glass rounded-2xl p-5 shadow-2xl pointer-events-none"
              >
                <div className="space-y-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500" />
                    ))}
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">+45</span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-700">50+ Senior Engineers Ready</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-28"
          >
            {stats.map(({ Icon, value, label, proof }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-blue-100"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
                <Icon className="mx-auto mb-3 h-7 w-7 text-blue-600 transition-transform group-hover:scale-110" />
                <div className="text-3xl font-bold text-gray-900 tracking-tight">{value}</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  {proof}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
