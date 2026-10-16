import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Approach,
  Enquiry,
  ProductList,
  ServiceList,
} from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Custom software, mobile apps & dedicated developers",
  "ARSTEG builds custom software, mobile and desktop applications for growing businesses. Work with an India-based engineering partner on a project, dedicated or hourly basis.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="red-dot" /> SOFTWARE ENGINEERING, WITH PURPOSE
            </p>
            <h1>
              Your business.
              <br />
              Your next move.
              <br />
              <span>Built in software.</span>
            </h1>
            <p className="lede">
              Custom software, mobile and desktop apps, and developers who work
              with your team. From the first brief to the next release.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Discuss your project <ArrowUpRight size={19} />
              </Link>
              <Link className="text-link" href="/services">
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>
            <p className="hero-note">
              Based in Gurugram, India. Built for businesses across borders.
            </p>
          </div>
          <div
            className="engineering-art"
            role="img"
            aria-label="An engineering blueprint connecting a business idea to web, mobile and desktop applications"
          >
            <div className="art-top">
              <span>ARSTEG / ENGINEERING STUDIO</span>
              <span>01 — BUILD</span>
            </div>
            <div className="blueprint-grid">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="core-block">
                <span>YOUR NEXT</span>
                <strong>
                  big idea<span className="accent">.</span>
                </strong>
                <div className="core-line" />
                <small>DESIGNED → DEVELOPED → DELIVERED</small>
              </div>
              <div className="platform-tag tag-web">
                &lt;/&gt; <span>Web</span>
              </div>
              <div className="platform-tag tag-mobile">
                ▯ <span>Mobile</span>
              </div>
              <div className="platform-tag tag-desktop">
                ▱ <span>Desktop</span>
              </div>
            </div>
            <div className="art-bottom">
              <span>BUSINESS NEED → WORKING SOFTWARE</span>
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>
      </section>
      <div className="capability-strip">
        <div className="container">
          <span>BUILT AROUND YOUR NEEDS</span>
          <p>New products</p>
          <span className="strip-dot">/</span>
          <p>Better business systems</p>
          <span className="strip-dot">/</span>
          <p>More engineering capacity</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / HOW WE CAN HELP</p>
              <h2>
                The right expertise.
                <br />
                For the work ahead.
              </h2>
            </div>
            <p>
              Build from the ground up, improve what’s already running, or bring
              extra capability into your team.
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
              <p className="eyebrow">02 / OUR OWN PRODUCTS</p>
              <h2>
                We build products.
                <br />
                And think like owners.
              </h2>
            </div>
            <div>
              <p>
                Our product portfolio spans HR operations, GST compliance and
                sales outreach. Explore the software behind our engineering
                approach.
              </p>
              <Link className="text-link" href="/products">
                Meet our products <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <ProductList />
        </div>
      </section>
      <section className="section">
        <div className="container engagement-grid">
          <div>
            <p className="eyebrow">03 / A WAY TO WORK THAT FITS</p>
            <h2>
              A project to deliver.
              <br />
              Or a team to extend.
            </h2>
            <p className="lede">
              Choose the arrangement around the work. We discuss scope,
              availability, communication and commercial terms before starting.
            </p>
            <Link
              className="text-link"
              href="/services/dedicated-engineering-teams"
            >
              Explore dedicated & hourly development <ArrowRight size={17} />
            </Link>
          </div>
          <div className="engagement-options">
            {[
              [
                "Project delivery",
                "For a defined product, workflow or application. Shape a scope and milestones around your priorities.",
              ],
              [
                "Dedicated developers",
                "For ongoing engineering capacity. Work together in your repositories, tools and delivery process.",
              ],
              [
                "Hourly development",
                "For a focused backlog, enhancements or technical help. Agree priorities, estimates and reporting before work begins.",
              ],
            ].map(([t, d], i) => (
              <article key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Approach />
      <Enquiry location="home" />
    </>
  );
}
