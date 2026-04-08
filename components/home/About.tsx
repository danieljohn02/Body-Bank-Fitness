"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { number: "20+", label: "Years in Business" },
  { number: "5",   label: "Expert Trainers"   },
  { number: "10+", label: "Wellness Services"  },
];

export default function About() {
  return (
    <section style={{ backgroundColor: "var(--black)", padding: "128px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              lineHeight: 0.95,
              color: "var(--white)",
            }}
          >
            WE BUILD
            <br />
            BETTER
            <br />
            PEOPLE
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(245,245,245,0.8)",
              marginBottom: 48,
            }}
          >
            Body Bank Fitness is not a typical gym. We built a private training
            environment where licensed professionals &mdash; personal trainers,
            acupuncturists, chiropractors, massage therapists, and nutritionists
            &mdash; work together around your goals.
            <br />
            <br />
            No crowded floors. No membership you forget to cancel. Just expert
            hands-on coaching and care that actually gets you somewhere.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              borderTop: "1px solid var(--border)",
              paddingTop: 40,
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.1 }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 56,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
