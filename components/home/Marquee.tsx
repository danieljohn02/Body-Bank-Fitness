const items = [
  "PERSONAL TRAINING",
  "ACUPUNCTURE",
  "CHIROPRACTIC",
  "NUTRITION",
  "MASSAGE THERAPY",
  "FASCIAL STRETCH THERAPY",
  "GOLF SIMULATION",
  "INJURY REHABILITATION",
  "TRIGGER POINT THERAPY",
  "SMALL GROUP TRAINING",
];

const text = items.join("  ·  ") + "  ·  ";

export default function Marquee() {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "inline-block" }}
      >
        <span
          className="font-display"
          style={{
            fontSize: 14,
            letterSpacing: "0.15em",
            color: "var(--gold)",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
