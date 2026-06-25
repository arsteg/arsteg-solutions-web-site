"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const navigation = {
  company: [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Blog", href: "/#blog" },
    { name: "Case Studies", href: "/#portfolio" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Custom Development", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "AI & ML", href: "/services" },
    { name: "Digital Marketing", href: "/DigitalMarketing" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://in.linkedin.com/company/arsteg-solutions-pvt--ltd", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/ARSTEGSolutions", icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("error");
      return;
    }

    const { error } = await supabase
      .from("subscriptions")
      .insert([{ email: trimmedEmail }]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ARSTEG Solutions Pvt. Ltd.",
            "url": "https://arsteg.com",
            "logo": "https://arsteg.com/logo.png",
            "description": "Enterprise software development partner. 50+ senior engineers.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "LG-048, Elan Miracle, Sector 84",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "telephone": "+91-844-747-0101",
            "email": "info@arsteg.com"
          })
        }}
      />

      <footer className="bg-gray-900">
        {/* Main Footer */}
        <div className="container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Brand & Newsletter */}
            <div className="max-w-md">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold text-white">ARSTEG</span>
                <span className="text-2xl font-light text-gray-500 ml-1">Solutions</span>
              </Link>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Enterprise software development partner. We help ambitious companies
                build scalable software with senior engineers and startup velocity.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white mb-4">Stay Updated</h3>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100 disabled:opacity-50"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                {status === "success" && (
                  <p className="text-sm text-emerald-400 mt-2">Subscribed successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 mt-2">Something went wrong. Try again.</p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Navigation */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:info@arsteg.com"
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                      info@arsteg.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+918447470101"
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4" />
                      +91-844-747-0101
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Gurugram, Haryana, India</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} ARSTEG Solutions Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-gray-400">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
