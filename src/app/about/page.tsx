import { Approach, PageIntro, NextStep } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
import { formattedAddress, site } from "@/config/site";
import Link from "next/link";
export const metadata = pageMetadata(
  "About ARSTEG Solutions",
  "ARSTEG Solutions is a Gurugram-based engineering company providing dedicated developers, staff augmentation and custom software to companies in India and internationally.",
  "/about",
);
export default function Page() {
  return (
    <>
      <PageIntro
        label="ABOUT ARSTEG"
        title="Close to the problem. Committed to the work."
      >
        We are ARSTEG Solutions, a software engineering company based in
        Gurugram, India. We help companies extend their engineering capacity
        with dedicated developers and teams, and build or modernize software
        end to end.
      </PageIntro>
      <section className="section">
        <div className="container detail-grid">
          <h2>A practical partner for your next stage.</h2>
          <div>
            <p className="lede">
              The starting point is your need: the skill you are missing, the
              capacity your roadmap needs, or the outcome you want delivered.
            </p>
            <p>
              You can hire developers by technology or role, augment your team,
              or stand up a dedicated team — and we also deliver custom
              software, mobile and desktop applications and integrations as
              scoped projects. Our own products bring that engineering into HR
              operations, AI GST compliance and AI sales outreach.
            </p>
            <Link className="text-link" href="/hire">
              Hire developers & teams →
            </Link>
            <h3 style={{ marginTop: 35 }}>
              Based in India. Working across borders.
            </h3>
            <p>
              We work with companies in India and internationally. Whether you
              are in the United States, Canada, the United Kingdom, Europe,
              Singapore or Australia, we agree communication hours, review
              cadence and delivery responsibilities before an engagement begins.
              We deliver from India and do not maintain local offices in those
              markets.
            </p>
            <p>{formattedAddress()}</p>
            <a className="text-link" href={site.social.linkedin}>
              Find ARSTEG on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      <Approach />
      <NextStep />
    </>
  );
}
