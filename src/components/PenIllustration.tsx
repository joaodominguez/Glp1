import type { SVGProps } from "react";
import type { MedicationMechanism } from "@/content/medications";

type Tone = "teal" | "slate" | "sand";

function toneForMechanism(mechanism: MedicationMechanism): Tone {
  if (mechanism === "gip-glp1") return "teal";
  if (mechanism === "glp1") return "slate";
  return "sand";
}

function toneVars(tone: Tone) {
  if (tone === "teal") {
    return {
      body: "#d9ecee",
      bodyDeep: "#b8d8db",
      metal: "#7c8d97",
      band: "#0a5c63",
      label: "#f5fbfb",
      ink: "#0e1a24",
      shadow: "rgba(10, 18, 24, 0.14)",
      backdrop: "#dfe9ea",
    };
  }

  if (tone === "sand") {
    return {
      body: "#ece7df",
      bodyDeep: "#d9d1c4",
      metal: "#7f817f",
      band: "#8e765d",
      label: "#fbfaf8",
      ink: "#241a12",
      shadow: "rgba(20, 16, 12, 0.14)",
      backdrop: "#ece7df",
    };
  }

  return {
    body: "#e1e7eb",
    bodyDeep: "#cdd7de",
    metal: "#748694",
    band: "#516574",
    label: "#fafcfd",
    ink: "#0e1a24",
    shadow: "rgba(10, 18, 24, 0.14)",
    backdrop: "#e2e8ed",
  };
}

export function PenIllustration({
  mechanism,
  className,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { mechanism: MedicationMechanism; title?: string }) {
  const tone = toneVars(toneForMechanism(mechanism));

  return (
    <svg
      viewBox="0 0 180 420"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="pen-body" x1="66" y1="90" x2="120" y2="330" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={tone.body} />
          <stop offset="100%" stopColor={tone.bodyDeep} />
        </linearGradient>
      </defs>

      <rect x="18" y="24" width="144" height="372" rx="36" fill={tone.backdrop} />
      <ellipse cx="90" cy="382" rx="38" ry="10" fill={tone.shadow} />

      <rect x="67" y="32" width="46" height="38" rx="14" fill={tone.band} />
      <rect x="61" y="58" width="58" height="112" rx="16" fill={tone.metal} />
      <rect x="71" y="89" width="38" height="42" rx="8" fill="#fff" opacity=".78" />
      <circle cx="90" cy="110" r="8" fill={tone.ink} opacity=".82" />
      <path d="M67 142h46M67 151h46M67 160h46" stroke="#fff" strokeOpacity=".34" strokeWidth="2" strokeLinecap="round" />

      <rect x="58" y="168" width="64" height="30" rx="10" fill="#a9b6bf" />
      <rect x="60" y="190" width="60" height="136" rx="16" fill="url(#pen-body)" />
      <rect x="60" y="272" width="60" height="18" rx="0" fill={tone.band} />
      <rect x="72" y="214" width="36" height="54" rx="8" fill={tone.label} />
      <rect x="78" y="226" width="24" height="6" rx="3" fill={tone.ink} opacity=".45" />
      <rect x="78" y="239" width="18" height="5" rx="2.5" fill={tone.ink} opacity=".25" />
      <rect x="78" y="251" width="22" height="5" rx="2.5" fill={tone.ink} opacity=".18" />

      <rect x="73" y="324" width="34" height="20" rx="5" fill={tone.metal} />
      <path d="M68 344c0 8 5 22 22 22s22-14 22-22v-14H68v14Z" fill="#f7f8f9" />
      <rect x="84" y="365" width="12" height="8" rx="2" fill={tone.metal} />
    </svg>
  );
}

export function PenCluster({
  mechanism,
  title,
}: {
  mechanism: MedicationMechanism;
  title?: string;
}) {
  return (
    <div className="pen-cluster" aria-label={title}>
      <div className="pen-cluster-back">
        <PenIllustration mechanism="glp1" title="" />
      </div>
      <div className="pen-cluster-mid">
        <PenIllustration mechanism={mechanism} title={title} />
      </div>
      <div className="pen-cluster-front">
        <PenIllustration mechanism="outro" title="" />
      </div>
    </div>
  );
}
