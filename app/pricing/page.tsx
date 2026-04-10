"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function PriceRow({
  name,
  price,
  sub,
  highlight = false,
}: {
  name: string;
  price: string;
  sub?: string;
  highlight?: boolean;
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
        backgroundColor: highlight ? "var(--cognac-dim)" : "transparent",
        marginLeft: highlight ? -16 : 0,
        marginRight: highlight ? -16 : 0,
        paddingLeft: highlight ? 16 : 0,
        paddingRight: highlight ? 16 : 0,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: highlight ? 500 : 300,
              color: "var(--espresso)",
            }}
          >
            {name}
          </span>
          {highlight && (
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                backgroundColor: "var(--cognac)",
                padding: "2px 8px",
              }}
            >
              Most Popular
            </span>
          )}
        </div>
        {sub && (
          <p
            style={{
              fontFamily: "var(--font-body)",
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
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: 22,
          color: highlight ? "var(--cognac)" : "var(--espresso)",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
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
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(32px, 3.5vw, 44px)",
          color: "var(--espresso)",
          marginBottom: 12,
          lineHeight: 1.05,
        }}
      >
        {children}
      </h2>
      <div style={{ width: 36, height: 2, backgroundColor: "var(--cognac)" }} />
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "var(--cream)", paddingTop: 72 }}>
      {/* Page header */}
      <div
        style={{
          padding: "96px 32px 72px",
          maxWidth: 1280,
          margin: "0 auto",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cognac)",
            marginBottom: 16,
          }}
        >
          Transparent Pricing
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(56px, 8vw, 96px)",
            color: "var(--espresso)",
            lineHeight: 1.0,
          }}
        >
          Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 300,
            color: "var(--muted)",
            marginTop: 16,
            lineHeight: 1.7,
          }}
        >
          Questions about pricing?{" "}
          <a
            href="tel:+18453541150"
            style={{ color: "var(--cognac)", fontWeight: 500, textDecoration: "none" }}
          >
            Call (845) 354-1150
          </a>{" "}
          — custom packages available.
        </motion.p>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px 128px",
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
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 32,
                marginTop: 20,
              }}
            >
              Monthly Access
            </p>
            <PriceRow name="Monthly"          price="$100 / mo" />
            <PriceRow name="Active Military"   price="$50 / mo" sub="Discount for those who serve" />
            <PriceRow name="Law Enforcement"   price="$50 / mo" sub="Discount for those who serve" />
            <PriceRow name="Teachers"          price="$50 / mo" sub="Educator discount" />
            <PriceRow name="Student"           price="$50 / mo" sub="Student discount" />
            <PriceRow name="Family"            price="$90 / mo" />
            <PriceRow name="Corporate"         price="$70 / mo" />
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
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 32,
              marginTop: 20,
            }}
          >
            Session Packages
          </p>
          <PriceRow
            name="10-Session Package"
            price="$850–$1,000"
            sub="Trainer specific — best value"
            highlight
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

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            style={{
              marginTop: 56,
              padding: 40,
              backgroundColor: "var(--espresso)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 28,
                color: "var(--cream)",
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              Not sure where to start?
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 300,
                color: "rgba(245,240,235,0.65)",
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              We&apos;ll match you with the right program and trainer for your goals — free consultation.
            </p>
            <a
              href="tel:+18453541150"
              style={{
                display: "inline-block",
                backgroundColor: "var(--cognac)",
                color: "var(--warm-white)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "12px 28px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Call (845) 354-1150
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
