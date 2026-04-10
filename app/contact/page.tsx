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
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--cognac)",
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
          Get In Touch
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
          Contact Us
        </motion.h1>

        {/* Phone-first CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            marginTop: 32,
            padding: "20px 32px",
            backgroundColor: "var(--espresso)",
          }}
        >
          <a
            href="tel:+18453541150"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 32,
              color: "var(--cream)",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            (845) 354-1150
          </a>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(245,240,235,0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Call or text anytime
          </span>
        </motion.div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 32px 128px",
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
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: "var(--muted)",
              marginBottom: 56,
            }}
          >
            Your first session starts with a conversation. Tell us your goals,
            your schedule, and what you&apos;re dealing with — we&apos;ll find the right
            trainer and program for you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--cognac)",
                  marginBottom: 10,
                }}
              >
                Location
              </p>
              <a
                href="https://maps.google.com/?q=16+Squadron+Blvd+New+City+NY+10956"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--espresso)",
                  lineHeight: 1.7,
                  textDecoration: "none",
                  display: "block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cognac)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--espresso)")}
              >
                16 Squadron Blvd<br />
                New City, NY 10956
              </a>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--cognac)",
                  marginBottom: 10,
                }}
              >
                Phone
              </p>
              <a
                href="tel:+18453541150"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: 28,
                  color: "var(--espresso)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cognac)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--espresso)")}
              >
                (845) 354-1150
              </a>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--cognac)",
                  marginBottom: 10,
                }}
              >
                Hours
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--espresso)",
                  lineHeight: 1.85,
                }}
              >
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
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--muted)",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Prefer to write? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>

          {sent ? (
            <div
              style={{
                padding: 48,
                backgroundColor: "var(--warm-white)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 36,
                  color: "var(--cognac)",
                  marginBottom: 12,
                }}
              >
                Message sent.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                We&apos;ll be in touch shortly to schedule your first session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <Label>Name</Label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  style={{ fontFamily: "var(--font-body)" }}
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
                  style={{ fontFamily: "var(--font-body)" }}
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
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <Label>Service of Interest</Label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ fontFamily: "var(--font-body)" }}
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
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "var(--espresso)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                Send Message
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
