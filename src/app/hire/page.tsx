import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Enquiry, EngagementModels, HireList, PageIntro } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata(
  "Hire developers & engineering teams in India",
  "Hire skilled .NET, Python, React, full-stack, AI, QA, DevOps and mobile developers in India. Add individuals, augment your team, or stand up a dedicated team — working in your time zone.",
  "/hire",
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { name: "Home", item: site.url },
              { name: "Hire talent", item: site.url + "/hire" },
            ].map((v, i) => ({ "@type": "ListItem", position: i + 1, ...v })),
          }),
        }}
      />
      <PageIntro
        label="HIRE TALENT"
        title="Hire the engineers your roadmap needs."
      >
        <p>
          Add skilled developers, specialists and teams based in India to your
          organisation — whether you need one person with a specific skill or a
          standing team. We work with founders, CTOs and engineering leaders
          internationally; whether you are in the US, Canada, the UK, Europe,
          Singapore or Australia, working-hours overlap is agreed for each
          engagement.
        </p>
        <a className="button" href="#enquiry">
          Share your hiring needs <ArrowRight size={18} />
        </a>
      </PageIntro>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BY TECHNOLOGY & ROLE</p>
              <h2>
                Find the skill,
                <br />
                then the right fit.
              </h2>
            </div>
            <p>
              Enter by the technology you work in or the role you need to fill.
              Each page explains who it suits, the problems it solves and how
              collaboration works.
            </p>
          </div>
          <HireList />
          <Link className="text-link section-link" href="/services">
            Looking for a scoped project instead? Explore software services{" "}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <EngagementModels />
          <Link className="text-link section-link" href="/dedicated-teams">
            Compare engagement models in detail <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Enquiry location="hire-hub" />
    </>
  );
}
