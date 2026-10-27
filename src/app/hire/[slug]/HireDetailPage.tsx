import Link from "next/link";
import { Enquiry, EngagementModels, PageIntro } from "@/components/Editorial";
import { site } from "@/config/site";
import { getHireRole, hireRoles, type HireRole } from "@/data/hire";
import services from "@/data/services.json";

export default function HireDetailPage({ role: s }: { role: HireRole }) {
  const relatedRoles = s.related
    .map((slug) => getHireRole(slug))
    .filter((r): r is HireRole => Boolean(r));
  const relatedServices = s.relatedServices
    .map((slug) => services.find((svc) => svc.slug === slug))
    .filter((svc): svc is (typeof services)[number] => Boolean(svc));
  const enquiryService = "Hire " + s.name.toLowerCase();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: s.metaTitle,
            name: s.h1,
            description: s.tagline,
            url: site.url + "/hire/" + s.slug,
            areaServed: ["US", "CA", "GB", "SG", "AU", "EU"],
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
              { name: "Hire talent", item: site.url + "/hire" },
              { name: s.name, item: site.url + "/hire/" + s.slug },
            ].map((v, i) => ({ "@type": "ListItem", position: i + 1, ...v })),
          }),
        }}
      />
      <PageIntro label={s.group.toUpperCase()} title={s.h1}>
        <p>{s.tagline}</p>
        <p>{s.intro}</p>
        <a className="button" href="#enquiry">
          Share your hiring needs ↗
        </a>
      </PageIntro>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">WHO THIS SUITS</p>
            <h2>The right fit for your team.</h2>
            <Link className="text-link" href="/hire">
              ← All roles & technologies
            </Link>
          </div>
          <ul className="ruled-list">
            {s.whoFor.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">PROBLEMS WE HELP SOLVE</p>
            <h2>The situations that bring teams to us.</h2>
          </div>
          <ul className="ruled-list">
            {s.problems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">WHAT THEY CAN HELP YOU DELIVER</p>
            <h2>Concrete work, not job titles.</h2>
          </div>
          <ul className="ruled-list">
            {s.examples.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">TECHNICAL CAPABILITIES</p>
            <h2>Matched to your stack.</h2>
          </div>
          <div>
            <div className="tags">
              {s.stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <ul className="ruled-list" style={{ marginTop: 28 }}>
              {s.skills.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">HOW COLLABORATION WORKS</p>
          <h2>Part of your team, not a black box.</h2>
          <ol className="process-grid">
            {s.collaboration.map((c, i) => (
              <li key={c.title}>
                <span>0{i + 1} /</span>
                <h3>{c.title}</h3>
                <p>{c.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <EngagementModels keys={s.engagement} />
          <Link className="text-link section-link" href="/dedicated-teams">
            Compare engagement models in detail →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2>Clear answers before you commit.</h2>
            {(relatedRoles.length > 0 || relatedServices.length > 0) && (
              <div className="related-links">
                {relatedRoles.map((r) => (
                  <Link key={r.slug} href={"/hire/" + r.slug}>
                    Hire {r.name.toLowerCase()} →
                  </Link>
                ))}
                {relatedServices.map((svc) => (
                  <Link key={svc.slug} href={"/services/" + svc.slug}>
                    {svc.title} →
                  </Link>
                ))}
              </div>
            )}
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

      <Enquiry service={enquiryService} location={"hire:" + s.slug} />
    </>
  );
}

export { hireRoles };
