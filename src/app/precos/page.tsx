import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  comparticipacaoNotes,
  priceBands,
  pricePageDisclaimer,
} from "@/content/prices";
import { pageMetadata } from "@/lib/seo";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_REVIEWED_LABEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const description =
  "Quanto custam Mounjaro, Wegovy, Ozempic e outros GLP-1 em Portugal: ordens de grandeza de PVP, comparticipação SNS e o que verificar na Infomed e na farmácia.";

export const metadata: Metadata = pageMetadata({
  title: "Preços Mounjaro, Ozempic e Wegovy em Portugal",
  description,
  path: "/precos",
  keywords: [
    "preço Mounjaro Portugal",
    "preço Wegovy",
    "Ozempic comparticipação",
    "GLP-1 preço",
    "INFARMED",
  ],
});

export default function PrecosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Preços GLP-1 em Portugal",
    description,
    url: `${SITE_URL}/precos/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-PT",
    about: priceBands.map((row) => ({
      "@type": "Drug",
      name: row.brandName,
      nonProprietaryName: row.substance,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Portugal · dinheiro"
        title="Preços dos medicamentos GLP-1 em Portugal"
        lede="A pergunta mais frequente depois de «isto é para mim?» é «quanto custa?». Aqui vai a ordem de grandeza — e o que a muda — sem fingir que o ticket da farmácia é eternamente o mesmo."
      >
        <div className="callout warning">
          <p>
            <strong>Isto não é uma tabela oficial de preços.</strong>{" "}
            {pricePageDisclaimer} Confirme sempre em{" "}
            <a
              href="https://extranet.infarmed.pt/INFOMED-fo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infomed (INFARMED)
            </a>{" "}
            e no recibo da farmácia.
          </p>
        </div>

        <p className="price-verify">
          <strong>Última verificação editorial:</strong>{" "}
          <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
          <span>
            · Verifique de novo na{" "}
            <a
              href="https://extranet.infarmed.pt/INFOMED-fo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infomed
            </a>{" "}
            antes de decidir.
          </span>
        </p>

        <h2>Ordens de grandeza (PVP / mês)</h2>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Medicamento</th>
                <th scope="col">Faixa típica</th>
                <th scope="col">Comparticipação (resumo)</th>
              </tr>
            </thead>
            <tbody>
              {priceBands.map((row) => (
                <tr key={row.slug}>
                  <th scope="row">
                    <Link href={`/medicamentos/${row.slug}`}>{row.brandName}</Link>
                    <span className="price-sub">{row.substance}</span>
                  </th>
                  <td>
                    <strong>{row.monthlyBandEur}</strong>
                    <span className="price-sub">{row.packNote}</span>
                    <span className="price-sub">{row.caveat}</span>
                  </td>
                  <td>{row.comparticipacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Revisão editorial desta página:{" "}
          <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>.
        </p>

        <h2>Comparticipação SNS — o que saber agora</h2>
        <ul>
          {comparticipacaoNotes.map((note) => (
            <li key={note.slice(0, 40)}>{note}</li>
          ))}
        </ul>
        <p className="callout">
          Ter receita médica <strong>não</strong> significa automaticamente
          comparticipação. O que conta é a indicação, o medicamento e as regras
          publicadas pelo INFARMED / Ministério da Saúde.
        </p>

        <h2>O que entra na conta real</h2>
        <ul>
          <li>Preço da caneta / embalagem (sobe com a dose).</li>
          <li>Consultas (SNS ou privadas) e análises.</li>
          <li>Nutrição e, se fizer sentido, psicologia.</li>
          <li>Deslocações e tempo — sobretudo se a farmácia tiver de encomendar.</li>
        </ul>

        <h2>Como verificar o preço oficial</h2>
        <ol>
          <li>
            Abra a{" "}
            <a
              href="https://extranet.infarmed.pt/INFOMED-fo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infomed
            </a>{" "}
            e procure pelo nome comercial ou pela substância.
          </li>
          <li>Confirme a apresentação (dosagem) que está na receita.</li>
          <li>Peça na farmácia o PVP e se há comparticipação aplicável àquela receita.</li>
        </ol>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/medicos">Que médicos fazem sentido</Link>
          </li>
          <li>
            <Link href="/clinicas">Clínicas e centros (orientação)</Link>
          </li>
          <li>
            <Link href="/medicamentos">Levantamento de medicamentos</Link>
          </li>
          <li>
            <Link href="/brasil/precos">Preços no Brasil (R$)</Link>
          </li>
          <li>
            <Link href="/comprar-online">Riscos de comprar online</Link>
          </li>
          <li>
            <Link href="/checklist">Checklist para a consulta</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
