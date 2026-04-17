"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Branches", href: "/branches" },
  { label: "Gallery", href: "/gallery" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(255,255,255,0.97)",
          boxShadow: scrolled ? "0 2px 20px rgba(10,22,40,0.10)" : "none",
          borderBottom: scrolled ? "none" : "1px solid #E5E0D8",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={closeMenu}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/images/logo/logo.png"
              alt="Srichand Classes"
              style={{ height: 46, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── Desktop Links ── */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
            className="nav-desktop"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: isActive(link.href) ? "var(--gold)" : "var(--navy)",
                    padding: "6px 12px",
                    borderRadius: 4,
                    display: "block",
                    transition: "color 0.2s ease",
                    borderBottom: isActive(link.href)
                      ? "2px solid var(--gold)"
                      : "2px solid transparent",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Enquire Now CTA ── */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn btn-primary btn-sm nav-cta"
          >
            Enquire Now
          </Link>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              borderRadius: 6,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "var(--navy)",
                  borderRadius: 2,
                  transition: "var(--transition)",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          className="nav-drawer"
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "520px" : "0",
            transition: "max-height 0.35s ease",
            background: "var(--white)",
            borderTop: menuOpen ? "1px solid var(--border)" : "none",
          }}
        >
          <ul
            style={{ padding: "12px 24px 20px", listStyle: "none", margin: 0 }}
          >
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    display: "block",
                    padding: "13px 0",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: isActive(link.href) ? "var(--gold)" : "var(--navy)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: 16 }}>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Spacer so content doesn't hide under fixed navbar ── */}
      <div style={{ height: 68 }} />

      {/* ── Responsive styles ── */}
      <style>{`
        .nav-link:hover { color: var(--gold) !important; }

        @media (max-width: 900px) {
          .nav-desktop  { display: none !important; }
          .nav-cta      { display: none !important; }
          .nav-hamburger{ display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
}
