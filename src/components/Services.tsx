"use client";

import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { CheckCircle, ArrowRight, LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  approach?: string[];
  details?: string[];
  benefits?: string[];
  result?: string;
  slug: string;
}

interface PartialService extends Omit<Service, "slug"> {
  slug?: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
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
    const validIcons = ["Code2", "Wrench", "PlugZap", "UsersRound", "Send"] as const;
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
              "name": "Custom Software Development Services – ARSTEG Gurugram",
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

      <section id="services" className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
          <div className="absolute right-1/4 bottom-32 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Solutions that <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Scale with You</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              We combine enterprise-grade architecture with modern user experiences to help you build software that moves the needle.
            </p>
          </motion.div>

          <div
            ref={containerRef}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-20"
          >
            {services.map((service, i) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <motion.div
                      whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                      className="perspective-1000 preserve-3d relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-2xl hover:ring-blue-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <IconComponent className="h-7 w-7" />
                        </div>

                        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {service.title}
                        </h3>

                        <p className="mb-6 text-sm leading-relaxed text-gray-600 line-clamp-3">
                          {service.description}
                        </p>

                        {service.result && (
                          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                            <CheckCircle className="h-3.5 w-3.5" />
                            {service.result}
                          </div>
                        )}

                        <div className="mt-auto flex items-center gap-2 font-semibold text-blue-600">
                          <span className="text-sm">Learn more</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gray-900 p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Get a free technical audit and project estimation within 24 hours. No hidden costs.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-10 py-5 text-lg font-bold transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
            >
              Get My Free Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}