import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  getMedication,
  medications,
  relatedMedications,
} from "@/content/medications";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return medications.map((med) => ({ slug: med.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) {
    return { title: "Medicamento" };
  }
  return pageMetadata({
    title: `${med.brandName} (${med.substance})`,
    description: `${med.brandName}: ${med.summary} Informação em português sobre indicação, diferenças na classe GLP-1 e o que confirmar na bula. Não substitui aconselhamento médico.`,
    path: `/medicamentos/${med.slug}`,
    keywords: [
      med.brandName,
      med.substance,
      ...(med.alsoKnownAs ?? []),
      "GLP-1",
      "Guia GLP-1",
    ],
  });
}

export default async function MedicationPage({ params }: Props) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const related = relatedMedications(med);
  const url = `${SITE_URL}/medicamentos/${med.slug}/`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      name: med.brandName,
      alternateName: [med.substance, ...(med.alsoKnownAs ?? [])],
      description: med.summary,
      url,
      proprietaryName: med.brandName,
      nonProprietaryName: med.substance,
      manufacturer: {
        "@type": "Organization",
        name: med.company,
      },
      administrationRoute: med.route,
      inLanguage: "pt-PT",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Medicamentos",
          item: `${SITE_URL}/medicamentos/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: med.brandName,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: `${med.brandName} (${med.substance})`,
      url,
      dateModified: CONTENT_REVIEWED_AT,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
      about: { "@type": "Drug", name: med.brandName },
      inLanguage: "pt-PT",
      specialty: "https://schema.org/Physician",
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Medicamento"
        title={`${med.brandName} — ${med.substance}`}
        lede={med.lede}
      >
        <p className="med-chip-row" aria-label="Resumo rápido">
          <span className="med-chip">{med.mechanismLabel}</span>
          <span className="med-chip">{med.route}</span>
          <span className="med-chip">{med.frequency}</span>
          <span className="med-chip">{med.company}</span>
        </p>

        <h2>O que é</h2>
        <ul>
          {med.whatItIs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Indicação (resumo)</h2>
        <p>{med.indicationSummary}</p>
        <p className="callout">{med.availabilityNote}</p>

        <h2>Como se distingue na classe</h2>
        <ul>
          {med.howItDiffers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Notas práticas</h2>
        <ul>
          {med.practicalNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {related.length > 0 ? (
          <>
            <h2>Nomes relacionados</h2>
            <ul className="med-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/medicamentos/${item.slug}`}>
                    <strong>{item.brandName}</strong>
                    <span className="med-meta">{item.substance}</span>
                    <span>{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h2>Continuar no guia</h2>
        <ul>
          <li>
            <Link href="/medicamentos">Todos os medicamentos do levantamento</Link>
          </li>
          <li>
            <Link href="/mounjaro-vs-ozempic">Mounjaro vs Ozempic</Link>
          </li>
          <li>
            <Link href="/como-funciona">Como estes fármacos atuam no corpo</Link>
          </li>
          <li>
            <Link href="/efeitos">Efeitos secundários e sinais de alerta</Link>
          </li>
          <li>
            <Link href="/nauseas">Náuseas (página dedicada)</Link>
          </li>
          <li>
            <Link href="/precos">Preços em Portugal</Link>
            {" · "}
            <Link href="/brasil/precos">Preços no Brasil</Link>
          </li>
          <li>
            <Link href="/checklist">Checklist para a consulta</Link>
          </li>
          <li>
            <Link href="/faq">Perguntas frequentes</Link>
          </li>
          <li>
            <Link href="/fontes">Fontes oficiais (EMA, INFARMED, FDA…)</Link>
          </li>
        </ul>
        <p>
          Última revisão editorial deste guia:{" "}
          <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_AT}</time>.
        </p>
      </Article>
    </>
  );
}
