import Image from "next/image";
import type { MedicationMechanism } from "@/content/medications";

type Tone = "teal" | "slate" | "sand";

function toneForMechanism(mechanism: MedicationMechanism): Tone {
  if (mechanism === "gip-glp1") return "teal";
  if (mechanism === "glp1") return "slate";
  return "sand";
}

const PEN_SLUGS = new Set([
  "mounjaro",
  "zepbound",
  "ozempic",
  "wegovy",
  "rybelsus",
  "saxenda",
  "victoza",
  "trulicity",
  "byetta",
  "bydureon",
  "lyxumia",
]);

function penSrc(slug?: string) {
  if (slug && PEN_SLUGS.has(slug)) return `/illustrations/pens/${slug}.png`;
  return "/illustrations/pens/mounjaro.png";
}

export function PenIllustration({
  mechanism,
  brandName,
  substance,
  slug,
  title,
  className,
  priority = false,
}: {
  mechanism: MedicationMechanism;
  brandName: string;
  substance?: string;
  /** Medication slug — selects the baked-in labeled render */
  slug?: string;
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
        src={penSrc(slug)}
        alt={alt}
        width={1376}
        height={768}
        className="pen-shot-img"
        priority={priority}
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
    <PenIllustration
      mechanism="gip-glp1"
      brandName="Mounjaro"
      substance="tirzepatida"
      slug="mounjaro"
      title={title}
      priority
    />
  );
}
