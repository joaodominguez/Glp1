import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  careRedFlagsBrazil,
  cfmBuscaMedicosUrl,
  howToFindDoctorsBrazil,
  specialistProfilesBrazil,
} from "@/content/doctors-br";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Médicos aconselháveis para GLP-1 no Brasil: endocrinologia, nutrologia, como confirmar CRM no CFM e sinais de alerta em teleconsulta.";

export const metadata: Metadata = pageMetadata({
  title: "Médicos aconselháveis — Brasil",
  description,
  path: "/brasil/medicos",
  keywords: ["endocrinologista Mounjaro", "CRM", "nutrologia Ozempic", "teleconsulta caneta"],
});

export default function BrasilMedicosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Médicos aconselháveis — Brasil",
    description,
    url: `${SITE_URL}/brasil/medicos/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Brasil · quem acompanha"
        title="Médicos aconselháveis no Brasil"
        lede="Não publicamos top de nomes. Publicamos o critério: CRM, especialidade e sinais de que a consulta serve você — não a venda da caneta."
      >
        <div className="callout warning">
          <p>
            <strong>O Guia GLP-1 não indica o seu médico.</strong> Sem parcerias
            pagas com prescritores. Confirme sempre o CRM.
          </p>
        </div>

        <h2>Perfis que costumam fazer sentido</h2>
        <ul className="med-list">
          {specialistProfilesBrazil.map((profile) => (
            <li key={profile.id}>
              <div>
                <strong>{profile.title}</strong>
                <span className="med-meta">O que pedir</span>
                <span>{profile.why}</span>
                <ul>
                  {profile.askFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <h2>Como encontrar</h2>
        {howToFindDoctorsBrazil.map((block) => (
          <div key={block.title}>
            <h3>{block.title}</h3>
            <p>{block.body}</p>
          </div>
        ))}
        <p>
          Busca oficial:{" "}
          <a href={cfmBuscaMedicosUrl} target="_blank" rel="noopener noreferrer">
            CFM — Busca Médicos
          </a>
          .
        </p>

        <h2>Sinais de alerta</h2>
        <ul>
          {careRedFlagsBrazil.map((flag) => (
            <li key={flag.id}>
              <strong>{flag.title}.</strong> {flag.detail}
            </li>
          ))}
        </ul>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/brasil/clinicas">Clínicas (exemplos)</Link>
          </li>
          <li>
            <Link href="/brasil/precos">Preços em R$</Link>
          </li>
          <li>
            <Link href="/medicos">Critérios em Portugal</Link>
          </li>
          <li>
            <Link href="/checklist">Checklist para a consulta</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
