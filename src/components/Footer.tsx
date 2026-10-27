import Link from "next/link";
import Image from "next/image";
import { site, formattedAddress, mailHref, telHref } from "@/config/site";
import { hireRoles } from "@/data/hire";
import Newsletter from "./Newsletter";

const footerRoles = [
  "net-developers",
  "python-developers",
  "react-developers",
  "full-stack-developers",
  "ai-developers",
]
  .map((slug) => hireRoles.find((r) => r.slug === slug))
  .filter((r): r is (typeof hireRoles)[number] => Boolean(r));
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
            <h2>Hire talent</h2>
            {footerRoles.map((r) => (
              <Link key={r.slug} href={"/hire/" + r.slug}>
                Hire {r.name.toLowerCase()}
              </Link>
            ))}
            <Link href="/hire">Browse all roles →</Link>
            <Link href="/dedicated-teams">Dedicated teams →</Link>
          </div>
          <div>
            <h2>Explore</h2>
            {[
              ["/services", "Software services"],
              ["/portfolio", "Our work"],
              ["/products", "Our products"],
              ["/about", "About ARSTEG"],
              ["/blog", "Insights"],
              ["/careers", "Careers"],
            ].map(([h, t]) => (
              <Link key={h} href={h}>
                {t}
              </Link>
            ))}
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
            <Link href="/contact">Discuss your needs →</Link>
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
