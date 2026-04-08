"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const words = ["INVEST", "IN", "YOURSELF"];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        backgroundColor: "var(--black)",
      }}
      className="hero-grid"
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 64px 80px 64px",
          maxWidth: 760,
        }}
        className="hero-left"
      >
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 24,
          }}
        >
          New City, New York
        </motion.p>

        {/* Headline */}
        <div
          className="font-display"
          style={{
            fontSize: "clamp(64px, 9vw, 120px)",
            lineHeight: 0.92,
            marginBottom: 32,
            overflow: "hidden",
          }}
        >
          {words.map((word, i) => (
            <div key={word} style={{ overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: EASE }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.65,
            maxWidth: 420,
            marginBottom: 40,
          }}
        >
          Personal training, acupuncture, chiropractic, nutrition, and recovery
          &mdash; all under one roof.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: EASE }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "var(--gold)",
              color: "#0A0A0A",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "14px 32px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Get Started
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "var(--white)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "14px 32px",
              border: "1px solid rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--white)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
            }}
          >
            View Services
          </Link>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: EASE }}
        >
          <div
            style={{
              height: 1,
              backgroundColor: "var(--border)",
              marginBottom: 20,
            }}
          />
          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Mon–Fri &nbsp;4:30AM–8PM &nbsp;·&nbsp; Sat–Sun &nbsp;7AM–5PM
          </p>
        </motion.div>
      </div>

      {/* RIGHT — image panel */}
      <div
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
        className="hero-right"
      >
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Body Bank Fitness training floor"
          fill
          style={{ objectFit: "cover" }}
          priority
          unoptimized
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, var(--black) 0%, transparent 40%)",
          }}
        />
        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            textAlign: "right",
          }}
        >
          <p
            className="font-display"
            style={{ fontSize: 36, color: "var(--white)", letterSpacing: "0.05em" }}
          >
            SINCE 2005
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Training Excellence
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            min-height: 50vh !important;
          }
          .hero-left {
            padding: 140px 32px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
