import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { medicationsSorted } from "@/content/medications";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";
import { PILLAR_MED_SLUGS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Medicamentos GLP-1 em Portugal",
  description:
    "Rybelsus, Mounjaro, Ozempic, Wegovy, Trulicity e Saxenda em Portugal — fichas no mesmo formato. Outros nomes da classe em baixo.",
  path: "/medicamentos",
  keywords: [
    "medicamentos GLP-1",
    "Rybelsus Portugal",
    "Mounjaro",
    "Ozempic",
    "Wegovy",
    "Trulicity",
  ],
});

export default function MedicamentosPage() {
  const meds = medicationsSorted();
  const pillarSet = new Set<string>(PILLAR_MED_SLUGS);
  const pillars = PILLAR_MED_SLUGS.map((slug) =>
    meds.find((m) => m.slug === slug),
  ).filter(Boolean);
  const others = meds.filter((m) => !pillarSet.has(m.slug));

  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Medicamentos GLP-1 em Portugal",
            description:
              "Lista dos nomes comerciais da classe GLP-1 com foco em Portugal.",
            path: "/medicamentos",
            type: "CollectionPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Medicamentos", path: "/medicamentos" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Medicamentos GLP-1 e afins",
            numberOfItems: meds.length,
            itemListElement: meds.map((med, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `${med.brandName} (${med.substance})`,
              url: absoluteUrl(`/medicamentos/${med.slug}/`),
            })),
          },
        ]}
      />
      <div className="shell section">
        <div className="section-head">
          <p className="eyebrow">Medicamentos</p>
          <h1 className="page-title">Os que mais se procura em Portugal</h1>
          <p className="lede">
            Mesma estrutura em cada ficha: o que é, em que difere, dados da bula
            e o que ler a seguir. Confirme sempre Infomed.
          </p>
        </div>

        <ul className="pillar-list">
          {pillars.map((med) => (
            <li key={med!.slug}>
              <Link className="pillar-link" href={`/medicamentos/${med!.slug}/`}>
                <strong>{med!.brandName}</strong>
                <span className="meta">
                  {med!.substance} · {med!.frequency}
                </span>
                <span className="blurb">{med!.summary}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="section-head" style={{ marginTop: "2.8rem" }}>
          <h2>Outros nomes da classe</h2>
          <p>Úteis para o mapa — menos procura em Portugal neste momento.</p>
        </div>
        <ul className="story-list">
          {others.map((med) => (
            <li key={med.slug}>
              <Link className="story-link" href={`/medicamentos/${med.slug}/`}>
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
    </>
  );
}
