"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Award, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { Icon: Briefcase, value: "150+", label: "Projects Delivered", proof: "Global clients" },
  { Icon: Users, value: "50+", label: "Senior Engineers", proof: "10+ yrs avg." },
  { Icon: Award, value: "10+", label: "Years Experience", proof: "Since 2015" },
  { Icon: Globe, value: "20+", label: "Countries Served", proof: "USA, UK, EU, Asia" },
] as const;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
            "description": "Your Trusted Software Development Partner in Gurugram. 50+ engineers. Custom web, mobile, AI, cloud, email marketing. 150+ projects. 4.9/5 rating.",
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
              "name": "Free Project Consultation",
              "url": "https://arsteg.com/contact",
              "price": "0"
            }
          })
        }}
      />

      <section
        id="home"
        ref={containerRef}
        className="relative min-h-[90vh] overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32"
      >
        {/* Immersive Background elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute -right-[5%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-indigo-100/30 blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-700"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  Trusted by 150+ Global Clients
                </motion.div>

                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                  Building the Future of{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Digital Solutions
                    </span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute bottom-2 left-0 h-3 w-full bg-blue-100/50 z-0"
                    />
                  </span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                  We empower businesses with <strong>cutting-edge software</strong>.
                  From custom web apps to AI-driven mobile solutions,
                  we bridge the gap between imagination and execution.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-black"
                  >
                    <span className="relative z-10 text-white">Get Free Consultation</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("services")}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600"
                >
                  Explore Services
                </motion.button>
              </div>

              {/* Certifications / Trust */}
              <div className="flex flex-wrap items-center gap-6 pt-4 grayscale opacity-60">
                <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Certified Partner in</span>
                <div className="flex gap-4">
                  <div className="h-6 w-px bg-gray-300" />
                  <span className="text-sm font-bold">AWS</span>
                  <span className="text-sm font-bold">AZURE</span>
                  <span className="text-sm font-bold">REACT</span>
                  <span className="text-sm font-bold">.NET</span>
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
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="preserve-3d relative overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/5"
              >
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="Arsteg Solutions Software Development"
                  width={1000}
                  height={1200}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay" />
              </motion.div>

              {/* Floating elements for depth */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass rounded-2xl p-4 shadow-xl pointer-events-none"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Project Success</p>
                    <p className="text-sm font-bold text-gray-900">99.9% Delivery Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-1/4 glass rounded-2xl p-5 shadow-2xl pointer-events-none"
              >
                <div className="space-y-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-600">50+ Senior Engineers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-32"
          >
            {stats.map(({ Icon, value, label, proof }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group glass relative overflow-hidden rounded-3xl p-8 text-center transition-all hover:shadow-2xl hover:bg-white/90"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                <Icon className="mx-auto mb-4 h-8 w-8 text-blue-600 transition-transform group-hover:scale-110" />
                <div className="text-3xl font-bold text-gray-900 lg:text-4xl tracking-tight">{value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{label}</div>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  <CheckCircle className="h-2.5 w-2.5" />
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