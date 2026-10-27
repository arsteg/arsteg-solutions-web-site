import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Enquiry, EngagementModels, PageIntro } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata(
  "Dedicated development teams & staff augmentation",
  "Extend your team with dedicated developers and dedicated development teams in India, or augment your existing team. Clear collaboration, time-zone overlap and accountability.",
  "/dedicated-teams",
);

const practical: { q: string; a: string }[] = [
  {
    q: "Who manages daily priorities?",
    a: "It depends on the model. With staff augmentation your managers direct the work day to day. With a dedicated team, you own product direction and we help coordinate delivery within the team. With managed delivery, we coordinate against an agreed scope while you review and steer. We confirm this explicitly at the start.",
  },
  {
    q: "How are requirements and candidates discussed?",
    a: "We start with a conversation about your stack, roadmap and the gap you are filling. We then propose specific people with relevant experience for you to review, rather than presenting an anonymous pool.",
  },
  {
    q: "How does technical evaluation work?",
    a: "You are welcome to interview and technically assess anyone we propose, using your own process. We want you confident in the fit before anyone starts.",
  },
  {
    q: "How do team members collaborate with our staff?",
    a: "Developers work inside your tools — your source control, task board, chat and review process — and join the ceremonies you use, such as stand-ups and planning. They operate as part of your team, not a separate silo.",
  },
  {
    q: "What working-hours overlap is available?",
    a: "We agree a workable overlap with your team's hours for stand-ups, reviews and collaboration, confirmed per engagement. Our base is in India; we will be clear about what overlap we can sustain for your time zone rather than over-promising.",
  },
  {
    q: "How are access, onboarding and handover handled?",
    a: "Onboarding is planned up front: the access required, how it is granted securely, who introduces the codebase and the first pieces of work. Handover — documentation, knowledge transfer and code ownership — is defined in the agreement, not left to the end.",
  },
  {
    q: "How can we change capacity later?",
    a: "Tell us how your roadmap is shifting and we discuss scaling up or down. Notice periods and how capacity changes are handled are set out in writing up front, so there are no surprises either way.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "IT staff augmentation and dedicated development teams",
            name: "Dedicated development teams & staff augmentation",
            description:
              "Dedicated developers, dedicated development teams and staff augmentation for international companies, delivered from India.",
            url: site.url + "/dedicated-teams",
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
              { name: "Dedicated teams", item: site.url + "/dedicated-teams" },
            ].map((v, i) => ({ "@type": "ListItem", position: i + 1, ...v })),
          }),
        }}
      />
      <PageIntro
        label="DEDICATED TEAMS & STAFF AUGMENTATION"
        title="Capacity that works the way your team works."
      >
        <p>
          Extend your organisation with dedicated developers, a dedicated
          development team, or specialists embedded in your existing team. The
          difference that matters is not the rate — it is engineering quality,
          clear communication and accountability you can feel.
        </p>
        <a className="button" href="#enquiry">
          Discuss your requirements <ArrowRight size={18} />
        </a>
      </PageIntro>

      <section className="section">
        <div className="container">
          <EngagementModels />
        </div>
      </section>

      <section className="section soft-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">HOW WORKING TOGETHER ACTUALLY WORKS</p>
            <h2>The practical questions, answered honestly.</h2>
            <p>
              These are the questions engineering and procurement teams ask
              before an engagement. We would rather answer them plainly than
              make promises we cannot keep.
            </p>
            <Link className="text-link" href="/hire">
              Browse roles & technologies →
            </Link>
          </div>
          <div className="faq-list">
            {practical.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHY ARSTEG</p>
              <h2>
                A partner, built around
                <br />
                accountability.
              </h2>
            </div>
            <p>
              We are a Gurugram-based engineering company that also builds and
              operates its own software products — so we know what it takes to
              ship and maintain real systems, not just staff a role.
            </p>
          </div>
          <div className="why-grid">
            {[
              [
                "Engineering, not headcount",
                "We propose specific people for the work and the stack, and you evaluate them with your own process before committing.",
              ],
              [
                "Communication you can rely on",
                "English-speaking developers working in your tools and ceremonies, with an agreed overlap and reporting cadence.",
              ],
              [
                "Clear accountability",
                "Scope, ownership, security, notice periods and handover are agreed in writing — not left vague.",
              ],
              [
                "Product-grade discipline",
                "We run our own products, so tests, delivery pipelines and maintainability are habits, not extras.",
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/products">
            See the products we build and run <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Enquiry location="dedicated-teams" />
    </>
  );
}
