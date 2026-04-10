"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const trainers = [
  { name: "Matt Wachtel",    title: "Founder & Elite Trainer",       img: "https://storage1.snappages.site/uhj50azibi/assets/images/9454603_316x280_500.jpg" },
  { name: "Casey Weber",     title: "Elite Trainer",                  img: "https://storage1.snappages.site/uhj50azibi/assets/images/9453228_1867x2500_500.jpg" },
  { name: "Lisa Jankun",     title: "Elite Trainer & FST Specialist", img: "https://storage1.snappages.site/uhj50azibi/assets/images/9454483_2500x1666_500.jpg" },
  { name: "Stacey Vitro",    title: "Elite Trainer",                  img: "https://storage1.snappages.site/uhj50azibi/assets/images/9454618_1761x2500_500.jpg" },
  { name: "Joseph Carioscia",title: "Elite Trainer & Golf Fitness",   img: "https://storage1.snappages.site/uhj50azibi/assets/images/9454598_1743x2500_500.jpg" },
];

export default function TrainerTeaser() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 64, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
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
              The Team
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
              Elite professionals,
              <br />
              <em style={{ fontStyle: "italic" }}>not just trainers.</em>
            </h2>
          </div>
          <Link
            href="/team"
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
              whiteSpace: "nowrap",
            }}
          >
            Meet the Full Team &rarr;
          </Link>
        </motion.div>

        {/* Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
          className="trainer-grid"
        >
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            >
              <Link
                href="/team"
                className="trainer-card"
                style={{
                  display: "block",
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="trainer-img"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
                {/* Gradient scrim */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(44,36,23,0.85) 0%, transparent 55%)",
                  }}
                />
                {/* Cognac hover overlay */}
                <div
                  className="cognac-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(139,111,78,0.0)",
                    transition: "background-color 0.35s ease",
                  }}
                />
                {/* Name overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: 19,
                      color: "var(--cream)",
                      lineHeight: 1.15,
                      marginBottom: 4,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,240,235,0.65)",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .trainer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .trainer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
