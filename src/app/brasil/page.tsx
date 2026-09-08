import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Guia GLP-1 no Brasil: preços aproximados (Mounjaro, Ozempic, Wegovy), médicos aconselháveis, clínicas e ANVISA/SUS — conteúdo em português do Brasil.";

export const metadata: Metadata = pageMetadata({
  title: "Brasil — preços, médicos e clínicas GLP-1",
  description,
  path: "/brasil",
  keywords: [
    "Mounjaro Brasil",
    "Ozempic preço Brasil",
    "Wegovy ANVISA",
    "clínica obesidade São Paulo",
    "SUS caneta emagrecedora",
  ],
});

const links = [
  {
    href: "/brasil/precos",
    label: "Preços",
    description: "Faixas em R$, SUS, planos e como confirmar na ANVISA",
  },
  {
    href: "/brasil/medicos",
    label: "Médicos",
    description: "Endocrino, nutrologia, CRM e sinais de alerta",
  },
  {
    href: "/brasil/clinicas",
    label: "Clínicas",
    description: "Exemplos institucionais (Einstein, Sírio, SUS…) — sem ranking",
  },
];

export default function BrasilHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guia GLP-1 — Brasil",
    description,
    url: `${SITE_URL}/brasil/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Mercado Brasil · pt-BR"
        title="GLP-1 no Brasil — o mesmo mapa, outras regras"
        lede="Preços em reais, ANVISA, SUS e planos não são o INFARMED nem o SNS. Este bloco é conteúdo brasileiro dentro do Guia GLP-1 — informativo, sem receita e sem parceria."
      >
        <div className="callout warning">
          <p>
            <strong>Conteúdo Brasil (pt-BR).</strong> O domínio é{" "}
            <code>meuglp1.pt</code>, mas o mercado brasileiro tem regulador,
            preços e acesso próprios. Confirme sempre bula ANVISA, CRM e o
            ticket da farmácia.{" "}
            <Link href="/precos">Ver também Portugal</Link>.
          </p>
        </div>

        <h2>Começar por aqui</h2>
        <ul className="med-list">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <strong>{item.label}</strong>
                <span className="med-meta">Brasil</span>
                <span>{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2>O que muda face a Portugal</h2>
        <ul>
          <li>Regulador: <strong>ANVISA</strong> (+ CMED para tetos de preço).</li>
          <li>Acesso público: <strong>SUS</strong> / CONITEC — não SNS / INFARMED.</li>
          <li>Profissionais: confirme <strong>CRM/UF</strong> no CFM.</li>
          <li>Moeda e faixas: <strong>R$</strong>, com programas de laboratório muito relevantes.</li>
        </ul>

        <h2>Continuar no guia geral</h2>
        <ul>
          <li>
            <Link href="/medicamentos">Levantamento de medicamentos</Link>
          </li>
          <li>
            <Link href="/apps">Apps para tracking</Link>
          </li>
          <li>
            <Link href="/faq">Perguntas frequentes</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
