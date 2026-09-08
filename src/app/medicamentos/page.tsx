import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import { medicationsSorted } from "@/content/medications";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Levantamento em português de Mounjaro, Ozempic, Wegovy, Saxenda, Victoza, Trulicity, Rybelsus e outros agonistas de GLP-1 / GIP: substância, indicação e diferenças — sem substituir a bula nem o médico.";

export const metadata: Metadata = pageMetadata({
  title: "Medicamentos GLP-1 e afins",
  description,
  path: "/medicamentos",
  keywords: [
    "medicamentos GLP-1",
    "Mounjaro",
    "Ozempic",
    "Wegovy",
    "Saxenda",
    "Trulicity",
    "tirzepatida",
    "semaglutida",
  ],
});

export default function MedicamentosPage() {
  const meds = medicationsSorted();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Medicamentos GLP-1 e afins",
    description,
    url: `${SITE_URL}/medicamentos/`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    dateModified: CONTENT_REVIEWED_AT,
    inLanguage: "pt-PT",
    hasPart: meds.map((med) => ({
      "@type": "Drug",
      name: med.brandName,
      alternateName: med.substance,
      url: `${SITE_URL}/medicamentos/${med.slug}/`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Levantamento"
        title="Medicamentos da família GLP-1 — o mapa completo"
        lede="Mounjaro não é o único nome nesta conversa. Aqui está um levantamento dos agonistas mais citados: substância, empresa, via, ritmo e para que costumam estar autorizados — sempre com a ressalva de que a bula do seu país manda."
      >
        <h2>Como ler esta lista</h2>
        <ul>
          <li>
            <strong>Nome comercial</strong> é a marca da caneta ou do
            comprimido. <strong>Substância</strong> é o que o corpo recebe.
          </li>
          <li>
            A mesma substância pode ter <strong>dois nomes</strong> (ex.:
            Ozempic e Wegovy; Mounjaro e Zepbound) com indicações diferentes.
          </li>
          <li>
            «GLP-1» no dia a dia é uma alcunha de família. Em rigor, a
            tirzepatida também atua no <strong>GIP</strong>.
          </li>
          <li>
            Indicações, doses e disponibilidade{" "}
            <strong>mudam de país para país</strong>. Este guia orienta a
            conversa — não substitui INFARMED, EMA nem o prescritor.
          </li>
        </ul>
        <p className="callout">
          Comece pelos fundamentos em{" "}
          <Link href="/o-que-e">o que é um GLP-1</Link> ou pelo{" "}
          <Link href="/como-funciona">mecanismo no corpo</Link>. Para a
          consulta, use a <Link href="/checklist">checklist</Link>.
        </p>

        <h2>Agonista duplo (GIP + GLP-1)</h2>
        <ul className="med-list">
          {meds
            .filter((med) => med.mechanism === "gip-glp1")
            .map((med) => (
              <li key={med.slug}>
                <Link href={`/medicamentos/${med.slug}`}>
                  <strong>{med.brandName}</strong>
                  <span className="med-meta">
                    {med.substance} · {med.frequency}
                  </span>
                  <span>{med.summary}</span>
                </Link>
              </li>
            ))}
        </ul>

        <h2>Agonistas de GLP-1 (semaglutida, liraglutida e outros)</h2>
        <ul className="med-list">
          {meds
            .filter((med) => med.mechanism === "glp1")
            .map((med) => (
              <li key={med.slug}>
                <Link href={`/medicamentos/${med.slug}`}>
                  <strong>{med.brandName}</strong>
                  <span className="med-meta">
                    {med.substance} · {med.frequency}
                  </span>
                  <span>{med.summary}</span>
                </Link>
              </li>
            ))}
        </ul>

        <h2>O que este levantamento não faz</h2>
        <ul>
          <li>Não ranking de «o melhor para emagrecer».</li>
          <li>Não tabela de doses para copiar.</li>
          <li>Não aconselhamento para comprar online ou trocar canetas.</li>
        </ul>
        <p>
          Se está a comparar opções, leve esta lista à consulta e pergunte:{" "}
          <em>para o meu diagnóstico, no meu país, quais estão indicadas — e
          com que evidência?</em>
        </p>
      </Article>
    </>
  );
}
