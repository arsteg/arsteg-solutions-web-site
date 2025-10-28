"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { useRouter } from "next/navigation";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  approach?: string[];
  details?: string[];
  benefits?: string[];
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const router = useRouter();

  useEffect(() => {
    import("../data/services.json")
      .then((data) => setServices(data.default))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
            At <strong>ARSTEG Solutions</strong>, we deliver enterprise-ready
            software, AI-driven solutions, and cloud-powered applications that
            empower businesses globally. Explore our services below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Code;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
                
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                    
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Approach */}
                  {service.approach && service.approach.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Our Approach
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {service.approach.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Details */}
                  {service.details && service.details.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Details
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {service.details.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Benefits
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Button */}
                  <button
                    onClick={() => router.push("/contact")}
                    className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-indigo-600 transition-colors"
                    aria-label={`Contact us about ${service.title}`}
                  >
                    Learn More
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => router.push("/contact")}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
          >
            Contact Us for Your Project
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Fade-up Animation */}
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
  );
};

export default Services;