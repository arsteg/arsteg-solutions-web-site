"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Quote, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import clsx from "clsx";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "trackmyday",
    company: "TrackMyDay CNRCT",
    industry: "Mobile Productivity App",
    logo: "/images/casestudies/trackmyday-logo.jpg", // Placeholder; replace with actual logo
    heroImage: "/images/casestudies/caseStudy01.jpg", // Placeholder for app screenshot or hero image
    summary:
      "Boosted user engagement by 250% and grew active users by 180% through targeted email onboarding and re-engagement campaigns using Klaviyo.",
    challenge:
      "Low daily active users (under 20% of downloads), poor feature adoption, and high churn after initial download. Limited retention strategies for a new app launch.",
    solution:
      "Implemented personalized welcome series, in-app behavior-triggered emails, and win-back flows. Integrated with Google Analytics for segmentation and automated daily tips based on user progress.",
    impact: [
      { metric: "User Engagement", value: "+250%", description: "Daily active users from 15% to 52%" },
      { metric: "Retention Rate", value: "47%", description: "Month 1 retention up from 12%" },
      { metric: "App Downloads", value: "+180%", description: "Attributed to referral and nurture emails" },
    ],
    techStack: ["Klaviyo", "Google Analytics", "Firebase", "Gmail API"],
    quote: {
      text: "ARSTEG's email automation transformed our app from a one-time download to a daily habit. Engagement metrics are through the roof now.",
      author: "David B.",
      role: "Founder, TrackMyDay CNRCT",
    },
  },
  {
    id: "albiware",
    company: "Albiware",
    industry: "Restoration Management SaaS",
    logo: "/images/casestudies/caseStudy02.jpg", // Placeholder; replace with actual logo
    heroImage: "/images/casestudies/albiware-hero.jpg", // Placeholder for software dashboard or hero image
    summary:
      "Increased lead nurturing efficiency by 320% and reduced sales cycle by 45% with HubSpot-integrated email workflows for restorers.",
    challenge:
      "Fragmented tools leading to lost leads, manual follow-ups, and slow onboarding for new restoration clients. Scaling operations without integrated communication.",
    solution:
      "Deployed automated lead scoring emails, onboarding sequences for new users, and customer success check-ins. Connected with existing integrations for seamless CRM data flow and personalized nurture campaigns.",
    impact: [
      { metric: "Lead Conversion", value: "+320%", description: "From initial contact to paid demo" },
      { metric: "Sales Cycle", value: "-45%", description: "Reduced from 60 to 33 days" },
      { metric: "Customer Productivity", value: "89%", description: "Reported time savings per user" },
    ],
    techStack: ["HubSpot", "Albi Platform", "Zapier", "Google Workspace"],
    quote: {
      text: "Our team was drowning in manual emails—ARSTEG's automation freed us up to focus on closing deals. The ROI was immediate.",
      author: "Shamoil S.",
      role: "CEO, Albiware",
    },
  },
  {
    id: "metamax",
    company: "MetaMax",
    industry: "Direct Mail Automation Software",
    logo: "/images/casestudies/metamax-logo.jpg", // Placeholder; replace with actual logo
    heroImage: "/images/casestudies/caseStudy03.jpg", // Placeholder for software interface or hero image
    summary:
      "Automated 95% of campaign workflows, reducing manual processing time by 75% and increasing mailing accuracy with custom email notifications and reporting.",
    challenge:
      "Manual campaign setup, error-prone lead searches, and lack of centralized error logging leading to delays in direct mail batches and compliance issues.",
    solution:
      "Developed integrated email alerts for API searches, blacklist updates, and print job statuses. Added dashboard notifications for pending actions and automated follow-up sequences for campaign stages.",
    impact: [
      { metric: "Workflow Automation", value: "95%", description: "Hands-free campaign management" },
      { metric: "Processing Time", value: "-75%", description: "From hours to minutes per batch" },
      { metric: "Error Reduction", value: "98%", description: "Via logging and blacklist enforcement" },
    ],
    techStack: ["Mailchimp", "Custom Node.js", "Printer APIs", "Google Cloud Logging"],
    quote: {
      text: "ARSTEG's email integrations made our direct mail system bulletproof. No more lost leads or printing mishaps—it's a game-changer.",
      author: "Nathan Jimenez",
      role: "CTO, MetaMax",
    },
  },
] as const;

export const CaseStudiesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Case Study ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Email Marketing Case Studies – ARSTEG Solutions",
            "description": "Real results: 380% revenue growth, 42% churn reduction, $1.2M in 90 days. E-commerce, SaaS, wellness brands.",
            "itemListElement": caseStudies.map((cs, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "CreativeWork",
                "name": `${cs.company} – ${cs.summary}`,
                "url": `https://arsteg.com/case-studies/${cs.id}`,
                "image": cs.heroImage,
                "author": {
                  "@type": "Organization",
                  "name": "ARSTEG Solutions"
                }
              }
            }))
          })
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Real Results from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Real Clients
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
              <strong>380% revenue growth</strong> • <strong>42% churn reduction</strong> •{" "}
              <strong>$1.2M in 90 days</strong>
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study) => {
              const isExpanded = expandedId === study.id;

              return (
                <Card
                  key={study.id}
                  className={clsx(
                    "group relative overflow-hidden rounded-3xl bg-white/70 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all duration-500",
                    isExpanded
                      ? "lg:col-span-3 xl:col-span-3"
                      : "hover:scale-105 hover:shadow-2xl"
                  )}
                >
                  {/* Hero Image + Summary */}
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-t-3xl">
                      <Image
                        src={study.heroImage}
                        alt={`${study.company} Email Marketing Case Study – ARSTEG`}
                        width={1200}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Company Logo */}
                   

                    {/* Summary Text */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-lg font-semibold lg:text-xl">{study.summary}</p>
                      <p className="mt-1 text-sm opacity-90">{study.industry}</p>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div className="p-6">
                    <Button
                      onClick={() => toggleExpand(study.id)}
                      className={clsx(
                        "w-full justify-between text-left font-semibold transition-all",
                        isExpanded
                          ? "text-blue-600"
                          : "text-gray-700 group-hover:text-blue-600"
                      )}
                    >
                      {isExpanded ? "Show Less" : "Read Full Case Study"}
                      <ArrowRight
                        className={clsx(
                          "h-5 w-5 transition-transform",
                          isExpanded && "rotate-90"
                        )}
                      />
                    </Button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-gray-200/50 px-6 pb-8 pt-6 space-y-10">
                      {/* Challenge */}
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-gray-900">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-gray-900">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Impact */}
                      <div>
                        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                          <TrendingUp className="h-6 w-6 text-emerald-600" />
                          Impact & Results
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {study.impact.map((imp, i) => (
                            <div
                              key={i}
                              className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 text-center"
                            >
                              <div className="text-3xl font-bold text-emerald-700">
                                {imp.value}
                              </div>
                              <div className="mt-1 text-sm font-semibold text-emerald-800">
                                {imp.metric}
                              </div>
                              <div className="mt-1 text-xs text-emerald-700">
                                {imp.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-gray-900">
                          <Zap className="h-6 w-6 text-purple-600" />
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-800"
                            >
                              <CheckCircle className="h-3.5 w-3.5" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Customer Quote */}
                      <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                        <Quote className="absolute -top-4 left-6 h-10 w-10 text-blue-200" />
                        <blockquote className="relative z-10">
                          <p className="text-lg italic text-gray-800 lg:text-xl">
                            "{study.quote.text}"
                          </p>
                          <footer className="mt-4 flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-0.5">
                              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600">
                                {study.quote.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                {study.quote.author}
                              </p>
                              <p className="text-sm text-gray-600">{study.quote.role}</p>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600">
              Want results like these for your business?{" "}
              <a
                href="/contact"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Get your free email audit
              </a>
            </p>
          </div>

          {/* Hidden SEO */}
          <div className="sr-only">
            <h2>Email Marketing Case Studies: 380% Growth, 42% Churn Reduction</h2>
            <p>
              ARSTEG case studies: LuxeWear (380% email revenue), GrowEasy (42% churn down),
              VitaPure ($1.2M in 90 days). Klaviyo, HubSpot, Mailchimp automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};