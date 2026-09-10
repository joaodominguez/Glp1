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
  brandName,
  substance,
  title,
  className,
  priority = false,
}: {
  mechanism: MedicationMechanism;
  brandName: string;
  substance?: string;
  title?: string;
  className?: string;
  priority?: boolean;
}) {
  const tone = toneForMechanism(mechanism);
  const alt =
    title ??
    `Ilustração editorial da caneta de ${brandName}${
      substance ? ` (${substance})` : ""
    }`;

  return (
    <div className={`pen-shot ${className ?? ""}`} data-tone={tone}>
      <Image
        src="/illustrations/hero-pen.png"
        alt={alt}
        width={1536}
        height={1024}
        className="pen-shot-img"
        style={{ filter: toneFilter(tone) }}
        priority={priority}
      />
      <div className="pen-shot-label">
        <strong>{brandName}</strong>
        {substance ? <span>{substance}</span> : null}
      </div>
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
      <div className="pen-shot-label">
        <strong>Classe GLP-1</strong>
        <span>Canetas genéricas · sem marca</span>
      </div>
    </div>
  );
}
