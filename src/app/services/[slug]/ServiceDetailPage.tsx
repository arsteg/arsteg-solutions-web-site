import Link from "next/link";
import { Enquiry, PageIntro } from "@/components/Editorial";
import { site } from "@/config/site";
import services from "@/data/services.json";
type Service = (typeof services)[number];
export default function ServiceDetailPage({
  service: s,
}: {
  service: Service;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: site.url + "/services/" + s.slug,
            provider: {
              "@type": "Organization",
              name: site.legalName,
              url: site.url,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { name: "Home", item: site.url },
              { name: "Services", item: site.url + "/services" },
              { name: s.title, item: site.url + "/services/" + s.slug },
            ].map((v, i) => ({ "@type": "ListItem", position: i + 1, ...v })),
          }),
        }}
      />
      <PageIntro label="SOFTWARE DEVELOPMENT SERVICES" title={s.title}>
        <p>{s.tagline}</p>
        <p>{s.summary}</p>
        <a className="button" href="#enquiry">
          Discuss{" "}
          {s.id === "dedicated-teams" ? "your team needs" : "your project"} ↗
        </a>
      </PageIntro>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">THE RIGHT FIT</p>
            <h2>Built around a real business need.</h2>
            <Link className="text-link" href="/services">
              ← All services
            </Link>
          </div>
          <div>
            <p className="lede">{s.who}</p>
            <ul className="ruled-list">
              {s.problems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">SCOPE & DELIVERABLES</p>
            <h2>Know what you’re building towards.</h2>
          </div>
          <ul className="ruled-list">
            {s.deliverables.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">DELIVERY APPROACH</p>
          <h2>From context to working software.</h2>
          <ol className="process-grid">
            {s.approach.map((x, i) => (
              <li key={x}>
                <span>0{i + 1}</span>
                <p style={{ color: "var(--ink)", marginTop: 20 }}>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container detail-grid">
          <h2>Technology follows the problem.</h2>
          <div>
            <div className="tags">
              {s.tech.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              We agree the stack around your existing systems, team and
              operating requirements.
            </p>
            <h3>Choose a working model</h3>
            <p>
              Project delivery for a defined scope; dedicated developers for an
              ongoing roadmap; hourly support for a focused backlog.
              Availability, estimates and terms are confirmed in the proposal.
            </p>
            <Link
              className="text-link"
              href="/services/dedicated-engineering-teams"
            >
              Dedicated & hourly development →
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">BEFORE WE BEGIN</p>
            <h2>
              Clear answers.
              <br />
              Shared expectations.
            </h2>
            {s.boundaries.map((x) => (
              <p key={x}>{x}</p>
            ))}
          </div>
          <div className="faq-list">
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Enquiry service={s.id} location={"service:" + s.slug} />
    </>
  );
}
