"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { target: 20, suffix: "+", label: "Years in Business" },
  { target: 5,  suffix: "",  label: "Elite Trainers"    },
  { target: 11, suffix: "",  label: "Wellness Services" },
];

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <span>{count}{suffix}</span>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "128px 0" }}>
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
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cognac)",
              marginBottom: 20,
            }}
          >
            Our Philosophy
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(44px, 5.5vw, 68px)",
              lineHeight: 1.05,
              color: "var(--espresso)",
              marginBottom: 32,
            }}
          >
            Not a gym.
            <br />
            <em style={{ fontStyle: "italic" }}>A practice.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 22,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--cognac)",
              borderLeft: "2px solid var(--cognac)",
              paddingLeft: 24,
            }}
          >
            "Founded by Matt Wachtel — Army veteran, 20-year training professional — Body Bank was built on one principle: real results require real expertise."
          </p>
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
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: "var(--muted)",
              marginBottom: 52,
            }}
          >
            Body Bank Fitness is not a typical gym. We built a private training
            environment where licensed professionals — personal trainers,
            acupuncturists, chiropractors, massage therapists, and nutritionists
            — work together around your goals.
            <br /><br />
            No crowded floors. No membership you forget to cancel. Just expert
            hands-on coaching and care that actually gets you somewhere.
          </p>

          {/* Stats with count-up */}
          <div
            ref={statsRef}
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
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontSize: 56,
                    color: "var(--espresso)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  <CountUp target={s.target} suffix={s.suffix} trigger={inView} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
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
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
