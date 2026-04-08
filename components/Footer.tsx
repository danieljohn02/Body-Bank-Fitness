"use client";

import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team"     },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 32px 32px",
        }}
      >
        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Left */}
          <div>
            <p
              className="font-display"
              style={{
                fontSize: 20,
                letterSpacing: "0.12em",
                color: "var(--white)",
                marginBottom: 16,
              }}
            >
              BODY BANK FITNESS
            </p>
            <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.8 }}>
              16 Squadron Blvd<br />
              New City, NY 10956<br />
              <a
                href="tel:+18453541150"
                style={{ color: "var(--muted)", textDecoration: "none" }}
              >
                (845) 354-1150
              </a>
            </p>
          </div>

          {/* Center */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 16,
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 16,
              }}
            >
              Hours
            </p>
            <div
              style={{
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.9,
              }}
            >
              <p>Mon – Fri &nbsp;&nbsp;4:30 AM – 8:00 PM</p>
              <p>Sat – Sun &nbsp;&nbsp;7:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p style={{ fontSize: 12, color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Body Bank Fitness. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)" }}>
            16 Squadron Blvd, New City, NY 10956
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
