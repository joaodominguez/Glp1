import type { Metadata } from "next";
import Link from "next/link";
import { medicationsSorted } from "@/content/medications";

export const metadata: Metadata = {
  title: "Medicamentos GLP-1",
  description:
    "Os 11 nomes comerciais da classe GLP-1 e afins: Mounjaro, Ozempic, Wegovy, Saxenda e outros — lado a lado.",
};

export default function MedicamentosPage() {
  const meds = medicationsSorted();

  return (
    <div className="shell section">
      <div className="section-head">
        <p className="eyebrow">Medicamentos</p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            fontWeight: 650,
          }}
        >
          Os 11, no mesmo formato
        </h1>
        <p className="lede">
          Cada página tem a mesma estrutura: o que é, em que difere, ficha e o
          que ler a seguir. Assim compara-se sem saltar entre sites.
        </p>
      </div>
      <ul className="med-grid">
        {meds.map((med) => (
          <li key={med.slug}>
            <Link className="med-card" href={`/medicamentos/${med.slug}/`}>
              <strong>{med.brandName}</strong>
              <span className="meta">
                {med.substance} · {med.frequency}
              </span>
              <span className="blurb">{med.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
