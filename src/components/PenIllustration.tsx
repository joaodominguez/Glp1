import Image from "next/image";
import type { MedicationMechanism } from "@/content/medications";

type Tone = "teal" | "slate" | "sand";

function toneForMechanism(mechanism: MedicationMechanism): Tone {
  if (mechanism === "gip-glp1") return "teal";
  if (mechanism === "glp1") return "slate";
  return "sand";
}

/** Soft colour grading so each mechanism feels distinct without brand packaging. */
function toneFilter(tone: Tone) {
  if (tone === "slate") return "hue-rotate(198deg) saturate(0.72) brightness(1.02)";
  if (tone === "sand") return "hue-rotate(28deg) saturate(0.78) brightness(1.04)";
  return "none";
}

export function PenIllustration({
  mechanism,
  title = "Ilustração editorial de uma caneta injectável",
  className,
}: {
  mechanism: MedicationMechanism;
  title?: string;
  className?: string;
}) {
  const tone = toneForMechanism(mechanism);

  return (
    <div className={`pen-shot ${className ?? ""}`} data-tone={tone}>
      <Image
        src="/illustrations/hero-pen.png"
        alt={title}
        width={1536}
        height={1024}
        className="pen-shot-img"
        style={{ filter: toneFilter(tone) }}
        priority={false}
      />
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
    <div className="pen-cluster-shot">
      <Image
        src="/illustrations/pen-cluster.png"
        alt={title}
        width={1536}
        height={1024}
        className="pen-cluster-img"
        priority
      />
    </div>
  );
}
