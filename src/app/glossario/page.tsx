import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { glossaryTerms } from "@/content/glossary";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";
import { CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "O que significam GLP-1, GIP, Semaglutido, Tirzepatido, IMC, Infarmed, PVP, titulação e outros termos usados nestes medicamentos.";

export const metadata: Metadata = pageMetadata({
  title: "Glossário GLP-1 — termos em linguagem clara",
  description,
  path: "/glossario",
  keywords: [
    "glossário GLP-1",
    "o que é semaglutida",
    "o que é tirzepatida",
    "PVP medicamento",
    "titulação dose",
  ],
});

export default function GlossarioPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário GLP-1",
    url: absoluteUrl("/glossario/"),
    inLanguage: "pt-PT",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: absoluteUrl("/glossario/"),
    })),
  };

  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Glossário GLP-1",
            description,
            path: "/glossario",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Glossário", path: "/glossario" },
          ]),
          definedTermSet,
        ]}
      />
      <p className="eyebrow">Referência</p>
      <h1>Glossário</h1>
      <p className="lede">
        Termos que aparecem nas bulas e nas conversas sobre estes medicamentos —
        em português simples.
      </p>

      <div className="glossary">
        {glossaryTerms.map((item) => (
          <article key={item.id} className="glossary-item" id={item.id}>
            <h2>{item.term}</h2>
            <p>{item.definition}</p>
            {item.relatedHref && item.relatedLabel ? (
              <p className="glossary-related">
                <Link href={item.relatedHref}>{item.relatedLabel}</Link>
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="next-reads">
        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/perguntas/">
              <strong>Perguntas</strong>
              <span>FAQ em português claro.</span>
            </Link>
          </li>
          <li>
            <Link href="/fontes/">
              <strong>Fontes</strong>
              <span>Infarmed, EMA e reguladores.</span>
            </Link>
          </li>
          <li>
            <Link href="/medicamentos/">
              <strong>Medicamentos</strong>
              <span>As 11 fichas.</span>
            </Link>
          </li>
        </ul>
      </div>

      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
