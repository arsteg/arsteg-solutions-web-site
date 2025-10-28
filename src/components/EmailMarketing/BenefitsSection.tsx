"use client";

import Card from "@/components/ui/Card";
import {
  DollarSign,
  Users,
  Globe,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective Marketing",
    description:
      "Achieve better ROI compared to traditional marketing channels with minimal investment and maximum reach.",
  },
  {
    icon: TrendingUp,
    title: "Drive Revenue Growth",
    description:
      "Convert subscribers into customers with targeted campaigns that guide them through your sales funnel.",
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description:
      "Reach the right audience at the right time with advanced segmentation and personalization.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connect with millions of potential customers worldwide instantly, breaking geographical barriers.",
  },
  {
    icon: Zap,
    title: "Instant Impact",
    description:
      "See results within hours of sending campaigns with real-time tracking and immediate customer actions.",
  },
  {
    icon: Users,
    title: "Build Customer Loyalty",
    description:
      "Nurture long-term relationships through consistent, valuable communication that keeps your brand top-of-mind.",
  },
] as const;

export const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Email Marketing?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            Email marketing delivers unmatched results for businesses of all sizes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group rounded-3xl p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl hover:border-primary/40 border-2 border-transparent"
          
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Fade-up animation (optional – works with the inline style) */}
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