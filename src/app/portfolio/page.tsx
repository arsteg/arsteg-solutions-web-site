import Link from "next/link";
import { PageIntro, NextStep } from "@/components/Editorial";
import projects from "@/data/portfolio.json";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Software solution examples",
  "Explore illustrative software solution approaches for healthcare, commerce, modernisation, document processing and analytics.",
  "/portfolio",
);
export default function Page() {
  return (
    <>
      <PageIntro
        label="SOLUTION EXAMPLES"
        title="See how we approach the problem."
      >
        These are illustrative solution scenarios, not verified client case
        studies or claims of delivered results. For software we build and
        operate, explore{" "}
        <Link className="text-link" href="/products">
          our products →
        </Link>
      </PageIntro>
      <section className="section">
        <div className="container">
          {projects.map((p) => (
            <article className="listing-row" key={p.slug}>
              <p className="eyebrow">{p.category} / ILLUSTRATIVE SCENARIO</p>
              <h2>
                <Link href={"/portfolio/" + p.slug}>{p.title} ↗</Link>
              </h2>
              <p>{p.problem}</p>
              <Link className="text-link" href={"/portfolio/" + p.slug}>
                Explore the approach →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <NextStep />
    </>
  );
}
