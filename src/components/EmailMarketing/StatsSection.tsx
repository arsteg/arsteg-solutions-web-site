"use client"; // Add only if imported in a Server Component

import { TrendingUp, Users, Mail, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI Increase",
    description: "Clients see 3x return on their email marketing investment"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses trust us with their email campaigns"
  },
  {
    icon: Mail,
    value: "10M+",
    label: "Emails Delivered",
    description: "Successfully delivered emails every month"
  },
  {
    icon: Target,
    value: "95%",
    label: "Delivery Rate",
    description: "Industry-leading email deliverability"
  }
] as const;

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Results That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            We deliver measurable success for our clients through strategic email marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <stat.icon className="h-8 w-8" />
                </div>

                {/* Value */}
                <div className="mb-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="mb-2 text-xl font-bold text-gray-900">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Staggered fade-up */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};