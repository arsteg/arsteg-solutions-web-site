import { PageIntro, NextStep } from "@/components/Editorial";
import projects from "@/data/portfolio.json";
import Link from "next/link";
export default function PortfolioDetailPage({
  project: p,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <>
      <PageIntro
        label={p.category + " / ILLUSTRATIVE SCENARIO"}
        title={p.title}
      >
        A representative solution approach. This is not a verified client
        engagement or a claim of measured results.
      </PageIntro>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <h2>The business problem</h2>
            <Link className="text-link" href="/portfolio">
              ← All solution examples
            </Link>
          </div>
          <p className="lede">{p.problem}</p>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container detail-grid">
          <h2>An approach to explore</h2>
          <ul className="ruled-list">
            {p.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <h2>Possible technology choices</h2>
          <div className="tags">
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="container">
          <Link
            className="text-link"
            href="/services/custom-software-development"
          >
            Explore custom software development →
          </Link>
        </div>
      </section>
      <NextStep />
    </>
  );
}
