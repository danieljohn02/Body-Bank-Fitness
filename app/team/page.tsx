"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const trainers = [
  {
    name:  "Matt Wachtel",
    title: "Founder & Elite Trainer",
    credentials: ["20+ Years Experience", "U.S. Army Veteran", "Founder Since 2005"],
    img:   "https://storage1.snappages.site/uhj50azibi/assets/images/9454603_316x280_500.jpg",
    bio:   `Matt has trained clients for over 20 years. He graduated at the top of his boot camp class at Fort Benning, Georgia before earning the rank of Sergeant in the U.S. Army. The discipline he developed in uniform became the foundation of how he trains and coaches today. He is one of Rockland County's most sought-after personal trainers — known for pushing clients further than they thought possible while keeping their safety and longevity front of mind.`,
  },
  {
    name:  "Casey Weber",
    title: "Elite Trainer",
    credentials: ["Marist College Graduate", "Youth & Adult Training", "Corrective Exercise"],
    img:   "https://storage1.snappages.site/uhj50azibi/assets/images/9453228_1867x2500_500.jpg",
    bio:   `Casey holds a degree from Marist College. A mother of three, she understands what it takes to build and maintain healthy habits inside a demanding schedule. She works with clients from youth athletes to older adults, building programs that are as sustainable as they are effective.`,
  },
  {
    name:  "Lisa Jankun",
    title: "Elite Trainer & FST Specialist",
    credentials: ["Level 3 FST Certified", "First in Rockland County", "FMS 1 & 2", "NSCA Certified", "25 Years Experience"],
    img:   "https://storage1.snappages.site/uhj50azibi/assets/images/9454483_2500x1666_500.jpg",
    bio:   `Lisa has nearly 25 years in the fitness industry, starting as a group fitness instructor before specializing in body mechanics and movement correction. She holds FMS certifications at Levels 1 & 2, and is a Level 3 Fascial Stretch Therapist — the first FST practitioner in Rockland County. She is also NSCA certified, spin and aqua certified, and Zumba certified.`,
  },
  {
    name:  "Stacey Vitro",
    title: "Elite Trainer",
    credentials: ["NASM Accredited", "Corrective Exercise Specialist", "Nutrition Coaching"],
    img:   "https://storage1.snappages.site/uhj50azibi/assets/images/9454618_1761x2500_500.jpg",
    bio:   `Stacey is NASM accredited and brings a personal perspective to fitness — she made her own weight loss and health journey before dedicating herself to helping others do the same. She focuses on corrective exercise and nutrition alongside traditional training, and believes no two people's paths to health should look the same.`,
  },
  {
    name:  "Joseph Carioscia",
    title: "Elite Trainer & Golf Fitness Specialist",
    credentials: ["NASM CPT", "Golf-Specific Fitness", "OCB Pro Natural Bodybuilder", "12+ Years Experience"],
    img:   "https://storage1.snappages.site/uhj50azibi/assets/images/9454598_1743x2500_500.jpg",
    bio:   `Joe is a NASM Certified Personal Trainer with additional certifications in Performance Enhancement, Corrective Exercise, and Golf-Specific Fitness. With 12+ years of experience, he has trained adolescents, seniors, beginners, bodybuilders, and professional athletes. He is an OCB Professional Natural Bodybuilder and qualified for the 2014 Spartan World Championships.`,
  },
];

export default function TeamPage() {
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
          Meet The Team
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
          Elite professionals,
          <br />
          <em style={{ fontStyle: "italic" }}>not just trainers.</em>
        </motion.h1>
      </div>

      {/* Trainer sections */}
      {trainers.map((t, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? "var(--cream)" : "var(--cream-2)";
        return (
          <motion.section
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              borderTop: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: 560,
              backgroundColor: bg,
            }}
            className="trainer-section"
          >
            {/* Image */}
            <div
              className="trainer-card"
              style={{
                order: isEven ? 0 : 1,
                position: "relative",
                minHeight: 500,
                overflow: "hidden",
              }}
            >
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="trainer-img"
                style={{ objectFit: "cover", objectPosition: "top" }}
                unoptimized
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isEven
                    ? "linear-gradient(to right, transparent 55%, var(--cream) 100%)"
                    : "linear-gradient(to left, transparent 55%, var(--cream-2) 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                order: isEven ? 1 : 0,
                padding: "80px 64px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="trainer-content"
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--cognac)",
                  marginBottom: 12,
                }}
              >
                {t.title}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(40px, 4.5vw, 60px)",
                  color: "var(--espresso)",
                  lineHeight: 1.0,
                  marginBottom: 24,
                }}
              >
                {t.name}
              </h2>

              {/* Credential badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {t.credentials.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                      color: "var(--cognac)",
                      border: "1px solid rgba(139,111,78,0.35)",
                      padding: "4px 10px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--muted)",
                }}
              >
                {t.bio}
              </p>
            </div>
          </motion.section>
        );
      })}

      {/* Bottom CTA */}
      <div
        style={{
          backgroundColor: "var(--espresso)",
          padding: "72px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "var(--cream)",
            marginBottom: 20,
          }}
        >
          Find the right trainer for you.
        </p>
        <a
          href="tel:+18453541150"
          style={{
            display: "inline-block",
            backgroundColor: "var(--cognac)",
            color: "var(--warm-white)",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.06em",
            padding: "14px 36px",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          Call (845) 354-1150
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .trainer-section {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .trainer-section > div {
            order: unset !important;
          }
          /* Photo: fixed square-ish height */
          .trainer-card {
            min-height: 280px !important;
          }
          .trainer-content {
            padding: 20px 24px 24px !important;
            justify-content: flex-start !important;
          }
          .trainer-content h2 {
            font-size: 28px !important;
            margin-bottom: 12px !important;
            line-height: 1.1 !important;
          }
          .trainer-content p {
            font-size: 13px !important;
            line-height: 1.20 !important;
          }
        }
      `}</style>
    </div>
  );
}
