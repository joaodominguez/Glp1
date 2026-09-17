import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PenIllustration } from "@/components/PenIllustration";
import { getFicha } from "@/content/ficha";
import {
  getMedication,
  medications,
  relatedMedications,
} from "@/content/medications";
import { manufacturerSources, officialSources } from "@/content/sources";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";
import { CONTENT_REVIEWED_LABEL, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return medications.map((med) => ({ slug: med.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return { title: "Medicamento" };

  const title =
    slug === "rybelsus"
      ? "Rybelsus em Portugal (semaglutida oral)"
      : `${med.brandName} (${med.substance})`;

  const description =
    slug === "rybelsus"
      ? "Rybelsus em Portugal: semaglutida em comprimido para diabetes tipo 2 — rotina de toma, diferenças face ao Ozempic e o que confirmar na Infomed."
      : med.summary;

  return pageMetadata({
    title,
    description,
    path: `/medicamentos/${med.slug}`,
    keywords: [
      med.brandName,
      med.substance,
      "GLP-1",
      ...(slug === "rybelsus" ? ["Rybelsus Portugal", "semaglutida oral"] : []),
      ...(med.alsoKnownAs ?? []),
    ],
  });
}

export default async function MedicationPage({ params }: Props) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const ficha = getFicha(slug);
  const related = relatedMedications(med);
  const url = absoluteUrl(`/medicamentos/${med.slug}/`);

  const schemas = [
    webPageLd({
      name: `${med.brandName} (${med.substance})`,
      description: med.summary,
      path: `/medicamentos/${med.slug}`,
      type: "MedicalWebPage",
    }),
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
      isPartOf: {
        "@type": "WebSite",
        name: "Guia GLP-1",
        url: `${SITE_URL}/`,
      },
    },
    breadcrumbLd([
      { name: "Início", path: "/" },
      { name: "Medicamentos", path: "/medicamentos" },
      { name: med.brandName, path: `/medicamentos/${med.slug}` },
    ]),
  ];

  return (
    <div className="shell">
      <JsonLd data={schemas} />
      <nav className="crumbs" aria-label="Trilho">
        <Link href="/">Início</Link>
        {" / "}
        <Link href="/medicamentos/">Medicamentos</Link>
        {" / "}
        {med.brandName}
      </nav>

      <header className="med-hero">
        <div>
          <h1>{med.brandName}</h1>
          <p className="substance">
            {med.substance} · {med.frequency}
          </p>
          <p className="lede">{med.lede}</p>
        </div>
        <figure className="med-photo">
          <PenIllustration
            mechanism={med.mechanism}
            brandName={med.brandName}
            substance={med.substance}
            slug={med.slug}
            title={`Ilustração editorial — ${med.brandName}`}
            priority
          />
          <figcaption>
            Ilustração editorial de {med.brandName}
            {med.route.toLowerCase().includes("oral")
              ? " — embalagem genérica identificada."
              : " — caneta genérica identificada."}
          </figcaption>
        </figure>
      </header>

      {ficha ? (
        <section className="ficha" aria-label={`Ficha ${med.brandName}`}>
          <div className="ficha-label">Ficha · {med.brandName}</div>
          <dl>
            <div>
              <dt>Substância activa</dt>
              <dd>{med.substance}</dd>
            </div>
            <div>
              <dt>Como actua</dt>
              <dd>{med.mechanismLabel}</dd>
            </div>
            <div>
              <dt>Como se administra</dt>
              <dd>{med.route}</dd>
            </div>
            <div>
              <dt>Frequência</dt>
              <dd>{med.frequency}</dd>
            </div>
            <div>
              <dt>Dose inicial</dt>
              <dd>{ficha.doseInicial}</dd>
            </div>
            <div>
              <dt>Dose máxima</dt>
              <dd>{ficha.doseMaxima}</dd>
            </div>
            <div>
              <dt>Fora do frigorífico</dt>
              <dd>{ficha.foraDoFrio}</dd>
            </div>
            <div>
              <dt>Indicação</dt>
              <dd>{ficha.indicacao}</dd>
            </div>
            <div>
              <dt>Estatuto</dt>
              <dd>{ficha.estatuto}</dd>
            </div>
            <div>
              <dt>Titular</dt>
              <dd>{med.company}</dd>
            </div>
          </dl>
        </section>
      ) : null}

      <article className="article">
        <h2>O que é</h2>
        <ul className="points">
          {med.whatItIs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Em que difere</h2>
        <ul className="points">
          {med.howItDiffers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Na prática</h2>
        <ul className="points">
          {med.practicalNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="disclaimer" style={{ marginTop: "1.6rem" }}>
          {med.indicationSummary} {med.availabilityNote} Nada nesta página é
          recomendação de dose ou de troca de medicamento.
        </p>

        <section className="source-box" aria-label="Fontes oficiais">
          <h2>Confirmar nas fontes oficiais</h2>
          <p>
            Preços, estatuto e bula mudam. Cruze sempre com reguladores — este
            guia é educativo.
          </p>
          <ul className="source-list compact">
            {officialSources.slice(0, 3).map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.title}
                </a>
                <p>{s.why}</p>
              </li>
            ))}
            {manufacturerSources
              .filter((s) => s.id === "ema-search" || s.id === "sns24")
              .map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>
                  <p>{s.why}</p>
                </li>
              ))}
          </ul>
          <p className="soft-note">
            Lista completa em <Link href="/fontes/">Fontes</Link>.
          </p>
        </section>

        {related.length > 0 ? (
          <section className="siblings">
            <h2>A mesma substância, noutro nome</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/medicamentos/${item.slug}/`}>
                    <strong>{item.brandName}</strong>
                    <span>{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="next-reads">
          <h2>O que ler a seguir</h2>
          <ul>
            <li>
              <Link href="/comparar/">
                <strong>Comparar</strong>
                <span>Dois medicamentos, factos lado a lado</span>
              </Link>
            </li>
            <li>
              <Link href="/precos/">
                <strong>Preços</strong>
                <span>Ordens de grandeza e o que verificar</span>
              </Link>
            </li>
            <li>
              <Link href="/medicos/#checklist">
                <strong>Checklist</strong>
                <span>O que levar à consulta</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="verified">
          Verificado a {CONTENT_REVIEWED_LABEL}. Verificação editorial — não é
          revisão clínica.
        </p>
      </article>
    </div>
  );
}
