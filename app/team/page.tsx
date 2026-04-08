"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const trainers = [
  {
    name:  "Matt Wachtel",
    title: "Founder & Elite Trainer",
    img:   "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    bio:   `Matt has trained clients for over 20 years. He graduated at the top of his boot camp class at Fort Benning, Georgia before earning the rank of Sergeant in the U.S. Army. The discipline he developed in uniform became the foundation of how he trains and coaches today. He is one of Rockland County's most sought-after personal trainers — known for pushing clients further than they thought possible while keeping their safety and longevity front of mind.`,
  },
  {
    name:  "Casey Weber",
    title: "Elite Trainer",
    img:   "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    bio:   `Casey holds a degree from Marist College. A mother of three, she understands what it takes to build and maintain healthy habits inside a demanding schedule. She works with clients from youth athletes to older adults, building programs that are as sustainable as they are effective.`,
  },
  {
    name:  "Lisa Jankun",
    title: "Elite Trainer / Fascial Stretch Therapist",
    img:   "https://images.unsplash.com/photo-1609899537878-88d5ba429beb?w=800&q=80",
    bio:   `Lisa has nearly 25 years in the fitness industry, starting as a group fitness instructor before specializing in body mechanics and movement correction. She holds FMS certifications at Levels 1 & 2, and is a Level 3 Fascial Stretch Therapist — the first FST practitioner in Rockland County. She is also NSCA certified, spin and aqua certified, and Zumba certified.`,
  },
  {
    name:  "Stacey Vitro",
    title: "Elite Trainer",
    img:   "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
    bio:   `Stacey is NASM accredited and brings a personal perspective to fitness — she made her own weight loss and health journey before dedicating herself to helping others do the same. She focuses on corrective exercise and nutrition alongside traditional training, and believes no two people's paths to health should look the same.`,
  },
  {
    name:  "Joseph Carioscia",
    title: "Elite Trainer & Golf Fitness Specialist",
    img:   "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    bio:   `Joe is a NASM Certified Personal Trainer with additional certifications in Performance Enhancement, Corrective Exercise, and Golf-Specific Fitness. With 12+ years of experience, he has trained adolescents, seniors, beginners, bodybuilders, and professional athletes. He is an OCB Professional Natural Bodybuilder and qualified for the 2014 Spartan World Championships.`,
  },
];

export default function TeamPage() {
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
          TEAM
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
          THE TEAM
        </motion.h1>
      </div>

      {/* Trainer sections */}
      {trainers.map((t, i) => {
        const isEven = i % 2 === 0;
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
                    ? "linear-gradient(to right, transparent 60%, var(--black) 100%)"
                    : "linear-gradient(to left, transparent 60%, var(--black) 100%)",
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
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 16,
                }}
              >
                {t.title}
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(48px, 5vw, 64px)",
                  color: "var(--white)",
                  lineHeight: 0.95,
                  marginBottom: 32,
                }}
              >
                {t.name}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "rgba(245,245,245,0.75)",
                }}
              >
                {t.bio}
              </p>
            </div>
          </motion.section>
        );
      })}

      <style jsx>{`
        @media (max-width: 768px) {
          .trainer-section {
            grid-template-columns: 1fr !important;
          }
          .trainer-section > div {
            order: unset !important;
          }
          .trainer-content {
            padding: 48px 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
