import { PageIntro } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Careers at ARSTEG",
  "Connect with ARSTEG about future software engineering opportunities in Gurugram, India.",
  "/careers",
);
export default function Page() {
  return (
    <>
      <PageIntro label="CAREERS" title="Care about the craft? Let’s connect.">
        We value clear thinking, useful software and thoughtful collaboration.
      </PageIntro>
      <section className="section">
        <div className="container detail-grid">
          <h2>Future opportunities</h2>
          <div>
            <p className="lede">
              There are no published openings at the moment. To introduce
              yourself for future opportunities, send your experience, areas of
              interest and links to work you can share.
            </p>
            <a className="button" href="mailto:careers@arsteg.com">
              Email careers@arsteg.com ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
