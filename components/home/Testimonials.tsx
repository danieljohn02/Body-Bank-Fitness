"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote: "Matt Wachtel makes working out fun! Setting goals and helping you achieve them is his methodology.",
    name: "Doc Gooden",
    title: "New York Yankees",
  },
  {
    quote: "Matt Wachtel has taken personal training to a whole new level. He inspires his clients to do things they never thought possible.",
    name: "Amy Weiss-Citrome, MD FAAPM&R",
    title: "Physician & Client",
  },
  {
    quote: "Matt Wachtel has changed my life. Having been a client for almost two years, I have far exceeded any goals.",
    name: "Alton Hillis",
    title: "Client",
  },
  {
    quote: "I have been a professional athlete for over 22 years and I have worked with a lot of trainers.",
    name: "Jeff Nelson",
    title: "New York Yankees",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "var(--warm-white)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 72, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
        >
          <div>
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
              Client Stories
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
              Trusted by
              <br />
              <em style={{ fontStyle: "italic" }}>champions.</em>
            </h2>
          </div>
          {/* NY Yankees badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid var(--border)",
              padding: "10px 20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "var(--cognac)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Trainer to NY Yankees Athletes
            </span>
          </div>
        </motion.div>

        {/* Cards — staggered fade-in */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
              style={{
                backgroundColor: "var(--cream)",
                padding: "40px 36px",
                borderLeft: "3px solid var(--cognac)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: 22,
                  lineHeight: 1.6,
                  color: "var(--espresso)",
                  marginBottom: 28,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: 13,
                    color: "var(--espresso)",
                    letterSpacing: "0.04em",
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
