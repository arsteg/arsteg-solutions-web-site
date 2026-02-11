"use client";

import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { CheckCircle, ArrowRight, LucideIcon, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline?: string;
  problem?: string;
  solution?: string;
  description: string;
  approach?: string[];
  outcomes?: string[];
  result?: string;
  caseStudy?: string;
  slug: string;
}

interface PartialService extends Omit<Service, "slug"> {
  slug?: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [activeService, setActiveService] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    import("../data/services.json")
      .then((module) => {
        const rawServices: PartialService[] = module.default;
        const servicesWithSlug: Service[] = rawServices.map((s) => ({
          ...s,
          slug: s.slug || s.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        }));
        setServices(servicesWithSlug);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setServices([]);
      });
  }, []);

  const getIconComponent = (iconName: string): LucideIcon => {
    const validIcons = ["Code2", "Wrench", "PlugZap", "UsersRound", "Send", "TrendingUp"] as const;
    type ValidIconName = typeof validIcons[number];
    if (validIcons.includes(iconName as ValidIconName)) {
      return Icons[iconName as ValidIconName] as LucideIcon;
    }
    return Icons.Code;
  };

  return (
    <>
      {services.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Enterprise Software Development Services – ARSTEG",
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
                    "name": "ARSTEG Solutions Pvt. Ltd.",
                    "telephone": "+91-844-747-0101"
                  }
                }
              }))
            })
          }}
        />
      )}

      <section id="services" className="relative overflow-hidden bg-gray-50/50 py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
          <div className="absolute right-0 bottom-1/4 h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Sparkles className="h-4 w-4" />
              What We Build
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Engineering that moves{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                the needle
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              We don&apos;t just write code — we solve business problems with software that scales, performs, and delivers ROI.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div
            ref={containerRef}
            className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto mb-20"
          >
            {services.map((service, i) => {
              const IconComponent = getIconComponent(service.icon);
              const isActive = activeService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 ${
                        isActive ? "shadow-xl ring-blue-200 scale-[1.02]" : "hover:shadow-lg"
                      }`}
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />

                      <div className="relative z-10">
                        {/* Icon & Tagline Row */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white scale-110"
                              : "bg-blue-50 text-blue-600"
                          }`}>
                            <IconComponent className="h-7 w-7" />
                          </div>
                          {service.result && (
                            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                              {service.result}
                            </span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {service.title}
                        </h3>
                        {service.tagline && (
                          <p className="mb-4 text-sm font-medium text-blue-600">
                            {service.tagline}
                          </p>
                        )}

                        {/* Problem Statement */}
                        {service.problem && (
                          <p className="mb-4 text-sm leading-relaxed text-gray-600">
                            {service.problem}
                          </p>
                        )}

                        {/* Key Outcomes */}
                        {service.outcomes && (
                          <div className="mb-6 space-y-2">
                            {service.outcomes.slice(0, 3).map((outcome, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-auto flex items-center gap-2 font-semibold text-blue-600">
                          <span className="text-sm">Learn more</span>
                          <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 md:p-12 text-center text-white"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not sure where to start?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Book a free 30-minute strategy call. We&apos;ll assess your needs and recommend the right approach — no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-blue-50"
                >
                  Book Free Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/5"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
