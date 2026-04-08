"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  { name: "Personal Training",          desc: "Programs built for your exact goals"              },
  { name: "Small Group Training",        desc: "Shared sessions, individual results"              },
  { name: "School Programs",             desc: "Youth & team development"                         },
  { name: "Acupuncture",                 desc: "Licensed practitioners on staff"                  },
  { name: "Chiropractic",                desc: "Adjustments & treatment plans"                    },
  { name: "Trigger Point Therapy",       desc: "MD-administered injection therapy"                },
  { name: "Fascial Stretch Therapy",     desc: "Level 3 certified — first in Rockland County"    },
  { name: "Injury Rehabilitation",       desc: "Return to performance"                            },
  { name: "Nutrition Consulting",        desc: "Certified holistic nutritionist on site"          },
  { name: "Golf Simulation",             desc: "State-of-the-art simulator studio"                },
];

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: "var(--black)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 64 }}
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(48px, 5vw, 64px)", color: "var(--white)", marginBottom: 12 }}
          >
            WHAT WE OFFER
          </h2>
          <p
            style={{
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            A Complete Approach to Health &amp; Performance
          </p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 5) * 0.07 }}
            >
              <Link
                href="/services"
                style={{
                  display: "block",
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  padding: "32px 24px",
                  textDecoration: "none",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--gold-dim)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Gold top line */}
                <div
                  style={{
                    width: 40,
                    height: 1,
                    backgroundColor: "var(--gold)",
                    marginBottom: 20,
                  }}
                />
                <p
                  className="font-display"
                  style={{
                    fontSize: 22,
                    color: "var(--white)",
                    marginBottom: 8,
                    lineHeight: 1.1,
                  }}
                >
                  {s.name}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
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
