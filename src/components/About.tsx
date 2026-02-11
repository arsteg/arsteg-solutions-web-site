"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Lightbulb, Globe, Quote, CheckCircle, ArrowRight, Shield, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const strengths = [
  {
    Icon: Users,
    title: "Senior-Only Teams",
    description:
      "Every engineer has 8+ years experience. No juniors learning on your project. Direct access to the people writing your code.",
    result: "90% client retention",
    highlight: "50+ senior engineers",
  },
  {
    Icon: Shield,
    title: "Enterprise Security",
    description:
      "HIPAA, PCI-DSS, GDPR, and SOC 2 compliant processes. Your data and IP are protected by enterprise-grade security protocols.",
    result: "Zero security incidents",
    highlight: "Compliance-first approach",
  },
  {
    Icon: Zap,
    title: "Startup Speed",
    description:
      "48-hour team onboarding. Two-week sprints. Daily communication. We move as fast as you need without cutting corners.",
    result: "2x faster delivery",
    highlight: "Agile at scale",
  },
];

const testimonials = [
  {
    quote: "ARSTEG delivered our FinTech platform in 3 months with zero downtime. Their engineering precision reduced our operational cost by 40%.",
    author: "Managing Director",
    company: "FinTech Venture, Singapore",
    result: "40% cost reduction",
  },
  {
    quote: "We needed to scale from 10K to 500K users. ARSTEG rebuilt our architecture and we haven't had a single performance issue since.",
    author: "CTO",
    company: "Health-Tech Startup, USA",
    result: "50x user scale",
  },
];

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
            "description": "Enterprise software development partner. 50+ senior engineers. Custom web, mobile, AI, cloud solutions. 150+ products shipped.",
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
            }
          })
        }}
      />

      <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full bg-blue-50/30 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              Why Companies Choose Us
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your engineering team,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                extended
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              Since 2015, we&apos;ve helped 150+ companies ship products that matter.
              Not an outsourcing agency — a true engineering partner.
            </p>
          </motion.div>

          {/* Team Photo with Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 perspective-1000"
          >
            <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 transition-all hover:shadow-3xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="ARSTEG Solutions team of 50+ senior software engineers"
                width={1200}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="text-2xl font-bold text-white mb-2">Our Engineering Hub</p>
                    <p className="text-white/80">Gurugram, India — Serving clients globally</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">50+</p>
                      <p className="text-sm text-white/70">Engineers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">10+</p>
                      <p className="text-sm text-white/70">Years Avg. Exp.</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">20+</p>
                      <p className="text-sm text-white/70">Countries</p>
                    </div>
                  </div>
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
            className="mb-24 grid gap-6 md:grid-cols-3 max-w-7xl mx-auto"
          >
            {strengths.map(({ Icon, title, description, result, highlight }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-blue-100"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {highlight}
                  </span>
                </div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {description}
                </p>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {result}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white"
                >
                  <Quote className="absolute -top-4 -left-4 h-24 w-24 text-white/5" />
                  <div className="relative z-10">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg font-medium leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                      <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gray-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-black hover:scale-105 active:scale-95"
            >
              Let&apos;s Build Together
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
