const items = [
  "Personal Training",
  "Acupuncture",
  "Chiropractic",
  "Nutrition",
  "Massage Therapy",
  "Fascial Stretch Therapy",
  "Golf Simulation",
  "Injury Rehabilitation",
  "Trigger Point Therapy",
  "Small Group Training",
];

const text = items.join("  ·  ") + "  ·  ";

export default function Marquee() {
  return (
    <div
      style={{
        backgroundColor: "var(--cream-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <div className="marquee-track" style={{ display: "inline-block" }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--cognac)",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
