"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Email Marketing", id: "emailmarketing" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl transition-all duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

        
        {/* ==== LOGO – UPDATED ==== */}
          <Link
            href="/#home"
            onClick={() => scrollTo("home")}
            className="flex items-center"
            aria-label="Arsteg – Home"
          >
            <Image
              src="/images/logo.png"
              alt="Arsteg Logo"
              width={180}
              height={36}
              priority
              className="
                h-9 w-auto max-w-[180px] object-contain
                transition-all duration-200
                md:h-10
              "
            />
          </Link>
          {/* ==== END LOGO ==== */}

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}

         
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-out md:hidden ${
          isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}