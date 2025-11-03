"use client";

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setMessage("Please enter a valid email.");
      return;
    }

    const { error } = await supabase
      .from("subscriptions")
      .insert([{ email: trimmedEmail }]);

    if (error) {
      setMessage("Subscription failed. Maybe already subscribed?");
    } else {
      setMessage("Subscription successful!");
      setEmail("");
    }
  };

  // Replace these with your real company social links
  const socialLinks = [
    { Icon: Facebook,  href: "https://www.facebook.com/arsteg/",   label: "Facebook" },
    { Icon: Twitter,   href: "https://x.com/ARSTEGSolutions",          label: "X (Twitter)" },
    { Icon: Linkedin,  href: "https://in.linkedin.com/company/arsteg-solutions-pvt--ltd", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com/arsteg",  label: "Instagram" },
  ];

  return (
    <>
      {/* Organization & LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Leading software development company in Gurugram, India. Custom web & mobile apps, health-tech, AI, cloud, email marketing services. 50+ engineers. 150+ projects.",
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
            "sameAs": socialLinks.map(link => link.href),
            "openingHours": "Mo-Fr 09:00-18:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }}
      />

      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        {/* Subtle Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-900/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand & About */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                ARSTEG Solutions
              </h2>
              <p className="text-sm leading-relaxed text-gray-400 mb-6">
                Leading software development company in Gurugram, India. Specializing in custom web & mobile apps, health-tech integrations, AI solutions, cloud services, and professional email marketing.
              </p>

              {/* Social Icons – Open in New Tab */}
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/50 backdrop-blur-sm transition-all hover:scale-110 hover:bg-blue-600 hover:shadow-lg"
                    aria-label={`Follow ARSTEG on ${label}`}
                  >
                    <Icon className="h-5 w-5 text-gray-300 transition-colors group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`/#${link.toLowerCase()}`}
                      className="inline-flex items-center gap-1 transition-colors hover:text-blue-400"
                    >
                      {link}
                      <svg className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/sitemap.xml"
                    className="inline-flex items-center gap-1 transition-colors hover:text-blue-400"
                  >
                    Sitemap
                    <svg className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div itemScope itemType="https://schema.org/PostalAddress">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href="mailto:info@arsteg.com" className="hover:text-blue-400 transition-colors" itemProp="email">
                    info@arsteg.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a href="tel:+918447470101" className="hover:text-blue-400 transition-colors" itemProp="telephone">
                    +91-844-747-0101
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                  <address className="not-italic" itemProp="streetAddress">
                    LG-048, Elan Miracle, Hayatpur, Sector 84, Near Sector 83, Gurugram, Haryana 122004, India
                  </address>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe for software development tips, health-tech insights, and email marketing updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg bg-gray-700/50 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>

              {message && (
                <p className={`text-sm mt-2 ${message.includes('successful') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} <span className="font-semibold text-blue-400">ARSTEG Solutions Pvt. Ltd.</span> All rights reserved.
            </p>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Software Development Company in Gurugram – ARSTEG Solutions</h2>
          <p>
            ARSTEG is a leading software development company in Gurugram, India. 
            Services: custom web apps, mobile development, AI solutions, cloud migration, email marketing. 
            Contact: +91-844-747-0101 | info@arsteg.com | LG-048, Elan Miracle, Sector 84, Gurugram 122004.
          </p>
        </div>
      </footer>
    </>
  );
}