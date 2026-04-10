"use client";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const primary = variant === "dark" ? "#2C2417" : "#F5F0EB";
  const cognac = "#8B6F4E";
  const cognacFaint = variant === "dark" ? "rgba(139,111,78,0.25)" : "rgba(245,240,235,0.2)";

  const scales = { sm: 0.72, md: 1, lg: 1.5 };
  const s = scales[size];

  const w = 220 * s;
  const h = 72 * s;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 220 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Body Bank Fitness"
    >
      {/* Circle seal — nod to the original wheel logo, refined */}
      <circle cx="36" cy="36" r="28" stroke={cognac} strokeWidth="1" fill="none" />
      <circle cx="36" cy="36" r="23" stroke={cognacFaint} strokeWidth="0.5" fill="none" />

      {/* BB monogram inside circle */}
      <text
        x="36"
        y="42"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="22"
        letterSpacing="0.05em"
        fill={primary}
      >
        BB
      </text>

      {/* Small dot accents at cardinal points */}
      <circle cx="36" cy="7"  r="1.5" fill={cognac} />
      <circle cx="36" cy="65" r="1.5" fill={cognac} />
      <circle cx="7"  cy="36" r="1.5" fill={cognac} />
      <circle cx="65" cy="36" r="1.5" fill={cognac} />

      {/* Wordmark — right of seal */}
      {/* BODY BANK */}
      <text
        x="78"
        y="30"
        fontFamily="var(--font-display), 'Cormorant Garamond', serif"
        fontWeight="600"
        fontSize="20"
        letterSpacing="0.18em"
        fill={primary}
      >
        BODY BANK
      </text>

      {/* Thin divider */}
      <line x1="78" y1="37" x2="214" y2="37" stroke={cognac} strokeWidth="0.75" opacity="0.45" />

      {/* FITNESS */}
      <text
        x="78"
        y="51"
        fontFamily="var(--font-body), 'Inter', sans-serif"
        fontWeight="300"
        fontSize="10"
        letterSpacing="0.42em"
        fill={cognac}
      >
        FITNESS
      </text>

      {/* Est. year — subtle */}
      <text
        x="196"
        y="62"
        fontFamily="var(--font-body), 'Inter', sans-serif"
        fontWeight="300"
        fontSize="7"
        letterSpacing="0.1em"
        fill={cognac}
        opacity="0.55"
        textAnchor="end"
      >
        EST. 2005
      </text>
    </svg>
  );
}
