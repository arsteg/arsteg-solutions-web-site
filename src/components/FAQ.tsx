"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { site } from "@/config/site";

const faqs = [
  {
    question: "What size of business do you work with?",
    answer:
      "We focus on small and mid-sized businesses across India, the US, UK and Europe. Typical projects range from roughly $10,000 to $75,000, plus ongoing monthly engagements for dedicated teams.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "Most start with a paid, fixed-scope discovery or a small first milestone. That lets both sides judge fit and produces a clear plan and estimate before any larger commitment.",
  },
  {
    question: "What does it cost, and how do you charge?",
    answer:
      "It depends on scope, which is exactly what discovery establishes. We offer fixed-price milestones for well-defined work, and monthly rates for dedicated teams and ongoing development. You'll always have a written estimate before work begins.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do — completely. All source code and intellectual property are yours, committed to repositories and infrastructure you control. We're happy to sign an NDA before detailed discussions.",
  },
  {
    question: "Can you work with our existing team and systems?",
    answer:
      "Yes. Much of our work extends an existing team or builds alongside and incrementally replaces a legacy system, rather than forcing a rebuild. Our engineers integrate with your repo, board and standups.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Commonly React/Next.js and TypeScript on the front end; Node.js, .NET and Python on the back end; PostgreSQL, SQL Server and MongoDB for data; and AWS, Azure or Google Cloud for hosting. We also build integrations and AI-assisted automations, and work across the Zoho ecosystem.",
  },
  {
    question: "Where are you based, and how do you communicate?",
    answer: `We're based in ${site.address.city}, ${site.address.countryName}, and work with clients across several time zones. You get direct access to the engineers on your project, with regular demos and progress updates.`,
  },
  {
    question: "Do you use AI, and is it reliable?",
    answer:
      "We use AI where it genuinely saves time — for example document extraction, classification and drafting — and we design those workflows with validation and human review rather than full autonomy for anything consequential.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions buyers ask us
            </h2>
            <p className="mt-4 text-lg text-gray-600">Straight answers to help you decide if we&apos;re a fit.</p>
          </div>

          <div className="mx-auto max-w-2xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-gray-900">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-gray-400"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-3 text-gray-600">Still have a question?</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-[hsl(var(--brand))]">
              Ask us directly
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
