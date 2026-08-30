import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  careRedFlags,
  howToFindDoctors,
  ordemMedicosUrl,
  specialistProfiles,
} from "@/content/doctors";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Que médicos fazem sentido para GLP-1 em Portugal: endocrinologia, consulta de obesidade, médico de família, sinais de alerta e como confirmar na Ordem dos Médicos.";

export const metadata: Metadata = pageMetadata({
  title: "Médicos aconselháveis para GLP-1",
  description,
  path: "/medicos",
  keywords: [
    "médico Mounjaro",
    "endocrinologia Portugal",
    "consulta obesidade",
    "prescrição Wegovy",
    "Ordem dos Médicos",
  ],
});

export default function MedicosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Médicos aconselháveis para GLP-1",
    description,
    url: `${SITE_URL}/medicos/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-PT",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Portugal · quem acompanha"
        title="Médicos aconselháveis — o que isso deve significar"
        lede="Não publicamos um «top 10» de nomes. Publicamos o critério: especialidade, rigor clínico e sinais de que a consulta serve a si — não a venda da caneta."
      >
        <div className="callout warning">
          <p>
            <strong>O Guia GLP-1 não indica o seu médico.</strong> Não temos
            parcerias pagas com prescritores. Um bom profissional pode ser do
            SNS ou do privado; o que importa é a avaliação, não o Instagram.
          </p>
        </div>

        <h2>Perfis que costumam fazer sentido</h2>
        <ul className="med-list">
          {specialistProfiles.map((profile) => (
            <li key={profile.id}>
              <div>
                <strong>{profile.title}</strong>
                <span className="med-meta">O que pedir na consulta</span>
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

        <h2>Como encontrar (sem atalhos perigosos)</h2>
        {howToFindDoctors.map((block) => (
          <div key={block.title}>
            <h3>{block.title}</h3>
            <p>{block.body}</p>
          </div>
        ))}
        <p>
          Confirme cédula e especialidade no diretório da{" "}
          <a href={ordemMedicosUrl} target="_blank" rel="noopener noreferrer">
            Ordem dos Médicos
          </a>
          .
        </p>

        <h2>Sinais de alerta</h2>
        <ul>
          {careRedFlags.map((flag) => (
            <li key={flag.id}>
              <strong>{flag.title}.</strong> {flag.detail}
            </li>
          ))}
        </ul>

        <h2>Perguntas úteis para levar</h2>
        <p>
          Use a{" "}
          <Link href="/checklist">checklist para a consulta</Link>: indicação,
          alternativas, titulação, outros medicamentos, gravidez, quem ligar se
          a dor de barriga não for «só náusea».
        </p>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/clinicas">Clínicas e centros (orientação)</Link>
          </li>
          <li>
            <Link href="/precos">Preços e comparticipação</Link>
          </li>
          <li>
            <Link href="/aviso">Aviso médico</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
