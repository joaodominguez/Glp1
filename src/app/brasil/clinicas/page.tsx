import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  clinicExamplesBrazil,
  clinicPageDisclaimerBrazil,
  clinicQualityChecksBrazil,
} from "@/content/clinics-br";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Clínicas e hospitais no Brasil para obesidade e GLP-1: exemplos (Einstein, Sírio-Libanês, Oswaldo Cruz, Fleury, Rede D’Or, SUS) — orientação, não ranking.";

export const metadata: Metadata = pageMetadata({
  title: "Clínicas GLP-1 no Brasil",
  description,
  path: "/brasil/clinicas",
  keywords: [
    "clínica obesidade São Paulo",
    "Einstein Mounjaro",
    "endocrinologia Rio",
    "SUS obesidade",
  ],
});

export default function BrasilClinicasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Clínicas GLP-1 no Brasil",
    description,
    url: `${SITE_URL}/brasil/clinicas/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-BR",
    hasPart: clinicExamplesBrazil.map((clinic) => ({
      "@type": "MedicalClinic",
      name: clinic.name,
      url: clinic.href,
      areaServed: clinic.region,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Brasil · onde ir"
        title="Clínicas e centros no Brasil — orientação"
        lede="Hospitais de referência, redes privadas e o caminho SUS. Exemplos públicos para começar a pesquisa — não um ranking."
      >
        <div className="callout warning">
          <p>
            <strong>{clinicPageDisclaimerBrazil}</strong>
          </p>
        </div>

        <h2>Antes de marcar</h2>
        <ul>
          {clinicQualityChecksBrazil.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Exemplos institucionais</h2>
        <ul className="med-list">
          {clinicExamplesBrazil.map((clinic) => (
            <li key={clinic.id}>
              <a href={clinic.href} target="_blank" rel="noopener noreferrer">
                <strong>{clinic.name}</strong>
                <span className="med-meta">
                  {clinic.region} · {clinic.kind}
                </span>
                <span>{clinic.focus}</span>
                <span>{clinic.note}</span>
              </a>
            </li>
          ))}
        </ul>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/brasil/medicos">Médicos aconselháveis</Link>
          </li>
          <li>
            <Link href="/brasil/precos">Preços em R$</Link>
          </li>
          <li>
            <Link href="/clinicas">Clínicas em Portugal</Link>
          </li>
          <li>
            <Link href="/brasil">Hub Brasil</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
