import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  anvisaBularioUrl,
  anvisaConsultasUrl,
  priceBandsBrazil,
  pricePageDisclaimerBrazil,
  susPlanoNotesBrazil,
} from "@/content/prices-br";
import { pageMetadata } from "@/lib/seo";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_REVIEWED_LABEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const description =
  "Preços aproximados de Mounjaro, Ozempic, Wegovy e Saxenda no Brasil (R$): faixas de farmácia, SUS, planos de saúde e como verificar na ANVISA.";

export const metadata: Metadata = pageMetadata({
  title: "Preços GLP-1 no Brasil (R$)",
  description,
  path: "/brasil/precos",
  keywords: [
    "preço Mounjaro Brasil",
    "Ozempic preço",
    "Wegovy R$",
    "ANVISA",
    "SUS caneta",
  ],
});

export default function BrasilPrecosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Preços GLP-1 no Brasil",
    description,
    url: `${SITE_URL}/brasil/precos/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Brasil · preços"
        title="Quanto custam as canetas GLP-1 no Brasil"
        lede="Em reais, com teto CMED, programas de laboratório e pouca presença no SUS. Ordens de grandeza — não cotação."
      >
        <p className="locale-note" lang="pt-BR">
          Conteúdo em português do Brasil (pt-BR)
        </p>
        <div className="callout warning">
          <p>
            <strong>Isto não é tabela oficial.</strong> {pricePageDisclaimerBrazil}{" "}
            Confirme em{" "}
            <a href={anvisaConsultasUrl} target="_blank" rel="noopener noreferrer">
              Consultas ANVISA
            </a>{" "}
            e no balcão.
          </p>
        </div>

        <p className="price-verify">
          <strong>Última verificação editorial:</strong>{" "}
          <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
          <span>
            · Confirme de novo na{" "}
            <a href={anvisaConsultasUrl} target="_blank" rel="noopener noreferrer">
              ANVISA
            </a>{" "}
            e no ticket da farmácia.
          </span>
        </p>

        <h2>Faixas típicas (R$ / mês)</h2>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Medicamento</th>
                <th scope="col">Faixa aproximada</th>
                <th scope="col">SUS / plano</th>
              </tr>
            </thead>
            <tbody>
              {priceBandsBrazil.map((row) => (
                <tr key={row.slug}>
                  <th scope="row">
                    <Link href={`/medicamentos/${row.slug}`}>{row.brandName}</Link>
                    <span className="price-sub">{row.substance}</span>
                  </th>
                  <td>
                    <strong>{row.monthlyBandBrl}</strong>
                    <span className="price-sub">{row.packNote}</span>
                    <span className="price-sub">{row.caveat}</span>
                  </td>
                  <td>{row.susPlano}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Revisão editorial:{" "}
          <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>.
        </p>

        <h2>SUS e planos — o essencial</h2>
        <ul>
          {susPlanoNotesBrazil.map((note) => (
            <li key={note.slice(0, 48)}>{note}</li>
          ))}
        </ul>

        <h2>Como verificar</h2>
        <ol>
          <li>
            <a href={anvisaConsultasUrl} target="_blank" rel="noopener noreferrer">
              Consultas ANVISA
            </a>{" "}
            — registro do produto.
          </li>
          <li>
            <a href={anvisaBularioUrl} target="_blank" rel="noopener noreferrer">
              Bulário
            </a>{" "}
            — indicações e retenção de receita.
          </li>
          <li>Farmácia: PVP no ticket e se há programa de desconto do laboratório.</li>
        </ol>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/brasil/medicos">Médicos no Brasil</Link>
          </li>
          <li>
            <Link href="/brasil/clinicas">Clínicas (exemplos)</Link>
          </li>
          <li>
            <Link href="/precos">Preços em Portugal (€)</Link>
          </li>
          <li>
            <Link href="/comprar-online">Riscos de comprar online</Link>
          </li>
          <li>
            <Link href="/sugerir">Sugerir uma clínica</Link>
          </li>
          <li>
            <Link href="/brasil">Hub Brasil</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
