"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Smartphone,
  Brain,
  MessageSquare,
  BarChart3,
  FileEdit,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Real-Time Health Dashboard",
    description:
      "Vue.js + Chart.js dashboard with live API feeds from 8+ health devices. 40% faster insights for 50,000+ users.",
    tech: ["Vue.js", "Chart.js", "WebSocket"],
    result: "40% faster insights",
    slug: "health-dashboard",
  },
  {
    icon: Smartphone,
    title: "8+ Device Integrations",
    description:
      "Seamless API integration with iHealth, Garmin, Fitbit, Dexcom, Google Fit, Withings, Biosense, KetoMojo.",
    tech: ["Vue.js", "REST API", "OAuth 2.0"],
    result: "100% data sync",
    slug: "device-integrations",
  },
  {
    icon: Brain,
    title: "AI Food Scanner & Planner",
    description:
      "Snap food → AI analyzes → auto-generates macros, ingredients, calories. Powered by OpenAI Vision + Nutrition API.",
    tech: ["Vue.js", "OpenAI", "Computer Vision"],
    result: "95% accuracy",
    slug: "ai-food-planner",
  },
  {
    icon: MessageSquare,
    title: "Secure In-App Messaging",
    description:
      "HIPAA-compliant messaging with Twilio + end-to-end encryption. Real-time chat + automated reminders.",
    tech: ["Vue.js", "Twilio", "Socket.io"],
    result: "99.9% uptime",
    slug: "secure-messaging",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Suite",
    description:
      "Interactive cohort analysis, trend forecasting, and exportable PDF reports. Used by 200+ clinics.",
    tech: ["Vue.js", "D3.js", "PDFMake"],
    result: "200+ clinics",
    slug: "analytics-suite",
  },
  {
    icon: FileEdit,
    title: "Dynamic Form Builder",
    description:
      "Drag-and-drop form builder for doctors. Conditional logic, e-signatures, and auto-save.",
    tech: ["Vue.js", "Vue Draggable", "DocuSign"],
    result: "80% faster intake",
    slug: "form-builder",
  },
] as const;

export default function Portfolio() {
  return (
    <>
      {/* Portfolio ItemList + SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Health-Tech Portfolio – ARSTEG Solutions Gurugram",
            "description": "Vue.js health-tech projects: real-time dashboard, 8+ device integrations, AI food scanner, secure messaging, analytics, form builder. 40% faster insights. HIPAA compliant.",
            "itemListElement": projects.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": p.title,
                "applicationCategory": "Health Application",
                "operatingSystem": "Web",
                "description": p.description,
                "url": `https://arsteg.com/portfolio/${p.slug}`,
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "offeredBy": {
                    "@type": "Organization",
                    "name": "ARSTEG Solutions"
                  }
                }
              }
            }))
          })
        }}
      />

      <section
        id="portfolio"
        className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Health-Tech{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              <strong>Vue.js + AI + HIPAA</strong> — We build <strong>real-time, secure, scalable</strong> health-tech platforms. 
              <strong>40% faster insights</strong>. <strong>Free audit</strong>.
            </p>
          </div>

          {/* Featured Dashboard */}
          <div className="mb-20">
            <Link href="/portfolio/health-dashboard" className="group block">
              <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50 transition-all hover:shadow-3xl">
                <Image
                  src="/images/dashboard-mockup.jpg"
                  alt="ARSTEG Health Dashboard – Real-time Vue.js + Chart.js with 8+ device sync"
                  width={1200}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Real-Time Health Dashboard
                  </h3>
                  <p className="text-white/90">
                    Vue.js + Chart.js + WebSocket — 40% faster patient insights
                  </p>
                </div>
                <div className="absolute -top-5 -right-5 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-gray-200 transition-transform group-hover:scale-105">
                  <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    Featured
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div
                  className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:ring-blue-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                      <project.icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gradient-to-r from-blue-100/70 to-indigo-100/70 px-3 py-1.5 text-xs font-medium text-blue-700 transition-all group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Result Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                      <CheckCircle className="h-3.5 w-3.5" />
                      {project.result}
                    </div>

                    {/* Micro CTA */}
                    <div className="mt-4 flex items-center text-blue-600 opacity-0 transition-all group-hover:opacity-100">
                      <span className="text-sm font-semibold">View Case Study</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-800 ring-2 ring-emerald-200">
              <CheckCircle className="h-5 w-5" />
              Free Health-Tech Audit • Fixed Price • HIPAA Compliant
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Ready to build your health-tech platform?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get Your Free Project Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Health-Tech Portfolio: Vue.js, AI, Device Integration – ARSTEG Gurugram</h2>
            <p>
              ARSTEG builds HIPAA-compliant health-tech platforms in Gurugram. 
              Vue.js dashboards, 8+ device APIs, AI food scanner, secure messaging, analytics. 
              40% faster insights. 200+ clinics. Free audit.
            </p>
          </div>
        </div>

        {/* Fade-up animation */}
        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          [style] {
            animation: fadeUp 0.6s ease-out forwards;
          }
        `}</style>
      </section>
    </>
  );
}