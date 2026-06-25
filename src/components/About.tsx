"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Shield, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: Users,
    title: "Senior-Only Teams",
    description:
      "Every engineer has 8+ years experience. No juniors learning on your project. Direct access to decision-makers.",
    metric: "90%",
    metricLabel: "Client retention",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "HIPAA, PCI-DSS, GDPR, and SOC 2 compliant. Your data and IP protected by enterprise-grade protocols.",
    metric: "Zero",
    metricLabel: "Security incidents",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Startup Speed",
    description:
      "48-hour onboarding. Two-week sprints. Daily communication. Enterprise quality without enterprise bureaucracy.",
    metric: "2x",
    metricLabel: "Faster delivery",
    gradient: "from-orange-500 to-red-500",
  },
];

const testimonials = [
  {
    quote: "ARSTEG delivered our FinTech platform in 3 months with zero downtime. Their engineering precision reduced our operational cost by 40%.",
    author: "Managing Director",
    company: "FinTech Venture, Singapore",
    metric: "40% cost reduction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
  },
  {
    quote: "We needed to scale from 10K to 500K users. ARSTEG rebuilt our architecture and we haven't had a single performance issue since.",
    author: "CTO",
    company: "Health-Tech Startup, USA",
    metric: "50x user scale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&fit=crop",
  },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "foundingDate": "2015",
            "numberOfEmployees": "50",
          })
        }}
      />

      <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Why Companies Choose Us
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your engineering team,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                extended
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since 2015, we&apos;ve helped 150+ companies ship products that matter.
              Not an outsourcing agency — a true engineering partner.
            </p>
          </motion.div>

          {/* Team Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=90"
                alt="ARSTEG engineering team"
                width={1400}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="flex flex-wrap items-end justify-between gap-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Engineering Excellence
                    </h3>
                    <p className="text-white/70 max-w-md">
                      Our team in Gurugram, India serves clients globally with enterprise-grade solutions.
                    </p>
                  </div>
                  <div className="flex gap-12">
                    {[
                      { value: "50+", label: "Engineers" },
                      { value: "10+", label: "Avg. Years" },
                      { value: "20+", label: "Countries" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-white/60">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strengths Grid */}
          <div className="grid gap-6 lg:grid-cols-3 mb-20">
            {strengths.map(({ icon: Icon, title, description, metric, metricLabel, gradient }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6`}>
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">{metric}</span>
                  <span className="text-sm text-gray-500">{metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid gap-6 lg:grid-cols-2 mb-16">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-lg text-white leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1.5 rounded-full">
                    {testimonial.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all hover:bg-gray-800"
            >
              Let&apos;s Build Together
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
