"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const links = [
  { label: "Home",     href: "/"         },
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
          backgroundColor: scrolled ? "rgba(245,240,235,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
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
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Logo variant="dark" size="sm" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  fontSize: 12,
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--espresso)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}

          </div>

          {/* Hamburger — mobile only */}
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
                  backgroundColor: "var(--espresso)",
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
              backgroundColor: "var(--cream)",
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
                  style={{
                    display: "block",
                    fontSize: 44,
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    color: "var(--espresso)",
                    textDecoration: "none",
                    marginBottom: 8,
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ delay: links.length * 0.07, duration: 0.3 }}
              style={{ marginTop: 40 }}
            >
              <a
                href="tel:+18453541150"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: "var(--warm-white)",
                  backgroundColor: "var(--cognac)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                }}
              >
                Call (845) 354-1150
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
