"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GoogleEmbedMap from "./GoogleEmbedMap";

const contactInfo = [
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
  {
    Icon: MapPin,
    title: "Office",
    detail: "Gurugram, Haryana, India",
  },
] as const;

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "custom-software", label: "Custom Software Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "zoho-development", label: "Zoho Development & Integration" },
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

  const inputStyles = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 transition-all focus:border-gray-900 focus:outline-none focus:ring-0 hover:border-gray-300";
  const selectStyles = "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-gray-900 transition-all focus:border-gray-900 focus:outline-none focus:ring-0 hover:border-gray-300";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact ARSTEG Solutions",
            "description": "Get in touch for custom software development. Free quote in 24 hours.",
            "url": "https://arsteg.com/contact",
          })
        }}
      />

      <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Get Started
            </div>

            <h2 className="text-headline text-gray-900 mb-6">
              Let&apos;s build something{" "}
              <span className="gradient-text">great</span>
            </h2>

            <p className="text-body-lg">
              Tell us about your project and get a free quote within 24 hours.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-5 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                {error && (
                  <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={selectStyles}
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="$10,000 - $50,000"
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                        How did you find us?
                      </label>
                      <div className="relative">
                        <select
                          id="referral"
                          name="referral"
                          value={formData.referral}
                          onChange={handleChange}
                          className={selectStyles}
                        >
                          {referralOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`${inputStyles} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    We typically respond within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info Cards */}
              {contactInfo.map(({ Icon, title, detail }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-gray-50 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{title}</p>
                    <p className="text-sm font-medium text-gray-900">
                      {title === "Email" ? (
                        <a href={`mailto:${detail}`} className="hover:text-gray-700">{detail}</a>
                      ) : title === "Phone" ? (
                        <a href={`tel:${detail.replace(/[^0-9+]/g, "")}`} className="hover:text-gray-700">{detail}</a>
                      ) : (
                        detail
                      )}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="overflow-hidden rounded-xl">
                <div className="h-48 w-full bg-gray-100">
                  <GoogleEmbedMap />
                </div>
              </div>

              {/* Trust Card */}
              <div className="rounded-xl bg-gray-900 p-6">
                <h4 className="font-semibold text-white mb-4">Why reach out?</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    "Free consultation & estimate",
                    "Response within 24 hours",
                    "No obligation or commitment",
                    "NDA available upon request",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
