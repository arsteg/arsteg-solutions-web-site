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
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Activity,
    title: "Health-Tech Platform",
    industry: "Healthcare",
    description:
      "Real-time patient monitoring dashboard with 8+ device integrations. HIPAA-compliant architecture serving 50,000+ users.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "WebSocket"],
    result: "50x user growth",
    metrics: ["500K+ users", "8 device APIs", "99.9% uptime"],
    slug: "health-dashboard",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    industry: "Retail",
    description:
      "Multi-vendor marketplace handling 100K+ daily transactions. Integrated payments, inventory management, and real-time analytics.",
    tech: ["Next.js", ".NET Core", "Redis", "Stripe"],
    result: "3x revenue growth",
    metrics: ["$10M+ processed", "100K daily orders", "2s load time"],
    slug: "ecommerce-platform",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Insurance Portal",
    industry: "FinTech",
    description:
      "Legacy system modernization for a 15-year-old insurance platform. Cloud migration with zero downtime.",
    tech: ["React", ".NET Core", "Azure", "Kubernetes"],
    result: "80% faster",
    metrics: ["40% cost reduction", "Zero downtime", "Modern stack"],
    slug: "insurance-portal",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    industry: "FinTech",
    description:
      "Cross-platform banking application with biometric auth, real-time transactions, and PCI-DSS compliance.",
    tech: ["Flutter", "Node.js", "AWS", "Firebase"],
    result: "4.8 App Store rating",
    metrics: ["200K+ downloads", "PCI compliant", "Biometric auth"],
    slug: "mobile-banking",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "AI Document Processor",
    industry: "Enterprise",
    description:
      "Intelligent document processing system using GPT-4 and computer vision. Reduced manual processing by 90%.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    result: "90% automation",
    metrics: ["1M+ docs processed", "95% accuracy", "10x faster"],
    slug: "ai-document-processor",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    industry: "SaaS",
    description:
      "Real-time business intelligence platform with custom reporting, data visualization, and automated alerts.",
    tech: ["React", "D3.js", "Python", "Snowflake"],
    result: "200+ enterprise clients",
    metrics: ["1B+ data points", "Real-time sync", "Custom reports"],
    slug: "analytics-dashboard",
    color: "from-cyan-500 to-blue-600",
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
      {/* Portfolio Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Enterprise Software Portfolio – ARSTEG Solutions",
            "description": "150+ products shipped across Health-Tech, FinTech, E-Commerce, and Enterprise. Custom software, mobile apps, AI solutions, cloud migration.",
            "itemListElement": projects.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": p.title,
                "applicationCategory": p.industry,
                "operatingSystem": "Web",
                "description": p.description,
                "url": `https://arsteg.com/portfolio/${p.slug}`,
              }
            }))
          })
        }}
      />

      <section
        id="portfolio"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-[100px]" />
          <div className="absolute right-1/4 bottom-32 h-[500px] w-[500px] rounded-full bg-indigo-50/40 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              Case Studies
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              150+ products{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                shipped
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              From startups to Fortune 500 — we&apos;ve built software that drives real business results across every major industry.
            </p>
          </motion.div>

          {/* Industry Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            {industries.map((industry, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2"
              >
                <span className="text-sm font-semibold text-gray-900">{industry.name}</span>
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                  {industry.count}+
                </span>
              </div>
            ))}
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Link href="/portfolio/health-dashboard" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 shadow-2xl">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                        Featured Case Study
                      </span>
                      <span className="text-sm text-gray-400">Healthcare</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Health-Tech Platform
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Scaled a telemedicine platform from 10K to 500K users with real-time monitoring, 8+ device integrations, and HIPAA-compliant architecture.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div>
                        <p className="text-2xl font-bold text-white">50x</p>
                        <p className="text-sm text-gray-400">User Growth</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">99.9%</p>
                        <p className="text-sm text-gray-400">Uptime</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">8+</p>
                        <p className="text-sm text-gray-400">Integrations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300">
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                      alt="Health-tech platform dashboard"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl transition-transform group-hover:scale-[1.02]"
                    />
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
                  <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-blue-100">
                    {/* Icon & Industry */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                        <project.icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        {project.industry}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Result */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        <CheckCircle className="h-3 w-3" />
                        {project.result}
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover:opacity-100 group-hover:text-blue-600" />
                    </div>
                  </div>
                </Link>
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
            <p className="text-gray-600 mb-6">
              Have a similar project in mind?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-black hover:scale-105"
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
