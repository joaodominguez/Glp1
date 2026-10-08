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
  title: `${SITE_NAME} — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal`,
  description:
    "Guia GLP-1 (meuglp1.pt): fichas, preços em Portugal, titulação, médicos e FAQ em português. Sem venda de medicamentos.",
  path: "/",
  type: "website",
  absoluteTitle: true,
  keywords: [
    "Guia GLP-1",
    "meuglp1.pt",
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
            <p className="eyebrow">meuglp1.pt · Portugal</p>
            <h1>Guia GLP-1</h1>
            <p className="lede">
              Rybelsus, Mounjaro, Ozempic, Wegovy e mais — fichas, preços e o
              que perguntar na consulta. Em português claro. Sem venda de
              medicamentos.
            </p>
            <div className="cta-row">
              <AnalyticsLink
                className="btn btn-primary"
                href="/precos/"
                event="cta_precos"
              >
                Ver preços
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
              href="/precos/"
              event="path_precos"
            >
              <strong>Preços</strong>
              <span>PVP por dose em Portugal — Infomed manda.</span>
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
              href="/artigos/titulacao-doses/"
              event="path_titulacao"
            >
              <strong>Dosagem / titulação</strong>
              <span>Porque a caneta sobe aos poucos.</span>
            </AnalyticsLink>
          </li>
          <li>
            <AnalyticsLink
              className="path-card"
              href="/clinicas/"
              event="path_clinicas"
            >
              <strong>Clínicas</strong>
              <span>Critério — sem ranking nem anúncios.</span>
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
          <Link href="/clinicas/">Clínicas (critério)</Link>
          {" · "}
          <Link href="/comparar/">Comparar</Link>
          {" · "}
          <Link href="/artigos/como-ler-infomed/">Ler Infomed</Link>
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
