import type { Metadata } from "next";
import { site, mailHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How ARSTEG Solutions collects and uses information on this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy</h1>
        <p className="mt-4 text-gray-600">
          This page explains, in plain language, what information this website collects and why. It
          reflects what the site actually does today.
        </p>

        <div className="mt-10 space-y-8 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <section>
            <h2>When you send an enquiry</h2>
            <p>
              The enquiry form collects your name, email, what you need help with, and optionally a
              company/website, area of work and budget. We use this only to respond to you. It is
              emailed to our team and stored in our database so we don&apos;t lose it.
            </p>
          </section>

          <section>
            <h2>Newsletter</h2>
            <p>
              If you subscribe, we store your email address to send occasional updates. You can ask
              us to remove it at any time.
            </p>
          </section>

          <section>
            <h2>Website analytics &amp; visit logging</h2>
            <p>The site records basic, non-identifying usage information to understand traffic and improve the site:</p>
            <ul>
              <li>A first-party visitor identifier (stored in a cookie) and the pages you view.</li>
              <li>Your IP address, browser user-agent and referring page, kept for security and analytics.</li>
              <li>
                If web analytics is enabled, aggregate event data (e.g. which buttons are clicked)
                with IP anonymization. We never send your name, email or enquiry text to analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2>Who we share it with</h2>
            <p>
              We use third-party processors to run the site: an email delivery service to send
              enquiry notifications, and a database/hosting provider to store submissions and visit
              logs. We do not sell your information.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              To access, correct or delete information we hold about you, email{" "}
              <a href={mailHref} className="font-medium text-[hsl(var(--brand))] underline">{site.contact.email}</a>.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              {site.legalName}
              <br />
              {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}, {site.address.countryName}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
