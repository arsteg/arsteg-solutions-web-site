"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ShoppingCart,
  Building2,
  Smartphone,
  Brain,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Activity,
    title: "Health-Tech Platform",
    industry: "Healthcare",
    description:
      "Real-time patient monitoring with 8+ device integrations. HIPAA-compliant architecture serving 500,000+ users.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "WebSocket"],
    result: "50x user growth",
    slug: "health-dashboard",
    gradient: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=90",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    industry: "Retail",
    description:
      "Multi-vendor marketplace handling 100K+ daily transactions with integrated payments and real-time analytics.",
    tech: ["Next.js", ".NET Core", "Redis", "Stripe"],
    result: "3x revenue growth",
    slug: "ecommerce-platform",
    gradient: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90",
  },
  {
    icon: Building2,
    title: "Insurance Portal",
    industry: "FinTech",
    description:
      "Legacy system modernization for a 15-year-old insurance platform with zero-downtime cloud migration.",
    tech: ["React", ".NET Core", "Azure", "Kubernetes"],
    result: "80% faster",
    slug: "insurance-portal",
    gradient: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=90",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    industry: "FinTech",
    description:
      "Cross-platform banking with biometric auth, real-time transactions, and PCI-DSS compliance.",
    tech: ["Flutter", "Node.js", "AWS", "Firebase"],
    result: "4.8 App Store rating",
    slug: "mobile-banking",
    gradient: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=90",
  },
  {
    icon: Brain,
    title: "AI Document Processor",
    industry: "Enterprise",
    description:
      "Intelligent document processing using GPT-4 and computer vision. Reduced manual processing by 90%.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    result: "90% automation",
    slug: "ai-document-processor",
    gradient: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=90",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    industry: "SaaS",
    description:
      "Real-time business intelligence with custom reporting, data visualization, and automated alerts.",
    tech: ["React", "D3.js", "Python", "Snowflake"],
    result: "200+ enterprise clients",
    slug: "analytics-dashboard",
    gradient: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90",
  },
] as const;

const industries = [
  { name: "Health-Tech", count: 40 },
  { name: "FinTech", count: 35 },
  { name: "E-Commerce", count: 30 },
  { name: "Enterprise", count: 25 },
  { name: "SaaS", count: 20 },
];

export default function Portfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Enterprise Software Portfolio",
            "itemListElement": projects.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": p.title,
                "applicationCategory": p.industry,
              }
            }))
          })
        }}
      />

      <section id="portfolio" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Case Studies
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              150+ products{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                shipped
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startups to Fortune 500 — we build software that drives real business results.
            </p>
          </motion.div>

          {/* Industry Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {industries.map((industry, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
              >
                <span className="font-medium text-gray-700">{industry.name}</span>
                <span className="rounded-full bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
                  {industry.count}+
                </span>
              </div>
            ))}
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <Link href="/portfolio/health-dashboard" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                        Featured
                      </span>
                      <span className="text-sm text-gray-400">Healthcare</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      Health-Tech Platform
                    </h3>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      Scaled a telemedicine platform from 10K to 500K users with real-time monitoring,
                      8+ device integrations, and HIPAA-compliant architecture.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {[
                        { value: "50x", label: "User Growth" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "8+", label: "Integrations" },
                      ].map((metric, i) => (
                        <div key={i}>
                          <p className="text-2xl lg:text-3xl font-bold text-white">{metric.value}</p>
                          <p className="text-sm text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      Read case study
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative hidden lg:block">
                    <div className="relative rounded-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=90"
                        alt="Health-tech platform dashboard"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {projects.slice(1).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                          <project.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((tech, j) => (
                          <span key={j} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                          {project.result}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">Have a similar project in mind?</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all hover:bg-gray-800"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
