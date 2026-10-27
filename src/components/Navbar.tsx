"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link
          href="/"
          className="wordmark"
          aria-label="ARSTEG Solutions home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            <Image
              src="/images/logo.png"
              alt=""
              width={5621}
              height={2286}
              sizes="168px"
              priority
              className="brand-logo"
            />
          </span>
          ARSTEG<span className="wordmark-sub">SOLUTIONS</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {[
            ["/hire", "Hire talent"],
            ["/dedicated-teams", "Dedicated teams"],
            ["/services", "Services"],
            ["/portfolio", "Our work"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button nav-cta"
            onClick={() => setOpen(false)}
          >
            Discuss your needs <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
