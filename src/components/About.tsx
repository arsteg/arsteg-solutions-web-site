"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Lightbulb, Globe, Quote, CheckCircle, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const strengths = [
  {
    Icon: Users,
    title: "50+ Senior Engineers",
    description:
      "10+ years average experience in .NET, Java, React.js, Angular, Vue.js, Node.js, Python, AWS, Azure. Full-stack & DevOps certified.",
    result: "99% on-time delivery",
  },
  {
    Icon: Lightbulb,
    title: "Deep Industry Expertise",
    description:
      "Custom solutions for Healthcare, FinTech, E-commerce, EdTech, Logistics. HIPAA, PCI-DSS, GDPR compliant.",
    result: "40% efficiency gain",
  },
  {
    Icon: Globe,
    title: "150+ Global Projects",
    description:
      "Delivered across 20+ countries: USA, UK, Germany, Singapore, UAE. Enterprise-grade, scalable, secure.",
    result: "4.9/5 client rating",
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <>
      {/* Organization + LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Your Trusted Software Development Partner in Gurugram. 50+ engineers. 150+ projects. .NET, Java, React, Angular, AWS, Azure. Healthcare, FinTech, E-commerce.",
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
            "numberOfEmployees": "50",
            "areaServed": "Worldwide",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development"
              }
            }
          })
        }}
      />

      <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full bg-blue-50/30 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Execution-Led <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Partnership</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              Since 2015, we&apos;ve been helping startups and enterprises build
              high-performance digital products that drive real business value.
            </p>
          </motion.div>

          {/* Team Photo with Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 perspective-1000"
          >
            <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-black/5 transition-all hover:shadow-3xl">
              <Image
                src="/images/team-photo.jpg"
                alt="ARSTEG Solutions team of 50+ senior engineers"
                width={1200}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="rounded-2xl glass px-6 py-4 shadow-xl">
                  <p className="text-xl font-bold text-white">Our Hub of Innovation</p>
                  <p className="text-sm font-medium text-white/80">Gurugram, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strengths Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto"
          >
            {strengths.map(({ Icon, title, description, result }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group rounded-[2.5rem] bg-gray-50/50 p-10 text-left transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {description}
                </p>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {result}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl mb-24"
          >
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-600 px-10 py-16 md:px-20 text-white shadow-2xl">
              <Quote className="absolute -top-10 -left-10 h-64 w-64 text-white/5" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-blue-200 mb-8" />
                <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-10">
                  “ARSTEG delivered our FinTech platform in 3 months with zero downtime.
                  Their engineering precision reduced our operational cost by 40%.”
                </h3>
                <div className="h-px w-20 bg-blue-400 mb-6" />
                <p className="text-lg font-bold">Managing Director</p>
                <p className="text-blue-200">FinTech Venture, Singapore</p>

                <div className="mt-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-blue-200" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gray-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-black hover:scale-105 active:scale-95"
            >
              Partner with ARSTEG
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}