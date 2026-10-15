"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/analytics";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950">
      <nav className="container" aria-label="Primary">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo (white wordmark reads on the dark header) */}
          <Link href="/" className="flex items-center" aria-label="ARSTEG — Home">
            <Image
              src="/images/logo.png"
              alt="ARSTEG"
              width={160}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              onClick={() => track("cta_click", { id: "discuss_project", location: "navbar" })}
              className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[hsl(var(--brand-dark))]"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-gray-950 lg:hidden"
          >
            <div className="container space-y-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-gray-500" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => {
                  setIsOpen(false);
                  track("cta_click", { id: "discuss_project", location: "navbar_mobile" });
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--brand))] px-5 py-3.5 text-base font-semibold text-white"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
