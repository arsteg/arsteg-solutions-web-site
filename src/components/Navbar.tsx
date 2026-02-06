"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Digital Marketing", id: "digitalmarketing" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "glass border-b border-white/20 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/#home"
            onClick={() => scrollTo("home")}
            className="group relative flex items-center"
            aria-label="Arsteg – Home"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/images/logo.png"
                alt="Arsteg Logo"
                width={180}
                height={36}
                priority
                className="h-9 w-auto max-w-[180px] object-contain md:h-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className="group relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 z-0 scale-75 rounded-lg bg-gray-100/50 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50" />
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => scrollTo("contact")}
              className="ml-4 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100/50 text-gray-700 transition-colors hover:bg-gray-200/50 md:hidden dark:bg-gray-800/50 dark:text-gray-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-xl md:hidden dark:border-gray-800/50 dark:bg-gray-900/90"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full rounded-xl bg-blue-600 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all active:scale-95"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}