"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  { name: "Personal Training",      desc: "Programs built for your exact goals",                 price: "From $100/session" },
  { name: "Small Group Training",   desc: "Shared sessions, individual results",                  price: "Ask about pricing" },
  { name: "Acupuncture",            desc: "Licensed practitioners on staff",                      price: "Ask about pricing" },
  { name: "Chiropractic",           desc: "Adjustments & treatment plans",                        price: "From $65/adjustment" },
  { name: "Fascial Stretch Therapy",desc: "Level 3 certified — first in Rockland County",         price: "60 min $110" },
  { name: "Massage Therapy",        desc: "Recovery and deep tissue treatment",                   price: "60 min $120" },
  { name: "Nutrition Consulting",   desc: "Certified holistic nutritionist on site",              price: "$100/session" },
  { name: "Injury Rehabilitation",  desc: "Return to performance",                                price: "Ask about pricing" },
  { name: "Trigger Point Therapy",  desc: "MD-administered injection therapy",                    price: "Ask about pricing" },
  { name: "Golf Simulation",        desc: "State-of-the-art simulator studio",                    price: "Ask about pricing" },
];

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: "var(--cream-2)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 64 }}
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
            What We Offer
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
            A complete approach
            <br />
            <em style={{ fontStyle: "italic" }}>to health &amp; performance.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 1,
            backgroundColor: "var(--border)",
          }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 5) * 0.08 }}
            >
              <Link
                href="/services"
                style={{
                  display: "block",
                  backgroundColor: "var(--warm-white)",
                  padding: "32px 24px",
                  textDecoration: "none",
                  transition: "background-color 0.25s ease, transform 0.25s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "var(--cream)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "var(--warm-white)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Cognac top accent */}
                <div
                  style={{
                    width: 36,
                    height: 2,
                    backgroundColor: "var(--cognac)",
                    marginBottom: 20,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: 20,
                    color: "var(--espresso)",
                    marginBottom: 8,
                    lineHeight: 1.15,
                  }}
                >
                  {s.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {s.desc}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "var(--cognac)",
                  }}
                >
                  {s.price}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: 48, textAlign: "center" }}
        >
          <Link
            href="/services"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--cognac)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(139,111,78,0.4)",
              paddingBottom: 2,
            }}
          >
            View All Services &rarr;
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
