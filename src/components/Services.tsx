"use client";

import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight, LucideIcon, ArrowUpRight } from "lucide-react";
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
    const validIcons = ["Code2", "Wrench", "PlugZap", "UsersRound", "Send", "TrendingUp", "Settings"] as const;
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
              "name": "Enterprise Software Development Services",
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
                    "name": "ARSTEG Solutions Pvt. Ltd."
                  }
                }
              }))
            })
          }}
        />
      )}

      <section id="services" className="relative py-24 lg:py-32 bg-white">
        {/* Subtle Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial opacity-40" />
        </div>

        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              What We Build
            </div>

            <h2 className="text-headline text-gray-900 mb-6">
              Engineering that drives{" "}
              <span className="gradient-text">business outcomes</span>
            </h2>

            <p className="text-body-lg max-w-2xl mx-auto">
              We solve complex technical challenges with battle-tested solutions.
              Every engagement is designed to deliver measurable ROI.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div
            ref={containerRef}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16"
          >
            {services.map((service, i) => {
              const IconComponent = getIconComponent(service.icon);
              const isHovered = hoveredId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className={`relative h-full rounded-2xl bg-white p-7 transition-all duration-300 ${
                      isHovered
                        ? "shadow-xl ring-1 ring-gray-900/10 -translate-y-1"
                        : "shadow-sm ring-1 ring-gray-900/5"
                    }`}>

                      {/* Icon */}
                      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        isHovered
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {service.title}
                      </h3>

                      {service.tagline && (
                        <p className="text-sm font-medium text-blue-600 mb-3">
                          {service.tagline}
                        </p>
                      )}

                      <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2">
                        {service.problem || service.description}
                      </p>

                      {/* Outcomes */}
                      {service.outcomes && service.outcomes.length > 0 && (
                        <div className="space-y-2 mb-5">
                          {service.outcomes.slice(0, 2).map((outcome, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Result Badge & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {service.result && (
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                            {service.result}
                          </span>
                        )}
                        <div className={`flex items-center gap-1 text-sm font-medium transition-all ${
                          isHovered ? "text-gray-900" : "text-gray-400"
                        }`}>
                          <span>Learn more</span>
                          <ArrowUpRight className={`h-4 w-4 transition-transform ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`} />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl bg-gray-900 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Not sure where to start?
                  </h3>
                  <p className="text-gray-400">
                    Book a free strategy call. We&apos;ll assess your needs and recommend the right approach.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition-all hover:bg-gray-100"
                  >
                    Book Strategy Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/#portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/5"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
