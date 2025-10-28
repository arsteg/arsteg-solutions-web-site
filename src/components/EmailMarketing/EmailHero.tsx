"use client"; // Add if imported in a Server Component

import Button from "@/components/ui/Button";
import { ArrowRight, Mail, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export const EmailHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-32 lg:py-40">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/70 to-indigo-100/70 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-md ring-1 ring-blue-200/50 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            Professional Email Marketing Services
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Expert Email Marketing
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 md:text-xl lg:text-2xl">
            We leverage industry-leading platforms like <strong>Mailchimp, Klaviyo, HubSpot, and ActiveCampaign</strong> to deliver targeted email campaigns that drive real results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group">
              <Button
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/services">
              <Button className="rounded-xl border-2 border-blue-600 bg-transparent px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-md">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              { Icon: Mail, value: "95%", label: "Delivery Rate", color: "blue" },
              { Icon: TrendingUp, value: "3X", label: "Average ROI", color: "indigo" },
              { Icon: Zap, value: "24/7", label: "Support", color: "purple" },
            ].map(({ Icon, value, label, color }, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900">{value}</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};