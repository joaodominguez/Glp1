import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsLink } from "@/components/AnalyticsLink";
import { JsonLd } from "@/components/JsonLd";
import { PenIllustration } from "@/components/PenIllustration";
import { articlesSorted } from "@/content/articles";
import { medicationsSorted } from "@/content/medications";
import { absoluteUrl, pageMetadata, webPageLd } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} — Mounjaro, Ozempic, Wegovy, Rybelsus`,
  description:
    "Guia em português sobre medicamentos GLP-1: fichas, preços em Portugal, médicos, FAQ e artigos práticos. Sem venda de medicamentos.",
  path: "/",
  type: "website",
  absoluteTitle: true,
  keywords: [
    "Mounjaro",
    "Ozempic",
    "Wegovy",
    "Rybelsus Portugal",
    "GLP-1",
    "tirzepatida",
    "semaglutida",
  ],
});

export default function HomePage() {
  const meds = medicationsSorted();
  const posts = articlesSorted().slice(0, 8);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medicamentos GLP-1 e afins",
    itemListElement: meds.map((med, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: med.brandName,
      url: absoluteUrl(`/medicamentos/${med.slug}/`),
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: SITE_NAME,
            description: SITE_TAGLINE,
            path: "/",
            type: "MedicalWebPage",
          }),
          itemListLd,
        ]}
      />
      <section className="hero shell">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Guia GLP-1</p>
            <h1>Vais começar Mounjaro. Começa por perceber o que é.</h1>
            <p className="lede">
              Onze nomes comerciais, seis substâncias. Preços, onde comprar com
              segurança e que médico consultar — em português claro.
            </p>
            <div className="cta-row">
              <AnalyticsLink
                className="btn btn-primary"
                href="/medicamentos/mounjaro/"
                event="cta_mounjaro"
              >
                Ver Mounjaro
              </AnalyticsLink>
              <AnalyticsLink
                className="btn btn-ghost"
                href="/artigos/rybelsus-portugal/"
                event="cta_rybelsus"
              >
                Rybelsus em Portugal
              </AnalyticsLink>
            </div>
          </div>
          <figure className="hero-photo">
            <PenIllustration
              mechanism="gip-glp1"
              brandName="Mounjaro"
              substance="tirzepatida"
              slug="mounjaro"
              title="Ilustração editorial da caneta de Mounjaro"
              priority
            />
            <figcaption>Ilustração editorial — caneta genérica identificada</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>Por onde começar</h2>
          <p>Quatro caminhos. Sem menu infinito.</p>
        </div>
        <ul className="path-grid path-grid-4">
          <li>
            <AnalyticsLink
              className="path-card"
              href="/medicamentos/mounjaro/"
              event="path_medicamento"
            >
              <strong>O medicamento</strong>
              <span>O que é a tirzepatida e em que difere do Ozempic.</span>
            </AnalyticsLink>
          </li>
          <li>
            <AnalyticsLink
              className="path-card"
              href="/artigos/rybelsus-portugal/"
              event="path_rybelsus"
            >
              <strong>Rybelsus</strong>
              <span>Comprimido em Portugal — rotina e Infomed.</span>
            </AnalyticsLink>
          </li>
          <li>
            <AnalyticsLink
              className="path-card"
              href="/medicos/#checklist"
              event="path_checklist"
            >
              <strong>Checklist</strong>
              <span>O que levar à consulta — com vistos no browser.</span>
            </AnalyticsLink>
          </li>
          <li>
            <AnalyticsLink
              className="path-card"
              href="/pesquisa/"
              event="path_pesquisa"
            >
              <strong>Pesquisar</strong>
              <span>Medicamentos, artigos, FAQ e glossário.</span>
            </AnalyticsLink>
          </li>
        </ul>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>Artigos</h2>
          <p>Boas práticas e truques do dia a dia — sem marketing.</p>
        </div>
        <ul className="article-grid">
          {posts.map((article) => (
            <li key={article.slug}>
              <Link className="article-card" href={`/artigos/${article.slug}/`}>
                <span className="meta">
                  {article.eyebrow} · {article.readMinutes} min
                </span>
                <strong>{article.title}</strong>
                <span className="blurb">{article.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="soft-note" style={{ marginTop: "1.25rem" }}>
          <Link href="/artigos/">Ver todos os artigos</Link>
          {" · "}
          <Link href="/comparar/">Comparar medicamentos</Link>
          {" · "}
          <Link href="/artigos/dor-abdominal-vesicula/">Dor abdominal</Link>
          {" · "}
          <Link href="/artigos/hipoglicemia-quando-preocupar/">Hipoglicemia</Link>
        </p>
      </section>

      <section className="section shell" id="medicamentos">
        <div className="section-head">
          <h2>Os 11 medicamentos</h2>
          <p>
            A mesma substância chega à farmácia com nomes diferentes. Cada
            página segue o mesmo formato.
          </p>
        </div>
        <ul className="med-grid">
          {meds.map((med) => (
            <li key={med.slug}>
              <Link className="med-card" href={`/medicamentos/${med.slug}/`}>
                <strong>{med.brandName}</strong>
                <span className="meta">
                  {med.substance} · {med.frequency}
                </span>
                <span className="blurb">{med.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
