"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { site, telHref, mailHref, formattedAddress } from "@/config/site";
import { track } from "@/lib/analytics";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Insights", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Custom software & modernization", href: "/services/custom-software-development" },
    { name: "Integrations & AI automation", href: "/services/integrations-automation" },
    { name: "Dedicated engineering teams", href: "/services/dedicated-engineering-teams" },
    { name: "Zoho implementation", href: "/services/zoho-development" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { name: "X (Twitter)", href: site.social.x, icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      return;
    }
    const { error } = await supabase.from("subscriptions").insert([{ email: trimmed }]);
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-950">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand + newsletter */}
          <div className="max-w-md">
            <span className="text-2xl font-semibold text-white">ARSTEG</span>
            <p className="mt-5 leading-relaxed text-gray-400">
              A software engineering partner for growing businesses. We build custom applications,
              modernize legacy systems, and connect and automate the tools you already use.
            </p>

            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold text-white">Occasional engineering notes</h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-white/25 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              {status === "success" && <p className="mt-2 text-sm text-emerald-400">Subscribed — thank you.</p>}
              {status === "error" && <p className="mt-2 text-sm text-red-400">Please enter a valid email.</p>}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={mailHref} onClick={() => track("contact_email_click")} className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <Mail className="h-4 w-4" /> {site.contact.email}
                  </a>
                </li>
                <li>
                  <a href={telHref} onClick={() => track("contact_phone_click")} className="flex items-center gap-2 text-gray-400 hover:text-white">
                    <Phone className="h-4 w-4" /> {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{formattedAddress()}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">&copy; {currentYear} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">Privacy</Link>
            <Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
