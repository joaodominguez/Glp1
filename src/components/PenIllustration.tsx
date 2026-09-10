import type { MedicationMechanism } from "@/content/medications";

type Tone = "teal" | "slate" | "sand";

function toneForMechanism(mechanism: MedicationMechanism): Tone {
  if (mechanism === "gip-glp1") return "teal";
  if (mechanism === "glp1") return "slate";
  return "sand";
}

function toneVars(tone: Tone) {
  if (tone === "slate") {
    return {
      accent: "#516574",
      accentDeep: "#3d4f5c",
      body: "#f4f7f9",
      bodyEdge: "#d5dee5",
      backdrop: ["#eef2f5", "#d9e2e8"],
      ink: "#0e1a24",
    };
  }
  if (tone === "sand") {
    return {
      accent: "#8e765d",
      accentDeep: "#6f5a44",
      body: "#fbf8f3",
      bodyEdge: "#e4d9c8",
      backdrop: ["#f4efe8", "#e5ddd1"],
      ink: "#241a12",
    };
  }
  return {
    accent: "#0a5c63",
    accentDeep: "#084a50",
    body: "#f7fbfb",
    bodyEdge: "#cfe0e2",
    backdrop: ["#eef4f5", "#d9e6e8"],
    ink: "#0e1a24",
  };
}

function brandFontSize(name: string) {
  if (name.length > 12) return 22;
  if (name.length > 9) return 26;
  return 30;
}

export function PenIllustration({
  mechanism,
  brandName,
  substance,
  title,
  className,
}: {
  mechanism: MedicationMechanism;
  brandName: string;
  substance?: string;
  title?: string;
  className?: string;
  priority?: boolean;
}) {
  const tone = toneVars(toneForMechanism(mechanism));
  const uid = brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const alt =
    title ??
    `Ilustração editorial da caneta de ${brandName}${
      substance ? ` (${substance})` : ""
    }`;
  const nameSize = brandFontSize(brandName);

  return (
    <div className={`pen-shot ${className ?? ""}`} data-tone={toneForMechanism(mechanism)}>
      <svg
        viewBox="0 0 800 600"
        role="img"
        aria-label={alt}
        className="pen-shot-svg"
      >
        <title>{alt}</title>
        <defs>
          <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={tone.backdrop[0]} />
            <stop offset="100%" stopColor={tone.backdrop[1]} />
          </linearGradient>
          <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor={tone.body} />
            <stop offset="100%" stopColor={tone.bodyEdge} />
          </linearGradient>
          <linearGradient id={`metal-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5ced4" />
            <stop offset="100%" stopColor="#8a97a1" />
          </linearGradient>
          <filter id={`shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0e1a24" floodOpacity="0.18" />
          </filter>
        </defs>

        <rect width="800" height="600" rx="28" fill={`url(#bg-${uid})`} />
        <ellipse cx="420" cy="480" rx="220" ry="28" fill="#0e1a24" opacity="0.07" />

        <g transform="translate(120 318) rotate(-34)" filter={`url(#shadow-${uid})`}>
          {/* needle hub / tip */}
          <rect x="0" y="28" width="52" height="28" rx="8" fill="#e8eef1" stroke={tone.bodyEdge} />
          <rect x="44" y="22" width="70" height="40" rx="12" fill="#dce6ea" opacity="0.95" />
          <rect x="52" y="30" width="48" height="24" rx="6" fill="#f7fafb" opacity="0.55" />

          {/* clear reservoir */}
          <rect x="108" y="16" width="110" height="52" rx="14" fill="#eef5f7" stroke={tone.bodyEdge} />
          <rect x="120" y="28" width="78" height="8" rx="4" fill={tone.accent} opacity="0.35" />
          <rect x="126" y="42" width="54" height="6" rx="3" fill={tone.ink} opacity="0.12" />

          {/* white barrel with printed name */}
          <rect x="210" y="8" width="280" height="68" rx="18" fill={`url(#body-${uid})`} stroke={tone.bodyEdge} />
          <rect x="228" y="20" width="200" height="44" rx="10" fill="#ffffff" opacity="0.92" />
          <text
            x="328"
            y={substance ? 40 : 48}
            textAnchor="middle"
            fontFamily="Outfit, system-ui, sans-serif"
            fontWeight="700"
            fontSize={nameSize}
            letterSpacing="-0.04em"
            fill={tone.ink}
          >
            {brandName}
          </text>
          {substance ? (
            <text
              x="328"
              y="56"
              textAnchor="middle"
              fontFamily="Outfit, system-ui, sans-serif"
              fontWeight="500"
              fontSize="13"
              fill={tone.ink}
              opacity="0.55"
            >
              {substance}
            </text>
          ) : null}

          {/* accent ring */}
          <rect x="490" y="8" width="16" height="68" rx="4" fill={tone.accent} />

          {/* dose / metal section */}
          <rect x="506" y="12" width="96" height="60" rx="14" fill={`url(#metal-${uid})`} />
          <rect x="526" y="26" width="56" height="32" rx="8" fill="#f8fafb" opacity="0.9" />
          <text
            x="554"
            y="48"
            textAnchor="middle"
            fontFamily="Outfit, system-ui, sans-serif"
            fontWeight="650"
            fontSize="16"
            fill={tone.ink}
            opacity="0.7"
          >
            0
          </text>

          {/* end cap / button */}
          <rect x="602" y="18" width="48" height="48" rx="14" fill={`url(#metal-${uid})`} />
          <circle cx="626" cy="42" r="14" fill={tone.accent} />
          <circle cx="626" cy="42" r="7" fill={tone.accentDeep} />
        </g>
      </svg>
    </div>
  );
}

export function PenCluster({
  title = "Ilustração editorial de canetas injectáveis da classe GLP-1",
}: {
  mechanism?: MedicationMechanism;
  title?: string;
}) {
  return (
    <PenIllustration
      mechanism="gip-glp1"
      brandName="GLP-1"
      substance="classe injectável"
      title={title}
    />
  );
}
