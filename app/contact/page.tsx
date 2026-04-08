"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  "Personal Training",
  "Small Group Training",
  "School Programs",
  "Acupuncture",
  "Chiropractic",
  "Trigger Point Injection Therapy",
  "Fascial Stretch Therapy",
  "Injury Rehabilitation",
  "Nutrition Consulting",
  "Massage Therapy",
  "Golf Simulation Studio",
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: 8,
      }}
    >
      {children}
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          CONTACT
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
          CONTACT
        </motion.h1>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px 128px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* LEFT — Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(245,245,245,0.75)",
              marginBottom: 56,
            }}
          >
            Your first session starts with a conversation. Tell us your goals,
            your schedule, and what you&apos;re dealing with — we&apos;ll find the right
            trainer and program for you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                Location
              </p>
              <p style={{ fontSize: 15, color: "var(--white)", lineHeight: 1.7 }}>
                16 Squadron Blvd<br />
                New City, NY 10956
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                Phone
              </p>
              <a
                href="tel:+18453541150"
                style={{ fontSize: 15, color: "var(--white)", textDecoration: "none" }}
              >
                (845) 354-1150
              </a>
            </div>
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                Hours
              </p>
              <p style={{ fontSize: 15, color: "var(--white)", lineHeight: 1.7 }}>
                Mon – Fri &nbsp;&nbsp;4:30 AM – 8:00 PM<br />
                Sat – Sun &nbsp;&nbsp;7:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        >
          {sent ? (
            <div
              style={{
                padding: 48,
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: 36, color: "var(--gold)", marginBottom: 12 }}
              >
                MESSAGE SENT
              </p>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
                We&apos;ll be in touch shortly to schedule your first session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <Label>Name</Label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label>Email</Label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <Label>Phone</Label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <Label>Service of Interest</Label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Message</Label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="font-display"
                style={{
                  width: "100%",
                  backgroundColor: "var(--gold)",
                  color: "#0A0A0A",
                  fontSize: 18,
                  letterSpacing: "0.12em",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
