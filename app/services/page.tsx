"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    name: "Personal Training",
    price: null,
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80",
    body: `Your program starts with a full physical assessment. From there, every workout is built around your specific starting point and target — whether that's weight loss, muscle building, sports performance, or recovery. Clients range from youth athletes to adults training for the first time.`,
  },
  {
    name: "Small Group Training",
    price: null,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    body: `Semi-private sessions for 2–4 people, youth group sessions, and team-based training are all available on request. We also offer corporate fitness programs for teams who want to build culture through shared physical challenge.`,
  },
  {
    name: "School Programs",
    price: null,
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80",
    body: `Body Bank runs after-school fitness programs on and off site, sponsors local teams, and works with young athletes looking to gain a real competitive edge. We believe developing strong habits early makes a lifelong difference.`,
  },
  {
    name: "Acupuncture",
    price: null,
    img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=900&q=80",
    body: `Our licensed acupuncturists use both traditional and modern techniques for pain management, stress reduction, and whole-body wellness. Treatments are tailored to your specific concerns and health history.`,
  },
  {
    name: "Chiropractic",
    price: "$65 per adjustment",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    body: `Our experienced chiropractor provides targeted adjustments and builds treatment plans around chronic pain, injury recovery, and postural correction.`,
  },
  {
    name: "Trigger Point Injection Therapy",
    price: null,
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80",
    body: `A licensed medical doctor on staff delivers injection therapy directly into trigger points — the tight muscle knots responsible for referred pain. Fast relief for stubborn, recurring pain patterns.`,
  },
  {
    name: "Fascial Stretch Therapy",
    price: "60 min $110  ·  90 min $155",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
    body: `FST is an assisted-stretching method that targets the fascia — the connective tissue surrounding muscles — rather than the muscles themselves. It relieves chronic pain, restores range of motion, and improves athletic output. Lisa Jankun is Level 3 FST certified, the first practitioner in Rockland County.`,
  },
  {
    name: "Injury Rehabilitation",
    price: null,
    img: "https://images.unsplash.com/photo-1609899537878-88d5ba429beb?w=900&q=80",
    body: `We work with clients returning from injury to rebuild strength, restore movement patterns, and progress safely back to full performance. Programs are coordinated with your existing care team when needed.`,
  },
  {
    name: "Nutrition Consulting",
    price: "$100 per session",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    body: `Our Certified Holistic Nutritionist builds personalized nutrition plans that complement your training. No generic macro splits — actual guidance based on your lifestyle, schedule, and goals.`,
  },
  {
    name: "Massage Therapy",
    price: "60 min $120  ·  90 min $160",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80",
    body: `Our licensed massage therapists specialize in sports and therapeutic massage. Whether you need recovery support between sessions or treatment for a specific issue, they work alongside your trainer's program.`,
  },
  {
    name: "Golf Simulation Studio",
    price: null,
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80",
    body: `Our state-of-the-art simulator is available for training and recreation. Joe Carioscia holds a NASM certification in golf-specific fitness and can build a conditioning program alongside your simulator sessions.`,
  },
];

export default function ServicesPage() {
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
          SERVICES
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
          SERVICES
        </motion.h1>
      </div>

      {/* Service sections */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.section
            key={s.name}
            id={s.name.toLowerCase().replace(/\s+/g, "-")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              borderTop: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: 480,
            }}
            className="service-section"
          >
            {/* Image */}
            <div
              style={{
                order: isEven ? 0 : 1,
                position: "relative",
                minHeight: 400,
                borderRight: isEven ? "1px solid var(--gold-dim)" : "none",
                borderLeft: isEven ? "none" : "1px solid var(--gold-dim)",
              }}
            >
              <Image
                src={s.img}
                alt={s.name}
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(10,10,10,0.35)",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                order: isEven ? 1 : 0,
                padding: "64px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="service-content"
            >
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  color: "var(--white)",
                  marginBottom: 20,
                  lineHeight: 1,
                }}
              >
                {s.name}
              </h2>
              {s.price && (
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid var(--gold)",
                    color: "var(--gold)",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    padding: "6px 16px",
                    marginBottom: 24,
                    alignSelf: "flex-start",
                  }}
                  className="font-display"
                >
                  {s.price}
                </span>
              )}
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "rgba(245,245,245,0.8)",
                  marginBottom: 32,
                }}
              >
                {s.body}
              </p>
              <a
                href="/contact"
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Learn More &rarr;
              </a>
            </div>
          </motion.section>
        );
      })}

      <style jsx>{`
        @media (max-width: 768px) {
          .service-section {
            grid-template-columns: 1fr !important;
          }
          .service-section > div {
            order: unset !important;
            border-right: none !important;
            border-left: none !important;
          }
          .service-content {
            padding: 40px 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
