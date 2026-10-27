import Link from "next/link";
import { PageIntro, NextStep } from "@/components/Editorial";
import posts from "@/data/blog-posts.json";
import { readingTime } from "@/lib/reading-time";
export default function BlogDetailPage({
  post: p,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <>
      <PageIntro label={p.category + " / " + readingTime(p.content)} title={p.title}>
        <p>{p.excerpt}</p>
        <p style={{ fontSize: 13 }}>
          {p.author} · {p.date}
        </p>
      </PageIntro>
      <div className="container">
        <article className="article-body">
          {p.content.map((b, i) =>
            b.type === "heading" ? (
              <h2 key={i}>{b.text}</h2>
            ) : b.type === "list" ? (
              <ul key={i}>
                {b.items?.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            ) : (
              <p key={i}>{b.text}</p>
            ),
          )}
          <Link className="text-link" href="/blog">
            ← All insights
          </Link>
          <br />
          <Link className="text-link" href="/services">
            Explore the engineering services behind these ideas →
          </Link>
        </article>
      </div>
      <NextStep />
    </>
  );
}
