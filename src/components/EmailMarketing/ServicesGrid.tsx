"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";
import { 
  Layout, 
  Target, 
  BarChart3, 
  Workflow, 
  ListChecks, 
  Mail,
  PenTool,
  Clock,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Email Template Design",
    description: "Mobile-first, brand-aligned templates with dynamic content. A/B tested for 30%+ open rates.",
    result: "30%+ open rates",
    slug: "email-template-design"
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Full-cycle campaign execution: strategy, copy, design, send-time AI, and performance tracking.",
    result: "95% delivery",
    slug: "email-campaign-management"
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "10+ high-ROI flows: welcome, cart recovery, win-back, VIP. Integrated with Klaviyo, HubSpot, CRM.",
    result: "42x ROI",
    slug: "email-automation"
  },
  {
    icon: ListChecks,
    title: "List Management & Segmentation",
    description: "Grow your list 3x faster with compliant pop-ups, lead magnets, and RFM + behavior segmentation.",
    result: "3x list growth",
    slug: "email-list-management"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Weekly dashboards, cohort analysis, revenue attribution. Know exactly what drives sales.",
    result: "100% visibility",
    slug: "email-analytics"
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "High-converting email copy with personalization, urgency, and storytelling. 25%+ CTR uplift.",
    result: "25%+ CTR",
    slug: "email-content-creation"
  },
  {
    icon: Mail,
    title: "A/B Testing",
    description: "Test subject lines, CTAs, send times, content. Continuous optimization based on real data.",
    result: "data-driven wins",
    slug: "email-ab-testing"
  },
  {
    icon: Clock,
    title: "Campaign Scheduling",
    description: "AI-powered send-time optimization and frequency capping for maximum engagement.",
    result: "peak performance",
    slug: "email-scheduling"
  }
] as const;

export const ServicesGrid = () => {
  return (
    <>
      {/* Service ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Email Marketing Services – ARSTEG Solutions",
            "description": "Full-service email marketing: template design, automation, campaign management, analytics, A/B testing. 42x ROI. Gurugram, India.",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "url": `https://arsteg.com/services/${s.slug}`,
                "provider": {
                  "@type": "Organization",
                  "name": "ARSTEG Solutions"
                }
              }
            }))
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
        {/* Subtle Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Full-Service{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Marketing
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              From <strong>design</strong> to <strong>automation</strong> to <strong>analytics</strong> — we deliver <strong>42x ROI</strong> with every campaign.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={index} className="group block">
                <Card
                  className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                      <service.icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    {/* Result Badge */}
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                      <CheckCircle className="h-3.5 w-3.5" />
                      {service.result}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600">
              Need help choosing the right service?{" "}
              <Link 
                href="/contact" 
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get a free email marketing audit
              </Link>
            </p>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Email Marketing Services: Template Design, Automation, Analytics, A/B Testing</h2>
            <p>
              ARSTEG offers full-service email marketing in Gurugram: custom templates, Klaviyo automation, 
              campaign management, analytics, A/B testing, content creation. 42x ROI. Free audit.
            </p>
          </div>
        </div>

        {/* Staggered fade-up */}
        <style jsx>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          [style] { animation: fadeUp 0.6s ease-out forwards; }
        `}</style>
      </section>
    </>
  );
};