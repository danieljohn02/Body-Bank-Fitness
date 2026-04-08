"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Facility() {
  return (
    <section style={{ backgroundColor: "var(--black)", padding: "128px 0 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 48 }}
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(48px, 5vw, 64px)", color: "var(--white)" }}
          >
            THE FACILITY
          </h2>
        </motion.div>
      </div>

      {/* Image strip — full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{
          display: "grid",
          gridTemplateColumns: "50% 25% 25%",
          height: 500,
        }}
        className="facility-grid"
      >
        {/* Left large */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            alt="Training floor"
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        {/* Right top */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderLeft: "2px solid var(--black)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80"
            alt="Gym equipment"
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        {/* Right bottom */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderLeft: "2px solid var(--black)",
            borderTop: "2px solid var(--black)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80"
            alt="Fitness studio"
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Equipment list */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "var(--muted)",
          letterSpacing: "0.1em",
          marginTop: 32,
          padding: "0 32px",
        }}
      >
        TRX &nbsp;·&nbsp; Kettlebells &nbsp;·&nbsp; Row Machine &nbsp;·&nbsp; Jacob&apos;s Ladder &nbsp;·&nbsp; Sauna &nbsp;·&nbsp; River Rock Showers &nbsp;·&nbsp; Golf Simulator &nbsp;·&nbsp; Private Massage Room
      </motion.p>

      <style jsx>{`
        @media (max-width: 768px) {
          .facility-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .facility-grid > div {
            height: 280px;
            border-left: none !important;
            border-top: 2px solid var(--black);
          }
          .facility-grid > div:first-child {
            border-top: none !important;
          }
        }
      `}</style>
    </section>
  );
}
