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

export default function CTABanner() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section style={{ backgroundColor: "var(--espresso)", padding: "96px 32px 112px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "start",
        }}
        className="cta-grid"
      >
        {/* LEFT — Headline + phone */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,235,0.45)",
              marginBottom: 16,
            }}
          >
            Ready to Invest?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(44px, 5vw, 68px)",
              color: "var(--cream)",
              lineHeight: 1.05,
              marginBottom: 32,
            }}
          >
            Your transformation
            <br />
            <em style={{ fontStyle: "italic" }}>begins with a call</em>
            <br />
            <em style={{ fontStyle: "italic" }}>or inquiry.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(245,240,235,0.60)",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 400,
            }}
          >
            Your first session starts with a conversation. Tell us your goals —
            we&apos;ll build everything around them.
          </p>

          <a
            href="tel:+18453541150"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "var(--cognac)",
              color: "var(--warm-white)",
              fontSize: 18,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "18px 36px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            (845) 354-1150
          </a>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(245,240,235,0.30)",
              marginTop: 12,
              letterSpacing: "0.08em",
            }}
          >
            Call or text anytime
          </p>
        </motion.div>

        {/* RIGHT — Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,240,235,0.45)",
              marginBottom: 24,
            }}
          >
            Send an Inquiry
          </p>

          {sent ? (
            <div
              style={{
                padding: 48,
                border: "1px solid rgba(245,240,235,0.12)",
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 36, color: "var(--cognac)", marginBottom: 12 }}>
                Message sent.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(245,240,235,0.55)", lineHeight: 1.7 }}>
                We&apos;ll be in touch shortly to schedule your first session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Name",  name: "name",  type: "text",  placeholder: "Your full name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Phone", name: "phone", type: "tel",   placeholder: "(555) 000-0000" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--cognac)", marginBottom: 8 }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    required={name !== "phone"}
                    placeholder={placeholder}
                    style={{
                      fontFamily: "var(--font-body)",
                      backgroundColor: "rgba(245,240,235,0.07)",
                      border: "1px solid rgba(245,240,235,0.15)",
                      color: "var(--cream)",
                    }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--cognac)", marginBottom: 8 }}>
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "rgba(245,240,235,0.07)",
                    border: "1px solid rgba(245,240,235,0.15)",
                    color: form.service ? "var(--cream)" : "rgba(245,240,235,0.35)",
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ backgroundColor: "var(--espresso)", color: "var(--cream)" }}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--cognac)", marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your goals..."
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "rgba(245,240,235,0.07)",
                    border: "1px solid rgba(245,240,235,0.15)",
                    color: "var(--cream)",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "var(--cognac)",
                  color: "var(--warm-white)",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                  marginTop: 4,
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
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
