"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar, Clock, Globe, Phone, ArrowRight } from "lucide-react";
import { site, telHref, mailHref, whatsappUrl } from "@/config/site";
import { track } from "@/lib/analytics";

/**
 * Discovery-call booking.
 *
 * - When NEXT_PUBLIC_CALENDLY_URL is set (`site.flags.calendlyUrl`), embeds the
 *   real Calendly inline widget. Calendly handles timezones for the visitor.
 * - When it's NOT set, shows an accessible fallback (enquiry form + direct
 *   contact). We never render a fake calendar or a no-op "book" button.
 */
export default function BookCall() {
  const calendlyUrl = site.flags.calendlyUrl;
  const [announced, setAnnounced] = useState(false);

  useEffect(() => {
    if (calendlyUrl && !announced) {
      track("booking_start", { provider: "calendly" });
      setAnnounced(true);
    }
  }, [calendlyUrl, announced]);

  return (
    <section id="book-call" className="scroll-mt-24 border-t border-gray-100 bg-gray-50 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-gray-600 ring-1 ring-gray-200">
            <Calendar className="h-4 w-4 text-[hsl(var(--brand))]" /> Book a discovery call
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prefer to talk it through?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A short, no-obligation call to understand what you need and whether we&apos;re a fit.
          </p>
        </div>

        {calendlyUrl ? (
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5">
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "680px" }}
              aria-label="Booking calendar"
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
            <p className="flex items-center justify-center gap-2 border-t border-gray-100 py-3 text-sm text-gray-500">
              <Globe className="h-4 w-4" /> Times shown in your local timezone
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <h3 className="font-semibold text-gray-900">Request a call</h3>
              <p className="mt-2 text-sm text-gray-600">
                Send a one-line enquiry and we&apos;ll propose a couple of times that suit your timezone.
              </p>
              <a
                href="#contact"
                onClick={() => track("cta_click", { id: "request_call", location: "book_call" })}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Send an enquiry <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" /> Usually a 20–30 minute call
              </p>
            </div>
            <div className="rounded-2xl bg-gray-900 p-8 text-white">
              <h3 className="font-semibold">Reach us directly</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href={telHref} onClick={() => track("contact_phone_click")} className="flex items-center gap-2 text-gray-200 hover:text-white">
                  <Phone className="h-4 w-4" /> {site.contact.phone}
                </a>
                <a href={mailHref} onClick={() => track("contact_email_click")} className="flex items-center gap-2 text-gray-200 hover:text-white">
                  <span className="grid h-4 w-4 place-items-center">@</span> {site.contact.email}
                </a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => track("contact_whatsapp_click")} className="flex items-center gap-2 text-gray-200 hover:text-white">
                  <span className="grid h-4 w-4 place-items-center">↗</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
