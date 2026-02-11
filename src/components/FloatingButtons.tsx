"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top after scrolling 500px
      setShowBackToTop(window.scrollY > 500);
      // Show mobile CTA after scrolling 300px
      setShowMobileCTA(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // WhatsApp number (replace with actual number)
  const whatsappNumber = "918447470101";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your software development services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Mobile Floating CTA - Only visible on mobile */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-white via-white to-transparent lg:hidden"
          >
            <button
              onClick={scrollToContact}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30"
            >
              <Send className="h-5 w-5" />
              Get a Free Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
            Chat with us
          </span>

          {/* Ping animation */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
          </span>
        </motion.a>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Add padding at bottom on mobile to account for floating CTA */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
