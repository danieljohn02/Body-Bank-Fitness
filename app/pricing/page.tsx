"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function Badge() {
  return (
    <span
      className="font-display"
      style={{
        fontSize: 10,
        letterSpacing: "0.1em",
        color: "var(--gold)",
        border: "1px solid var(--gold-dim)",
        padding: "2px 8px",
        marginLeft: 12,
        verticalAlign: "middle",
      }}
    >
      DISCOUNT
    </span>
  );
}

function PriceRow({
  name,
  price,
  sub,
  discount = false,
}: {
  name: string;
  price: string;
  sub?: string;
  discount?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        borderBottom: "1px solid var(--border)",
        gap: 16,
      }}
    >
      <div>
        <span style={{ fontSize: 15, color: "var(--white)" }}>
          {name}
          {discount && <Badge />}
        </span>
        {sub && (
          <p
            style={{
              fontSize: 11,
              color: "var(--muted)",
              marginTop: 4,
              letterSpacing: "0.05em",
            }}
          >
            {sub}
          </p>
        )}
      </div>
      <span
        className="font-display"
        style={{
          fontSize: 20,
          color: "var(--gold)",
          whiteSpace: "nowrap",
          letterSpacing: "0.05em",
        }}
      >
        {price}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ marginBottom: 8 }}
    >
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(36px, 4vw, 48px)",
          color: "var(--white)",
          marginBottom: 4,
        }}
      >
        {children}
      </h2>
      <div
        style={{ width: 48, height: 1, backgroundColor: "var(--gold)", marginBottom: 0 }}
      />
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "var(--black)", paddingTop: 72 }}>
      {/* Page header */}
      <div
        style={{
          position: "relative",
          padding: "96px 32px 72px",
          maxWidth: 1280,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <p
          className="font-display"
          style={{
            position: "absolute",
            top: "50%",
            left: 32,
            transform: "translateY(-50%)",
            fontSize: 240,
            color: "var(--white)",
            opacity: 0.04,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          PRICING
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display"
          style={{
            fontSize: "clamp(72px, 10vw, 96px)",
            color: "var(--white)",
            position: "relative",
          }}
        >
          PRICING
        </motion.h1>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px 128px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="pricing-grid"
      >
        {/* LEFT COLUMN */}
        <div>
          {/* Membership */}
          <div style={{ marginBottom: 80 }}>
            <SectionHeading>Membership</SectionHeading>
            <p
              style={{
                fontSize: 12,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 32,
                marginTop: 16,
              }}
            >
              Monthly Access
            </p>
            <PriceRow name="Monthly"          price="$100 / mo" />
            <PriceRow name="Active Military"   price="$50 / mo"  discount />
            <PriceRow name="Law Enforcement"   price="$50 / mo"  discount />
            <PriceRow name="Teachers"          price="$50 / mo"  discount />
            <PriceRow name="Family"            price="$90 / mo" />
            <PriceRow name="Corporate"         price="$70 / mo" />
            <PriceRow name="Student"           price="$50 / mo"  discount />
          </div>

          {/* Additional services */}
          <div>
            <SectionHeading>Additional Services</SectionHeading>
            <div style={{ marginTop: 32 }}>
              <PriceRow name="Chiropractic Adjustment"  price="$65"  />
              <PriceRow name="Nutrition Consultation"   price="$100" />
              <PriceRow name="FST — 60 min"             price="$110" />
              <PriceRow name="FST — 90 min"             price="$155" />
              <PriceRow name="Massage — 60 min"         price="$120" />
              <PriceRow name="Massage — 90 min"         price="$160" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <SectionHeading>Personal Training</SectionHeading>
          <p
            style={{
              fontSize: 12,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 32,
              marginTop: 16,
            }}
          >
            Session Packages
          </p>
          <PriceRow
            name="10-Session Package"
            price="$850–$1,000"
            sub="Trainer specific"
          />
          <PriceRow
            name="10-Session Buddy Pack"
            price="$1,000–$1,250"
            sub="For two people training together"
          />
          <PriceRow
            name="Single Session"
            price="$100–$120"
            sub="Trainer specific"
          />
          <PriceRow
            name="Virtual Session"
            price="$100–$120"
            sub="Remote coaching"
          />
          <PriceRow
            name="In-Home Session"
            price="$125–$150"
            sub="Available upon request"
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            style={{
              marginTop: 56,
              padding: 40,
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="font-display"
              style={{ fontSize: 28, color: "var(--white)", marginBottom: 12 }}
            >
              NOT SURE WHERE TO START?
            </p>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Reach out and we&apos;ll match you with the right program and trainer for
              your goals.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "var(--gold)",
                color: "#0A0A0A",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "12px 28px",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
