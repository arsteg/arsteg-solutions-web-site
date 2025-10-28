"use client"; // Add only if imported in a Server Component

import Card from "@/components/ui/Card";
import { 
  Layout, 
  Target, 
  BarChart3, 
  Workflow, 
  ListChecks, 
  Mail,
  PenTool,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Email Template Design",
    description: "Custom, responsive email templates that reflect your brand and engage your audience across all devices."
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "End-to-end campaign creation, scheduling, and management to reach your audience at the perfect time."
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "Set up automated workflows for welcome series, abandoned carts, and customer nurturing sequences."
  },
  {
    icon: ListChecks,
    title: "List Management",
    description: "Strategic audience segmentation and list hygiene to maximize engagement and deliverability."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking of opens, clicks, conversions, and ROI with actionable insights."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling email copy and personalized content that drives action and builds relationships."
  },
  {
    icon: Mail,
    title: "A/B Testing",
    description: "Data-driven split testing to optimize subject lines, content, and CTAs for better results."
  },
  {
    icon: Clock,
    title: "Campaign Scheduling",
    description: "Strategic timing and frequency optimization to maximize open rates and engagement."
  }
] as const;

export const ServicesGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20 lg:py-28">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Email Marketing Services
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            From strategy to execution, we handle every aspect of your email marketing campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 text-blue-600 transition-all group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </Card>
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