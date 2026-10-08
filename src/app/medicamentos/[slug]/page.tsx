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

  const seoBySlug: Record<
    string,
    { title: string; description: string; keywords: string[]; h1?: string }
  > = {
    rybelsus: {
      title: "Rybelsus em Portugal: o que é, preço e como se toma",
      description:
        "Rybelsus (semaglutida oral) em Portugal: comprimido diário, rotina de jejum, diferenças face ao Ozempic, ordem de grandeza de PVP na Infomed.",
      keywords: [
        "rybelsus",
        "rybelsus portugal",
        "semaglutida oral",
        "rybelsus preço",
        "rybelsus preço portugal",
      ],
      h1: "Rybelsus em Portugal",
    },
    mounjaro: {
      title: "Mounjaro preço Portugal — ficha (tirzepatida)",
      description:
        "Mounjaro em Portugal: o que é a tirzepatida, diferença face ao Ozempic, conservação e ordens de grandeza de PVP — confirme sempre a Infomed.",
      keywords: [
        "mounjaro",
        "mounjaro preço portugal",
        "tirzepatida",
        "Mounjaro Portugal",
      ],
      h1: "Mounjaro (tirzepatida)",
    },
    ozempic: {
      title: "Ozempic dosagem e preço em Portugal — ficha",
      description:
        "Ozempic em Portugal: semaglutida semanal, titulação segundo a bula (não invente doses), diferenças face ao Wegovy/Rybelsus e PVP na Infomed.",
      keywords: [
        "ozempic",
        "ozempic preço portugal",
        "ozempic dosagem",
        "semaglutida",
        "Ozempic Portugal",
      ],
      h1: "Ozempic em Portugal",
    },
    trulicity: {
      title: "Trulicity preço Portugal — dulaglutida (ficha)",
      description:
        "Trulicity em Portugal: dulaglutida semanal, embalagens/canetas, indicação típica e onde ver PVP — não confundir com Mounjaro.",
      keywords: [
        "trulicity",
        "trulicity preço",
        "trulicity 1 5 preço",
        "dulaglutida",
        "GLP-1",
      ],
      h1: "Trulicity em Portugal",
    },
    saxenda: {
      title: "Saxenda preço Portugal — liraglutida diária (ficha)",
      description:
        "Saxenda em Portugal: liraglutida diária para gestão de peso, diferenças face ao Wegovy e Victoza, e o que confirmar na Infomed.",
      keywords: ["saxenda", "saxenda preço", "liraglutida", "Wegovy"],
      h1: "Saxenda em Portugal",
    },
    byetta: {
      title: "Byetta (exenatida) — para que serve? Ficha GLP-1",
      description:
        "Byetta: exenatida, agonista de GLP-1 mais antigo — para que serve, em que difere das canetas semanais actuais e o que confirmar na bula.",
      keywords: [
        "byetta",
        "byetta para que sirve",
        "exenatida",
        "exenatida diabetes",
        "GLP-1",
      ],
      h1: "Byetta (exenatida)",
    },
    wegovy: {
      title: "Wegovy preço Portugal — semaglutida para peso (ficha)",
      description:
        "Wegovy em Portugal: semaglutida semanal para gestão de peso, diferenças face ao Ozempic e ordens de grandeza de PVP na Infomed.",
      keywords: ["wegovy", "wegovy preço portugal", "semaglutida", "Ozempic"],
      h1: "Wegovy em Portugal",
    },
    victoza: {
      title: "Victoza vs Saxenda — liraglutida (ficha Portugal)",
      description:
        "Victoza em Portugal: liraglutida diária para diabetes tipo 2 — em que difere da Saxenda e o que confirmar na Infomed.",
      keywords: ["victoza", "victoza vs saxenda", "liraglutida", "Saxenda"],
      h1: "Victoza em Portugal",
    },
  };

  const custom = seoBySlug[slug];
  const title = custom?.title ?? `${med.brandName} (${med.substance})`;
  const description = custom?.description ?? med.summary;

  return pageMetadata({
    title,
    description,
    path: `/medicamentos/${med.slug}`,
    keywords: [
      med.brandName,
      med.substance,
      "GLP-1",
      ...(custom?.keywords ?? []),
      ...(med.alsoKnownAs ?? []),
    ],
  });
}

const seoH1BySlug: Record<string, string> = {
  rybelsus: "Rybelsus em Portugal",
  mounjaro: "Mounjaro (tirzepatida)",
  ozempic: "Ozempic em Portugal",
  trulicity: "Trulicity em Portugal",
  saxenda: "Saxenda em Portugal",
  byetta: "Byetta (exenatida)",
  wegovy: "Wegovy em Portugal",
  victoza: "Victoza em Portugal",
};

export default async function MedicationPage({ params }: Props) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const ficha = getFicha(slug);
  const related = relatedMedications(med);
  const url = absoluteUrl(`/medicamentos/${med.slug}/`);
  const h1 = seoH1BySlug[med.slug] ?? med.brandName;

  const schemas = [
    webPageLd({
      name: h1,
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
          <h1>{h1}</h1>
          <p className="substance">
            {med.brandName} · {med.substance} · {med.frequency}
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
                <strong>Preços em Portugal</strong>
                <span>PVP por dose e comparticipação</span>
              </Link>
            </li>
            {med.slug === "rybelsus" ? (
              <li>
                <Link href="/artigos/rybelsus-portugal/">
                  <strong>Rybelsus em Portugal</strong>
                  <span>Rotina, Infomed e consulta</span>
                </Link>
              </li>
            ) : null}
            {med.slug === "trulicity" ? (
              <li>
                <Link href="/artigos/trulicity-portugal/">
                  <strong>Trulicity em Portugal</strong>
                  <span>Preço, canetas e o que não confundir</span>
                </Link>
              </li>
            ) : null}
            {med.slug === "ozempic" || med.slug === "mounjaro" || med.slug === "wegovy" ? (
              <li>
                <Link href="/artigos/titulacao-doses/">
                  <strong>Titulação e doses</strong>
                  <span>Porque a caneta sobe aos poucos</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/artigos/titulacao-doses/">
                  <strong>Titulação e doses</strong>
                  <span>Porque a dose sobe aos poucos</span>
                </Link>
              </li>
            )}
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
