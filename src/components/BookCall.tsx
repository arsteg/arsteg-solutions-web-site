"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Globe, CheckCircle, ArrowRight, Video, Phone } from "lucide-react";
import Link from "next/link";

interface BookCallProps {
  calendlyUrl?: string;
  showFallback?: boolean;
}

export default function BookCall({
  calendlyUrl = "https://calendly.com/arsteg/consultation",
  showFallback = true
}: BookCallProps) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    // Check if Calendly widget script is available
    if (typeof window !== 'undefined' && showCalendly) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsCalendlyLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  const benefits = [
    "30-minute strategy session",
    "Discuss your project requirements",
    "Get expert recommendations",
    "No obligation consultation",
  ];

  const meetingTypes = [
    {
      icon: Video,
      title: "Video Call",
      description: "Google Meet or Zoom",
      duration: "30 min",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct conversation",
      duration: "30 min",
    },
  ];

  return (
    <section id="book-call" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-4"
          >
            <Calendar className="h-4 w-4" />
            Schedule a Meeting
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4"
          >
            Book a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Let&apos;s discuss your project and explore how we can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-start">
          {/* Left - Benefits & Meeting Types */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meeting Types */}
            <div className="space-y-4">
              {meetingTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                    <type.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{type.title}</h4>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {type.duration}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timezone note */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="h-4 w-4" />
              <span>All times shown in your local timezone</span>
            </div>
          </motion.div>

          {/* Right - Calendly or Fallback */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {showCalendly ? (
              // Calendly Embed
              <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden min-h-[600px]">
                {isCalendlyLoaded ? (
                  <div
                    className="calendly-inline-widget"
                    data-url={calendlyUrl}
                    style={{ minWidth: '320px', height: '600px' }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-[600px]">
                    <div className="text-center">
                      <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                      <p className="text-gray-500">Loading calendar...</p>
                    </div>
                  </div>
                )}
              </div>
            ) : showFallback ? (
              // Fallback CTA Card
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-8">
                  Schedule a free 30-minute consultation to discuss your project requirements and get expert recommendations.
                </p>

                <div className="space-y-4">
                  {/* Open Calendly */}
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-gray-900 transition-all hover:bg-gray-100"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule a Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {/* Or contact form */}
                  <Link
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Or Send a Message
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Prefer to reach out directly?</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+918447470101"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      +91-844-747-0101
                    </a>
                    <a
                      href="mailto:info@arsteg.com"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="h-4 w-4 text-center">@</span>
                      info@arsteg.com
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
