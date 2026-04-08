"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const trainers = [
  {
    name:  "Matt Wachtel",
    title: "Founder & Elite Trainer",
    img:   "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    name:  "Casey Weber",
    title: "Elite Trainer",
    img:   "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
  {
    name:  "Lisa Jankun",
    title: "Elite Trainer & FST Specialist",
    img:   "https://images.unsplash.com/photo-1609899537878-88d5ba429beb?w=600&q=80",
  },
  {
    name:  "Stacey Vitro",
    title: "Elite Trainer",
    img:   "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80",
  },
  {
    name:  "Joseph Carioscia",
    title: "Elite Trainer & Golf Fitness",
    img:   "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
];

export default function TrainerTeaser() {
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
            style={{ fontSize: "clamp(48px, 5vw, 64px)", color: "var(--white)" }}
          >
            THE TEAM
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            overflowX: "auto",
          }}
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
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
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
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)",
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
                    className="font-display"
                    style={{
                      fontSize: 20,
                      color: "var(--white)",
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: 48, textAlign: "center" }}
        >
          <Link
            href="/team"
            style={{
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              borderBottom: "1px solid var(--gold-dim)",
              paddingBottom: 2,
            }}
          >
            Meet the Full Team &rarr;
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .trainer-grid {
            grid-template-columns: repeat(3, minmax(200px, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .trainer-grid {
            grid-template-columns: repeat(2, minmax(160px, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
