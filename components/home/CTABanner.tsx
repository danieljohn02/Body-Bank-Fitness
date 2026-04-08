"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: "var(--gold)", padding: "96px 32px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display"
          style={{
            fontSize: "clamp(56px, 7vw, 80px)",
            color: "#0A0A0A",
            lineHeight: 0.95,
          }}
        >
          READY TO START?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          style={{ maxWidth: 420 }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(10,10,10,0.75)",
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            Your first session starts with a conversation. Tell us your goals.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#0A0A0A",
              color: "var(--gold)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "14px 32px",
              textDecoration: "none",
              transition: "background-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#0A0A0A";
            }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
