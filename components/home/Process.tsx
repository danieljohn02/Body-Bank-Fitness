"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "Tell us your goals, history, and what's held you back. No obligation — just an honest conversation about what's possible.",
  },
  {
    number: "02",
    title: "Custom Program",
    desc: "We build a program specifically around you — combining training, recovery, nutrition, and medical services as needed.",
  },
  {
    number: "03",
    title: "Expert Execution",
    desc: "Work 1-on-1 with your assigned trainer. Every session is hands-on, intentional, and tracked against your goals.",
  },
  {
    number: "04",
    title: "Real Results",
    desc: "Progress you can measure. Clients who've trained with us for over 20 years — because results speak louder than marketing.",
  },
];

export default function Process() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 80 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cognac)",
              marginBottom: 12,
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(44px, 5vw, 64px)",
              color: "var(--espresso)",
              lineHeight: 1.05,
            }}
          >
            Simple process.
            <br />
            <em style={{ fontStyle: "italic" }}>Serious results.</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}
          className="process-grid"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 72,
                  color: "var(--cognac-dim)",
                  lineHeight: 1,
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.number}
              </p>
              <div
                style={{
                  width: 32,
                  height: 2,
                  backgroundColor: "var(--cognac)",
                  marginBottom: 20,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "var(--espresso)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          style={{ marginTop: 72, textAlign: "center" }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--muted)", marginBottom: 20 }}>
            Ready to get started? Step 1 is free.
          </p>
          <a
            href="tel:+18453541150"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "var(--espresso)",
              color: "var(--cream)",
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 36px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Call (845) 354-1150
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
