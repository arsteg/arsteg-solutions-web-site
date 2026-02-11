"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, ChevronDown } from "lucide-react";
import GoogleEmbedMap from "./GoogleEmbedMap";

const contactInfo = [
  {
    Icon: MapPin,
    title: "Address",
    detail: "LG-048, Elan Miracle, Hayatpur, Sector 84, Near Sector 83, Gurugram, Haryana 122004, India",
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "info@arsteg.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    detail: "+91-844-747-0101",
  },
] as const;

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "custom-software", label: "Custom Software Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "legacy-modernization", label: "Legacy Modernization" },
  { value: "api-integration", label: "API & System Integration" },
  { value: "dedicated-team", label: "Dedicated Engineering Team" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "cloud-migration", label: "Cloud Migration" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "other", label: "Other" },
];

const referralOptions = [
  { value: "", label: "How did you hear about us?" },
  { value: "google", label: "Google Search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral from a colleague" },
  { value: "clutch", label: "Clutch / GoodFirms" },
  { value: "social", label: "Social Media" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    referral: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    if (!formData.name || !formData.email || !formData.description) {
      return "Please fill in all required fields.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess("Thank you! We'll reply within 24 hours.");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", referral: "", description: "" });
        setTimeout(() => setSuccess(null), 8000);
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact ARSTEG Solutions - Software Development Company in Gurugram",
            "description": "Get in touch with ARSTEG for custom software, mobile apps, AI, cloud, and health-tech solutions. Free quote in 24 hours. Gurugram office.",
            "url": "https://arsteg.com/contact",
            "publisher": {
              "@type": "Organization",
              "name": "ARSTEG Solutions Pvt. Ltd.",
              "logo": "https://arsteg.com/logo.png"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "LG-048, Elan Miracle, Hayatpur, Sector 84, Near Sector 83",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "telephone": "+91-844-747-0101",
            "email": "info@arsteg.com",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactType": "Customer Service",
            "areaServed": "Worldwide"
          })
        }}
      />

      <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-10 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-10 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO-Optimized Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              Get Started
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Great
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              Ready to transform your ideas into reality? Tell us about your project and get a <strong>free quote within 24 hours</strong>.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">

            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h3>

              {/* Feedback */}
              {error && (
                <div className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 rounded-xl bg-green-50 p-4 text-sm text-green-700 ring-1 ring-green-200">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Budget & Referral Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Budget Range
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="$10,000 - $50,000"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1.5">
                      How did you find us?
                    </label>
                    <div className="relative">
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        {referralOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    rows={5}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Your Inquiry"}
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map(({ Icon, title, detail }, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-blue-100"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="mt-1 text-sm text-gray-600 break-words">
                        {title === "Email" ? (
                          <a href={`mailto:${detail}`} className="hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        ) : title === "Phone" ? (
                          <a href={`tel:${detail.replace(/[^0-9+]/g, "")}`} className="hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
                <div className="h-80 w-full bg-gray-100">
                  <GoogleEmbedMap />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white">
                <h4 className="font-semibold mb-4">Why contact us?</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Free consultation & project estimate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    No obligation or commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    NDA available upon request
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
