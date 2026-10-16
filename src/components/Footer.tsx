import Link from "next/link";
import Image from "next/image";
import { site, formattedAddress, mailHref, telHref } from "@/config/site";
import services from "@/data/services.json";
import Newsletter from "./Newsletter";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="wordmark" href="/" aria-label="ARSTEG Solutions home">
              <span className="brand-mark footer-brand-mark" aria-hidden="true">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={5621}
                  height={2286}
                  sizes="168px"
                  className="brand-logo"
                />
              </span>
              ARSTEG<span className="wordmark-sub">SOLUTIONS</span>
            </Link>
            <p>
              Thoughtful engineering.
              <br />
              Useful software.
            </p>
            <p className="footer-address">{formattedAddress()}</p>
          </div>
          <div>
            <h2>Explore</h2>
            {[
              ["/about", "About ARSTEG"],
              ["/products", "Our products"],
              ["/portfolio", "Solution examples"],
              ["/blog", "Insights"],
              ["/careers", "Careers"],
            ].map(([h, t]) => (
              <Link key={h} href={h}>
                {t}
              </Link>
            ))}
          </div>
          <div>
            <h2>What we build</h2>
            {[...services]
              .sort((a, b) => a.priority - b.priority)
              .slice(0, 4)
              .map((s) => (
                <Link key={s.id} href={"/services/" + s.slug}>
                  {s.title}
                </Link>
              ))}
            <Link href="/services">All services →</Link>
          </div>
          <div>
            <h2>Start a conversation</h2>
            <a href={mailHref}>{site.contact.email}</a>
            <a href={telHref}>{site.contact.phone}</a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <Link href="/contact">Project enquiry →</Link>
          </div>
        </div>
        <Newsletter />
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
            <span>Gurugram, India · Working across borders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
