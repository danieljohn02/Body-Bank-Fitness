"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: "var(--espresso)", padding: "96px 32px" }}>
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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,235,0.45)",
              marginBottom: 16,
            }}
          >
            Ready to Invest?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(48px, 6vw, 72px)",
              color: "var(--cream)",
              lineHeight: 1.05,
            }}
          >
            Your transformation
            <br />
            <em style={{ fontStyle: "italic" }}>starts with a call.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          style={{ maxWidth: 380 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(245,240,235,0.65)",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Your first session starts with a conversation. Tell us your goals —
            we&apos;ll build everything around them.
          </p>
          <a
            href="tel:+18453541150"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "var(--cognac)",
              color: "var(--warm-white)",
              fontSize: 18,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "18px 36px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            (845) 354-1150
          </a>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(245,240,235,0.35)",
              marginTop: 12,
              letterSpacing: "0.08em",
            }}
          >
            Call or text anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
