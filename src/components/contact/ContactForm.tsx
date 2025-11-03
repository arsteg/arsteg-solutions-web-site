"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
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
        setSuccess("Thank you! We’ll reply within 24 hours.");
        setFormData({ name: "", email: "", company: "", budget: "", description: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let us Build Something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Great
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
              Ready to transform your ideas into reality? Contact our team to discuss your project or get a <strong>free quote</strong>.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">

            {/* Contact Form */}
            <div className="rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h3>

              {/* Feedback */}
              {error && (
                <div className="mb-5 rounded-lg bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 rounded-lg bg-green-50 p-4 text-sm text-green-700 ring-1 ring-green-200">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Name *", name: "name", type: "text", placeholder: "Your full name" },
                  { label: "Email *", name: "email", type: "email", placeholder: "your.email@example.com" },
                  { label: "Company", name: "company", type: "text", placeholder: "Your company name" },
                  { label: "Budget Range", name: "budget", type: "text", placeholder: "$5,000 – $10,000" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1.5">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.label.includes("*")}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Your Inquiry"}
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-6">
                {contactInfo.map(({ Icon, title, detail }, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
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
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/50">
                <div className="h-96 w-full bg-gray-100">
                  <GoogleEmbedMap />
                </div>
              </div>
            </div>
          </div>

          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>Contact ARSTEG Solutions - Software Development Company in Gurugram</h2>
            <p>Address: LG-048, Elan Miracle, Sector 84, Gurugram, Haryana 122004</p>
            <p>Phone: +91-844-747-0101 | Email: info@arsteg.com</p>
            <p>Microsoft Partner. Custom software, mobile apps, AI, health-tech, cloud solutions. Free project consultation.</p>
          </div>
        </div>
      </section>
    </>
  );
}