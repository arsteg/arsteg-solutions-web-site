import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import services from "@/data/services.json";
import products from "@/data/products";
import LeadForm from "./LeadForm";
import { site, mailHref, telHref } from "@/config/site";
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Link className="breadcrumb" href="/">
          Home /
        </Link>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {children && <div className="intro-copy">{children}</div>}
      </div>
    </section>
  );
}
export function Enquiry({
  service,
  location = "contact",
}: {
  service?: string;
  location?: string;
}) {
  return (
    <section id="enquiry" className="enquiry-section">
      <div className="container enquiry-grid">
        <div>
          <p className="eyebrow">LET’S TALK ABOUT THE WORK</p>
          <h2>
            What would you
            <br />
            like to build?
          </h2>
          <p className="lede">
            A new product, a system that needs attention, or an extra pair of
            engineering hands. Tell us where you are and where you want to go.
          </p>
          <ol className="next-steps">
            <li>Share your goals and constraints.</li>
            <li>We review the fit and discuss the open questions.</li>
            <li>Agree a scope, working model and next step.</li>
          </ol>
          <div className="contact-direct">
            <a href={mailHref}>{site.contact.email} ↗</a>
            <a href={telHref}>{site.contact.phone}</a>
          </div>
        </div>
        <LeadForm service={service} location={location} />
      </div>
    </section>
  );
}
export function ServiceList({ all = false }: { all?: boolean }) {
  const Heading = all ? 'h2' : 'h3';
  const list = [...services]
    .sort((a, b) => a.priority - b.priority)
    .filter((s) => all || s.priority < 5);
  return (
    <div className="service-list">
      {list.map((s, i) => (
        <Link className="service-row" key={s.id} href={"/services/" + s.slug}>
          <span className="row-number">0{i + 1}</span>
          <div>
            <Heading>{s.title}</Heading>
            <p>{s.summary}</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
export function ProductList({ detailed = false }: { detailed?: boolean }) {
  const Heading = detailed ? 'h2' : 'h3';
  return (
    <div className="product-list">
      {products.map((p, i) => (
        <article className={"product-row symbol-" + i} key={p.id}>
          <div className="product-symbol" aria-hidden="true">
            {["hr", "in", "pr"][i]}
            <span>↗</span>
          </div>
          <div>
            <p className="eyebrow">{p.category} · ARSTEG PRODUCT</p>
            <Heading>{p.name}</Heading>
            <p>{p.summary}</p>
            {detailed && (
              <>
                <p>
                  <strong>For:</strong> {p.audience}
                </p>
                <ul className="product-features">
                  {p.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              Explore {p.name} <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Approach() {
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A CLEAR WAY FORWARD</p>
            <h2>
              Good software starts
              <br />
              with the right questions.
            </h2>
          </div>
          <p>
            Understand the business. Make the trade-offs visible. Build
            something your team can use and maintain.
          </p>
        </div>
        <ol className="process-grid">
          {[
            [
              "Understand",
              "Map the people, workflows and constraints before choosing a technology.",
            ],
            [
              "Define",
              "Agree priorities, acceptance criteria and a practical first milestone.",
            ],
            [
              "Build together",
              "Review working software, resolve questions and test the important journeys.",
            ],
            [
              "Launch & evolve",
              "Plan deployment, documentation, handover and the support you need next.",
            ],
          ].map(([t, d], i) => (
            <li key={t}>
              <span>0{i + 1} /</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function NextStep() {
  return (
    <section className="section next-step">
      <div className="container">
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h2>
          Let’s turn the problem
          <br />
          into a practical plan.
        </h2>
        <Link className="button" href="/contact">
          Discuss your project <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
