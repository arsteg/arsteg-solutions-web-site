"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Settings,
  Database,
  Headphones,
  ShoppingCart,
  BookOpen,
  Layers,
  Link as LinkIcon,
  Globe,
  Clock,
  Shield,
  Award,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Zoho products we implement
const zohoProducts = [
  {
    name: "Zoho CRM",
    icon: Users,
    description: "Complete customer relationship management with sales automation, lead tracking, and pipeline management.",
    features: ["Lead Management", "Sales Automation", "Analytics & Reports", "Custom Modules"],
  },
  {
    name: "Zoho Creator",
    icon: Settings,
    description: "Low-code platform for building custom business applications tailored to your unique workflows.",
    features: ["Custom Apps", "Workflow Automation", "Mobile Apps", "API Integrations"],
  },
  {
    name: "Zoho Books",
    icon: BookOpen,
    description: "Cloud accounting software for managing finances, invoicing, and tax compliance.",
    features: ["Invoicing", "Expense Tracking", "Bank Reconciliation", "GST Compliance"],
  },
  {
    name: "Zoho People",
    icon: Users,
    description: "HR management system for employee lifecycle, attendance, and performance tracking.",
    features: ["Employee Database", "Time & Attendance", "Leave Management", "Performance Reviews"],
  },
  {
    name: "Zoho Desk",
    icon: Headphones,
    description: "Help desk software for delivering exceptional customer support across all channels.",
    features: ["Ticket Management", "Knowledge Base", "SLA Management", "Multi-channel Support"],
  },
  {
    name: "Zoho Inventory",
    icon: ShoppingCart,
    description: "Inventory management solution for tracking stock, orders, and warehouse operations.",
    features: ["Stock Management", "Order Fulfillment", "Multi-warehouse", "Shipping Integration"],
  },
];

// Integration capabilities
const integrations = [
  {
    title: "Third-Party Integrations",
    icon: LinkIcon,
    items: ["Stripe", "PayPal", "Shopify", "WooCommerce", "Salesforce", "HubSpot"],
  },
  {
    title: "Custom API Development",
    icon: Layers,
    items: ["REST APIs", "Webhooks", "Deluge Scripts", "Custom Functions", "Data Sync"],
  },
  {
    title: "Data Migration",
    icon: Database,
    items: ["Legacy Systems", "Spreadsheets", "Other CRMs", "ERP Systems", "Clean Data Transfer"],
  },
  {
    title: "Workflow Automation",
    icon: Zap,
    items: ["Business Rules", "Email Automation", "Task Assignment", "Notifications", "Approvals"],
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Clock,
    title: "Rapid Implementation",
    description: "Get up and running in weeks, not months. Our streamlined process ensures fast deployment.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "We follow best practices for data security, access controls, and compliance requirements.",
  },
  {
    icon: Award,
    title: "Zoho Expertise",
    description: "Deep expertise across the entire Zoho ecosystem with 50+ successful implementations.",
  },
  {
    icon: Globe,
    title: "Ongoing Support",
    description: "24/7 support and maintenance to ensure your Zoho systems run smoothly.",
  },
];

// Success metrics
const successMetrics = [
  { value: "50+", label: "Zoho Implementations" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. Efficiency Gain" },
  { value: "24/7", label: "Support Available" },
];

// Testimonials
const testimonials = [
  {
    quote: "ARSTEG transformed our sales process with Zoho CRM. We've seen a 35% increase in conversion rates since implementation.",
    author: "Sarah Mitchell",
    role: "VP Sales",
    company: "TechCorp Inc.",
    rating: 5,
  },
  {
    quote: "The custom Zoho Creator app they built replaced 5 different tools we were using. Incredible ROI.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "GlobalTrade Ltd.",
    rating: 5,
  },
];

export default function ZohoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    zohoProduct: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "zoho-development",
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", zohoProduct: "", description: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Zoho Development & Implementation Services",
            "provider": {
              "@type": "Organization",
              "name": "ARSTEG Solutions Pvt. Ltd.",
              "url": "https://arsteg.com",
            },
            "description": "Expert Zoho CRM, Creator, Books, People, Desk implementation and customization services. Custom integrations, workflow automation, and data migration.",
            "serviceType": "Software Development",
            "areaServed": "Worldwide",
          }),
        }}
      />

      {/* Hero Section - Matching site style */}
      <section className="relative min-h-[90vh] overflow-hidden bg-white pt-28 pb-20">
        {/* Background effects - Same as homepage */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/40 blur-[120px]" />
          <div className="absolute -right-[5%] bottom-[5%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-100/40 to-purple-100/30 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-800 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Zoho Development Experts
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                Transform Your Business with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Zoho Solutions
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-1 left-0 h-3 w-full bg-blue-100/60 -z-10"
                  />
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl lg:text-xl">
                We implement, customize, and integrate the complete Zoho ecosystem to streamline your operations, automate workflows, and drive growth.
              </p>

              {/* Product badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["CRM", "Creator", "Books", "People", "Desk", "Inventory"].map((product) => (
                  <span
                    key={product}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    Zoho {product}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#zoho-contact"
                    className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-black"
                  >
                    <span className="relative z-10">Get Free Consultation</span>
                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#zoho-products"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-900 hover:bg-gray-50"
                  >
                    <Zap className="h-5 w-5" />
                    Explore Services
                  </Link>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>50+ Implementations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {successMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-blue-100"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zoho Products Grid */}
      <section id="zoho-products" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
              <Settings className="h-4 w-4" />
              Zoho Ecosystem
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
              Complete Zoho{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Implementation
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We specialize in implementing and customizing the full suite of Zoho products to fit your exact business needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {zohoProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-blue-100"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6 transition-all group-hover:from-blue-600 group-hover:to-indigo-600">
                  <product.icon className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 mb-4">
              <LinkIcon className="h-4 w-4" />
              Integration Experts
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
              Connect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We integrate Zoho with your existing tools and third-party services for seamless data flow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-lg hover:ring-blue-100 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <integration.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{integration.title}</h3>
                <ul className="space-y-2">
                  {integration.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARSTEG */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 mb-4">
                <Award className="h-4 w-4" />
                Why ARSTEG
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Your Trusted Zoho{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Implementation Partner
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We bring deep Zoho expertise combined with years of enterprise software development experience to deliver solutions that truly transform your business.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {successMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 mb-4">
              <Star className="h-4 w-4" />
              Client Success
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="zoho-contact" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-10 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-10 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                Get Started
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Ready to Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Zoho?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get a free consultation and learn how we can help implement, customize, and integrate Zoho solutions for your business.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Detailed implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Cost estimate within 24 hours</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Or reach out directly:</p>
                <a href="tel:+918447470101" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="h-5 w-5 text-blue-600" />
                  +91-844-747-0101
                </a>
                <a href="mailto:info@arsteg.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                  info@arsteg.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Zoho Consultation</h3>

              {submitStatus === "success" && (
                <div className="mb-6 rounded-xl bg-green-50 p-4 text-green-700 ring-1 ring-green-200">
                  Thank you! We&apos;ll contact you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-700 ring-1 ring-red-200">
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="zohoProduct" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Zoho Product Interest
                  </label>
                  <select
                    id="zohoProduct"
                    value={formData.zohoProduct}
                    onChange={(e) => setFormData({ ...formData, zohoProduct: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select a product...</option>
                    <option value="zoho-crm">Zoho CRM</option>
                    <option value="zoho-creator">Zoho Creator</option>
                    <option value="zoho-books">Zoho Books</option>
                    <option value="zoho-people">Zoho People</option>
                    <option value="zoho-desk">Zoho Desk</option>
                    <option value="zoho-inventory">Zoho Inventory</option>
                    <option value="zoho-one">Zoho One (Full Suite)</option>
                    <option value="multiple">Multiple Products</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                    placeholder="Describe your current challenges and what you're hoping to achieve with Zoho..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
