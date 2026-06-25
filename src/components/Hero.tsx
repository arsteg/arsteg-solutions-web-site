"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, Star, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "150+", label: "Products Shipped" },
  { value: "50+", label: "Senior Engineers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "20+", label: "Countries" },
] as const;

const logos = [
  "Health-Tech",
  "FinTech",
  "Enterprise",
  "SaaS",
  "E-Commerce",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "description": "Enterprise software development partner. 50+ senior engineers. 150+ products shipped.",
          })
        }}
      />

      <section
        id="home"
        ref={containerRef}
        className="relative min-h-screen overflow-hidden bg-white"
      >
        {/* Premium light gradient background */}
        <div className="absolute inset-0">
          {/* Soft gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60" />

          {/* Animated gradient orbs - soft and subtle */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-transparent blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-purple-100/50 via-pink-50/30 to-transparent blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-50/40 via-blue-50/30 to-cyan-50/40 blur-[80px]"
          />

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ opacity }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 mb-8 shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-600">
                  Trusted by 150+ companies worldwide
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                We build software that{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    scales
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"
                  />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                50+ senior engineers with 10+ years average experience.
                From architecture to production — we deliver enterprise-grade
                software with startup velocity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gray-900 px-8 font-semibold text-white transition-all hover:bg-gray-800 hover:scale-[1.02] shadow-lg shadow-gray-900/20"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-8 font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  <Play className="h-5 w-5 text-gray-500" />
                  View Case Studies
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-6">
                {metrics.map(({ value, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y }}
              className="relative hidden lg:block"
            >
              {/* Main Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90"
                    alt="ARSTEG engineering team collaborating"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating Card 1 - Uptime */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/4 p-4 rounded-2xl bg-white shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Uptime</p>
                      <p className="text-lg font-bold text-gray-900">99.9%</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2 - Team */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-6 bottom-1/3 p-4 rounded-2xl bg-white shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white shadow-sm" />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Team</p>
                      <p className="text-sm font-bold text-gray-900">50+ Engineers</p>
                    </div>
                  </div>
                </motion.div>

                {/* Rating Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 left-1/4 p-4 rounded-2xl bg-white shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                    <span className="text-xs text-gray-500">(127 reviews)</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Industry Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 lg:mt-28"
          >
            <p className="text-center text-sm text-gray-400 mb-8">
              Trusted across industries
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {logos.map((name, i) => (
                <div
                  key={i}
                  className="text-lg font-semibold text-gray-300 hover:text-gray-400 transition-colors cursor-default"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>
    </>
  );
}
