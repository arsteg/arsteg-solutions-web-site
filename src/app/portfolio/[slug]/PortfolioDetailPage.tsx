"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Quote,
  Activity,
  ShoppingCart,
  Building2,
  Smartphone,
  Brain,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  ShoppingCart,
  Building2,
  Smartphone,
  Brain,
  BarChart3,
};

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface Project {
  slug: string;
  title: string;
  industry: string;
  description: string;
  fullDescription: string;
  tech: string[];
  result: string;
  metrics: string[];
  color: string;
  icon: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: Testimonial;
  image: string;
  timeline: string;
}

interface PortfolioDetailPageProps {
  project: Project;
}

export default function PortfolioDetailPage({ project }: PortfolioDetailPageProps) {
  const Icon = iconMap[project.icon] || Activity;

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${project.title} - Case Study`,
            "description": project.description,
            "image": project.image,
            "author": {
              "@type": "Organization",
              "name": "ARSTEG Solutions Pvt. Ltd.",
            },
            "publisher": {
              "@type": "Organization",
              "name": "ARSTEG Solutions Pvt. Ltd.",
              "url": "https://arsteg.com",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/50 pt-28 pb-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-200/40 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb20_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {project.industry}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{project.timeline}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                {project.fullDescription}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                    <p className="text-sm font-bold text-gray-900">{metric}</p>
                  </div>
                ))}
              </div>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold">
                <CheckCircle className="h-5 w-5" />
                {project.result}
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl ring-1 ring-gray-200"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-red-50 p-8 border border-red-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-emerald-50 p-8 border border-emerald-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Technologies{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Used
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Key{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
            </div>
            <div className="space-y-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{result}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto h-12 w-12 text-blue-300 mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8"
            >
              &ldquo;{project.testimonial.quote}&rdquo;
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg font-semibold text-gray-900">{project.testimonial.author}</p>
              <p className="text-gray-600">{project.testimonial.company}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-black hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-900"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
