import { Approach, PageIntro, NextStep } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
import { formattedAddress, site } from "@/config/site";
import Link from "next/link";
export const metadata = pageMetadata(
  "About ARSTEG Solutions",
  "Meet ARSTEG Solutions, a Gurugram-based software engineering partner for small and mid-sized businesses in India and international markets.",
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
        Gurugram, India. We help small and mid-sized businesses build
        applications, improve existing systems and extend their development
        capacity.
      </PageIntro>
      <section className="section">
        <div className="container detail-grid">
          <h2>A practical partner for your next stage.</h2>
          <div>
            <p className="lede">
              The starting point is your business: what needs to work better,
              who depends on it, and what a useful first release looks like.
            </p>
            <p>
              Our services cover custom software, mobile and desktop
              development, integrations and dedicated developers. Our own
              products bring that work into HR operations, GST compliance and
              sales outreach.
            </p>
            <Link className="text-link" href="/products">
              Explore our products →
            </Link>
            <h3 style={{ marginTop: 35 }}>
              Based in India. Working across borders.
            </h3>
            <p>
              We serve businesses in India, the United States, the United
              Kingdom and Europe. Communication hours, review cadence and
              delivery responsibilities are discussed before an engagement
              begins.
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
