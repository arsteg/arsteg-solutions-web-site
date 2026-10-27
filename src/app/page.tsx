import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Approach,
  Enquiry,
  EngagementModels,
  HireList,
  ProductList,
  ServiceList,
} from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Hire developers & dedicated teams in India",
  "Hire skilled .NET, Python, React, full-stack, AI, QA and DevOps developers in India. Staff augmentation, dedicated developers and dedicated teams for companies in the US, UK, Europe, Canada, Singapore and Australia.",
  "/",
);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="red-dot" /> ENGINEERING TALENT, BASED IN INDIA
            </p>
            <h1>
              Hire the developers
              <br />
              and teams
              <br />
              <span>your roadmap needs.</span>
            </h1>
            <p className="lede">
              Add skilled engineers, specialists and dedicated teams to your
              company — working in your tools, your process and your time zone.
              From a single hire to a whole team.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/hire">
                Hire developers <ArrowUpRight size={19} />
              </Link>
              <Link className="text-link" href="/dedicated-teams">
                Explore engagement models <ArrowRight size={17} />
              </Link>
            </div>
            <p className="hero-note">
              Based in Gurugram, India. Built to collaborate across
              international time zones.
            </p>
          </div>
          <div
            className="engineering-art"
            role="img"
            aria-label="An engineering blueprint showing individual developers, staff augmentation and a dedicated team joining a client's engineering organisation"
          >
            <div className="art-top">
              <span>ARSTEG / ENGINEERING TALENT</span>
              <span>01 — ENGAGE</span>
            </div>
            <div className="blueprint-grid">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="core-block">
                <span>YOUR TEAM</span>
                <strong>
                  extended<span className="accent">.</span>
                </strong>
                <div className="core-line" />
                <small>HIRE → ONBOARD → DELIVER</small>
              </div>
              <div className="platform-tag tag-web">
                1× <span>Specialist</span>
              </div>
              <div className="platform-tag tag-mobile">
                +N <span>Augment</span>
              </div>
              <div className="platform-tag tag-desktop">
                ▣ <span>Team</span>
              </div>
            </div>
            <div className="art-bottom">
              <span>SKILLS NEEDED → ENGINEERS WHO FIT</span>
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>
      </section>
      <div className="capability-strip">
        <div className="container">
          <span>HOW TEAMS ENGAGE US</span>
          <p>An individual specialist</p>
          <span className="strip-dot">/</span>
          <p>Staff augmentation</p>
          <span className="strip-dot">/</span>
          <p>A dedicated team</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / HIRE BY TECHNOLOGY & ROLE</p>
              <h2>
                The skill you need.
                <br />
                Engineers who fit.
              </h2>
            </div>
            <p>
              Enter by the technology you work in or the role you need to fill.
              Each engineer works in your repositories, review process and
              ceremonies — not a silo.
            </p>
          </div>
          <HireList />
          <Link className="text-link section-link" href="/hire">
            See all roles & technologies <ArrowRight size={17} />
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
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SOFTWARE SERVICES</p>
              <h2>
                Prefer to hand us
                <br />
                a whole project?
              </h2>
            </div>
            <p>
              When you need an outcome delivered rather than capacity added, we
              design, build and modernize software end to end.
            </p>
          </div>
          <ServiceList />
          <Link className="text-link section-link" href="/services">
            Also explore integrations, Zoho and marketing engineering{" "}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section product-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / PROOF WE CAN BUILD</p>
              <h2>
                We build and run
                <br />
                our own products.
              </h2>
            </div>
            <div>
              <p>
                The strongest evidence of our engineering is the software we own
                and operate — spanning HR operations, AI-powered GST compliance
                and AI outbound sales. The same people build for our clients.
              </p>
              <Link className="text-link" href="/products">
                Meet our products <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <ProductList />
        </div>
      </section>
      <Approach />
      <Enquiry location="home" />
    </>
  );
}
