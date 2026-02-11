"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Blog", id: "blog" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", ...navLinks.map(l => l.id), "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-200/50"
          : "bg-gradient-to-b from-white/80 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="group relative flex items-center gap-2"
            aria-label="Arsteg – Home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-2"
            >
              {/* Logo glow effect on hover */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-xl bg-white/50 p-2 ring-1 ring-gray-200/50 transition-all duration-300 group-hover:ring-blue-200 group-hover:shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Arsteg Logo"
                  width={200}
                  height={50}
                  priority
                  className="h-11 w-auto object-contain md:h-12"
                />
              </div>
              {/* Company Name */}
              <div className="relative hidden sm:block">
                <span className="text-xl font-bold tracking-tight text-gray-900">ARSTEG</span>
                <span className="ml-2 text-xl font-light text-gray-500">Solutions</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            {/* Nav Links Container */}
            <div className="flex items-center rounded-full bg-gray-100/80 p-1.5 ring-1 ring-gray-200/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="relative"
                  >
                    <motion.div
                      className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-gray-200/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-6"
            >
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
              >
                <span className="relative z-10">Get a Quote</span>
                <ChevronRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all lg:hidden ${
              isOpen
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.id);
                      }}
                      className={`flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-all ${
                        activeSection === link.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <ChevronRight className={`h-4 w-4 transition-colors ${
                        activeSection === link.id ? "text-blue-400" : "text-gray-400"
                      }`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 py-4 text-center text-base font-semibold text-white shadow-lg transition-all active:scale-[0.98]"
                >
                  Get a Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
