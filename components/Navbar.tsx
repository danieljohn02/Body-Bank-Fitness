"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team"     },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backgroundColor: scrolled ? "var(--black)" : "transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display"
            style={{
              fontSize: 22,
              letterSpacing: "0.15em",
              color: "var(--white)",
              textDecoration: "none",
            }}
          >
            BODY BANK FITNESS
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 40 }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                border: "1px solid var(--gold)",
                padding: "8px 20px",
                textDecoration: "none",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0A0A0A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
            >
              START TODAY
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 1,
                  backgroundColor: "var(--white)",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transform:
                    open && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : open && i === 2
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              backgroundColor: "var(--black)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 40px",
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display"
                  style={{
                    display: "block",
                    fontSize: 56,
                    color: "var(--white)",
                    textDecoration: "none",
                    marginBottom: 8,
                    letterSpacing: "0.05em",
                  }}
                >
                  {l.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ delay: links.length * 0.07, duration: 0.3 }}
              style={{ marginTop: 32 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "12px 28px",
                  textDecoration: "none",
                }}
              >
                START TODAY
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
