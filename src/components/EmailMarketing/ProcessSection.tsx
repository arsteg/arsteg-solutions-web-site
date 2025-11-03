"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Strategy & Planning",
    description: "We audit your current email performance, define KPIs, and build a 90-day growth roadmap with revenue projections.",
    highlight: "90-day roadmap"
  },
  {
    number: "02",
    title: "List Building & Segmentation",
    description: "Grow your list 3x faster with compliant pop-ups, lead magnets, and AI-powered segmentation by behavior, RFM, and lifecycle.",
    highlight: "3x list growth"
  },
  {
    number: "03",
    title: "Template Design & Content",
    description: "Mobile-first, brand-aligned templates with dynamic content blocks. A/B tested for 30%+ open rates.",
    highlight: "30%+ open rates"
  },
  {
    number: "04",
    title: "Automation Setup",
    description: "Deploy 10+ high-ROI flows: welcome, cart recovery, win-back, post-purchase, VIP — fully integrated with your CRM.",
    highlight: "10+ automated flows"
  },
  {
    number: "05",
    title: "Campaign Execution",
    description: "Send-time optimization, dynamic subject lines, and real-time testing to maximize clicks and conversions.",
    highlight: "send-time AI"
  },
  {
    number: "06",
    title: "Analytics & Optimization",
    description: "Weekly performance reports, cohort analysis, and iterative testing. Clients see 42x ROI within 6 months.",
    highlight: "42x ROI in 6 months"
  }
] as const;

export const ProcessSection = () => {
  return (
    <>
      {/* HowTo Schema for Email Marketing Process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "6-Step Email Marketing Process for 42x ROI",
            "description": "ARSTEG’s proven 6-step email marketing process: Strategy, List Building, Design, Automation, Execution, Optimization. Used by 500+ clients.",
            "step": steps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.title,
              "itemListElement": {
                "@type": "HowToDirection",
                "text": s.description
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
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                6-Step Email Process
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              From audit to <strong>42x ROI in 6 months</strong> — our battle-tested process delivers predictable revenue growth.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="mb-5 flex items-start">
                    <span className="text-7xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent opacity-30 transition-opacity group-hover:opacity-50">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Result Badge */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                    {step.highlight}
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-l from-blue-300 to-transparent lg:block" />
                )}
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600">
              Ready to implement this process for your business?{" "}
              <Link 
                href="/contact" 
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get your free email audit
              </Link>
            </p>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>6-Step Email Marketing Process – 42x ROI in 6 Months</h2>
            <p>
              ARSTEG’s 6-step email marketing process: Strategy, List Building, Design, Automation, Execution, Optimization. 
              Used by 500+ clients to achieve 42x ROI. Free audit includes 90-day roadmap and revenue forecast.
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