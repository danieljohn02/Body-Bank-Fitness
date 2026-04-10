"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team"     },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--espresso)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 32px 40px",
        }}
      >
        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Left — brand + contact */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Logo variant="light" size="sm" />
            </div>
            <div style={{ fontSize: 13, color: "rgba(245,240,235,0.65)", lineHeight: 1.9 }}>
              <p>16 Squadron Blvd</p>
              <p>New City, NY 10956</p>
              <a
                href="tel:+18453541150"
                style={{
                  color: "var(--cognac)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  display: "inline-block",
                  marginTop: 8,
                  letterSpacing: "0.04em",
                }}
              >
                (845) 354-1150
              </a>
            </div>
            {/* Social */}
            <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
              <a
                href="https://instagram.com/bodybankfitness"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(245,240,235,0.5)", fontSize: 12, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase" }}
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/bodybankfitness"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(245,240,235,0.5)", fontSize: 12, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase" }}
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Center — navigation */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,240,235,0.4)",
                marginBottom: 20,
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 13,
                    color: "rgba(245,240,235,0.65)",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,235,0.65)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — hours */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,240,235,0.4)",
                marginBottom: 20,
              }}
            >
              Hours
            </p>
            <div style={{ fontSize: 13, color: "rgba(245,240,235,0.65)", lineHeight: 2 }}>
              <p>Mon – Fri &nbsp; 4:30 AM – 8:00 PM</p>
              <p>Sat – Sun &nbsp; 7:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,235,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(245,240,235,0.35)" }}>
            &copy; {new Date().getFullYear()} Body Bank Fitness. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(245,240,235,0.35)" }}>
            Training Excellence Since 2005
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
