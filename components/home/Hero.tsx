"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const headline = ["Your body is", "your greatest", "investment."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        backgroundColor: "var(--cream)",
        position: "relative",
        overflow: "hidden",
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
          position: "relative",
          zIndex: 2,
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
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--cognac)",
            marginBottom: 28,
          }}
        >
          Elite Training · Recovery · Wellness
        </motion.p>

        {/* Headline — tightened stagger */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(52px, 7vw, 88px)",
            lineHeight: 1.05,
            color: "var(--espresso)",
            marginBottom: 32,
          }}
        >
          {headline.map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: EASE }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
          style={{
            fontSize: 17,
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.75,
            maxWidth: 400,
            marginBottom: 44,
          }}
        >
          Elite personal training, recovery, and wellness — all under one roof in New City, NY.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}
        >
          <a
            href="tel:+18453541150"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "var(--cognac)",
              color: "var(--warm-white)",
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "15px 32px",
              textDecoration: "none",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
            }}
          >
            Call (845) 354-1150 →
          </a>
          <Link
            href="/#services"
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "var(--espresso)",
              fontSize: 13,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "15px 32px",
              border: "1px solid rgba(44,36,23,0.25)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--espresso)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(44,36,23,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
            }}
          >
            View Services
          </Link>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
        >
          <div style={{ height: 1, backgroundColor: "var(--border)", marginBottom: 20 }} />
          <p
            style={{
              fontSize: 12,
              fontFamily: "var(--font-body)",
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

      {/* RIGHT — stacked image panels */}
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}
        className="hero-right"
      >
        {/* Top image — gym floor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
          style={{ position: "relative", flex: "0 0 28%", overflow: "hidden", borderBottom: "2px solid var(--cognac)" }}
        >
          <Image
            src="/IMG_3109.jpg"
            alt="Body Bank Fitness gym floor"
            fill
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
            priority
            unoptimized
          />
          {/* Left-edge blend — wider, softer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--cream) 0%, rgba(245,240,235,0.55) 18%, rgba(245,240,235,0.1) 40%, transparent 62%)" }} />
          {/* Dark overlay for depth */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(44,36,23,0.18)" }} />
        </motion.div>

        {/* Middle image — trainer with client (action shot) */}
        <div style={{ position: "relative", flex: "0 0 42%", overflow: "hidden", borderBottom: "2px solid var(--cognac)" }}>
          <motion.div style={{ y: imgY, position: "absolute", inset: "-25% 0", height: "150%" }}>
            <Image
              src="/training-action.jpeg"
              alt="Body Bank Fitness personal training"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              unoptimized
            />
          </motion.div>
          {/* Left-edge blend — wider, softer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--cream) 0%, rgba(245,240,235,0.55) 18%, rgba(245,240,235,0.1) 38%, transparent 60%)" }} />
          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(44,36,23,0.15)" }} />
        </div>

        {/* Bottom image — facility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          style={{ position: "relative", flex: "1", overflow: "hidden" }}
        >
          <Image
            src="/IMG_3108.jpg"
            alt="Body Bank Fitness facility"
            fill
            style={{ objectFit: "cover", objectPosition: "center 65%" }}
            unoptimized
          />
          {/* Left-edge blend — wider, softer */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--cream) 0%, rgba(245,240,235,0.55) 18%, rgba(245,240,235,0.1) 38%, transparent 60%)" }} />
          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(44,36,23,0.18)" }} />

          {/* Pinned badge — bottom-left of bottom panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(253,250,247,0.75)",
                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
              }}
            >
              Elite Training · Recovery · Wellness
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            min-height: 75vh !important;
            flex-direction: column !important;
          }
          .hero-left {
            padding: 120px 20px 48px !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-right {
            min-height: 65vh !important;
          }
          .hero-left {
            padding: 100px 20px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
