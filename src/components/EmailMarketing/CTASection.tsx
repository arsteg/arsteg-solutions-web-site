"use client"; // Add if imported in a Server Component

import Button from "@/components/ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-blue-600/5" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">

          {/* Icon */}
          <div className="mx-auto mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-2xl ring-4 ring-white/50">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
              <Mail className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Email Marketing?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 lg:text-xl">
            Let us discuss how our email marketing services can help you achieve your business goals. Get a free consultation and strategy session today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group">
              <Button
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              >
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            {/* Uncomment if needed */}
            {/* <Link href="/case-studies">
              <Button className="rounded-xl border-2 border-blue-600 bg-transparent px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-md">
                View Case Studies
              </Button>
            </Link> */}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 border-t border-gray-200/50 pt-8">
            <p className="mb-5 text-sm font-medium text-gray-600">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 md:gap-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">500+</span>
                <span>Active Clients</span>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">10M+</span>
                <span>Emails Sent Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};