"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Facility() {
  return (
    <section style={{ backgroundColor: "var(--cream-2)", padding: "128px 0 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 48 }}
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
            The Facility
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
            Private. Intentional.
            <br />
            <em style={{ fontStyle: "italic" }}>Designed for results.</em>
          </h2>
        </motion.div>
      </div>

      {/* Image strip — full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="facility-grid"
        style={{ display: "grid", gridTemplateColumns: "50% 25% 25%", height: 500 }}
      >
        {/* Left — large */}
        <div className="facility-main" style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/IMG_3108.jpg"
            alt="Body Bank Fitness facility"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            unoptimized
          />
        </div>

        {/* Right top */}
        <div className="facility-top-right" style={{ position: "relative", overflow: "hidden", borderLeft: "3px solid var(--cream-2)" }}>
          <Image
            src="/IMG_3109.jpg"
            alt="Body Bank Fitness training floor"
            fill
            style={{ objectFit: "cover", objectPosition: "center 80%" }}
            unoptimized
          />
        </div>

        {/* Right bottom */}
        <div className="facility-bottom-right" style={{ position: "relative", overflow: "hidden", borderLeft: "3px solid var(--cream-2)" }}>
          <Image
            src="/IMG_3113.jpg"
            alt="Body Bank Fitness chiropractic treatment"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Equipment list */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 24px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 20px",
          justifyContent: "center",
        }}
      >
        {["TRX", "Kettlebells", "Row Machine", "Jacob's Ladder", "Sauna", "River Rock Showers", "Golf Simulator", "Private Massage Room"].map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>

    </section>
  );
}
