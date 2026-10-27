import Link from "next/link";
import { PageIntro, NextStep } from "@/components/Editorial";
import posts from "@/data/blog-posts.json";
import { pageMetadata } from "@/lib/seo";
import { readingTime } from "@/lib/reading-time";
export const metadata = pageMetadata(
  "Software engineering insights",
  "Practical perspectives on software modernisation, API design and AI-assisted workflows from ARSTEG.",
  "/blog",
);
export default function Page() {
  return (
    <>
      <PageIntro
        label="INSIGHTS"
        title="A little clarity for the decisions ahead."
      >
        Explore engineering ideas for more maintainable applications and better
        business workflows.
      </PageIntro>
      <section className="section">
        <div className="container">
          {posts.map((p) => (
            <article className="listing-row" key={p.slug}>
              <p className="eyebrow">
                {p.category} / {readingTime(p.content)}
              </p>
              <h2>
                <Link href={"/blog/" + p.slug}>{p.title} ↗</Link>
              </h2>
              <p>{p.excerpt}</p>
              <Link className="text-link" href={"/blog/" + p.slug}>
                Read the article →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <NextStep />
    </>
  );
}
