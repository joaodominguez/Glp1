import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  clinicExamples,
  clinicPageDisclaimer,
  clinicQualityChecks,
} from "@/content/clinics";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Clínicas e centros em Portugal para obesidade e GLP-1: exemplos institucionais (Lusíadas, CUF, Hospital da Luz, SNS), o que verificar antes de marcar e teleconsulta com cautela.";

export const metadata: Metadata = pageMetadata({
  title: "Clínicas e centros para GLP-1 em Portugal",
  description,
  path: "/clinicas",
  keywords: [
    "clínica obesidade Portugal",
    "consulta Mounjaro Lisboa",
    "endocrinologia Porto",
    "CUF Wegovy",
    "Lusíadas obesidade",
  ],
});

export default function ClinicasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Clínicas e centros para GLP-1 em Portugal",
    description,
    url: `${SITE_URL}/clinicas/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-PT",
    hasPart: clinicExamples.map((clinic) => ({
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
        kicker="Portugal · onde ir"
        title="Clínicas e centros — orientação, não ranking"
        lede="Há hospitais com centros de obesidade, redes privadas com endocrinologia e serviços online. Aqui ficam exemplos públicos para começar a pesquisa — e a grelha para não escolher mal."
      >
        <div className="callout warning">
          <p>
            <strong>{clinicPageDisclaimer}</strong>
          </p>
        </div>

        <h2>Antes de marcar: grelha rápida</h2>
        <ul>
          {clinicQualityChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Exemplos institucionais (orientação)</h2>
        <ul className="med-list">
          {clinicExamples.map((clinic) => (
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

        <h2>Teleconsulta e clínicas «só caneta»</h2>
        <p>
          Serviços 100% digitais podem ser úteis para quem tem mobilidade
          limitada — <em>se</em> houver médico registado, história completa e
          receita para farmácia legal. Se o modelo de negócio depende de vender
          a caixa no mesmo clique da consulta, trate isso como sinal de alerta.
          Leia também{" "}
          <Link href="/medicos">médicos aconselháveis</Link>.
        </p>

        <h2>SNS primeiro, quando fizer sentido</h2>
        <p>
          Diabetes tipo 2, obesidade grave e comorbilidades cabem no percurso
          público: médico de família → especialidade hospitalar. Pode demorar
          mais; em troca, há continuidade e menos pressão comercial. Para
          orientações gerais:{" "}
          <a
            href="https://www.sns24.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SNS 24
          </a>
          .
        </p>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/precos">Preços e comparticipação</Link>
          </li>
          <li>
            <Link href="/medicos">Critérios para escolher médico</Link>
          </li>
          <li>
            <Link href="/checklist">Checklist para a consulta</Link>
          </li>
          <li>
            <Link href="/fontes">Fontes oficiais</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
