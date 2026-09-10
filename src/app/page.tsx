import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PenIllustration } from "@/components/PenIllustration";
import { articlesSorted } from "@/content/articles";
import { medicationsSorted } from "@/content/medications";
import { absoluteUrl, pageMetadata, webPageLd } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} — Mounjaro, Ozempic, Wegovy e a classe GLP-1`,
  description: SITE_TAGLINE,
  path: "/",
  type: "website",
  absoluteTitle: true,
});

export default function HomePage() {
  const meds = medicationsSorted();
  const posts = articlesSorted();

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
              <Link className="btn btn-primary" href="/medicamentos/mounjaro/">
                Ver Mounjaro
              </Link>
              <Link className="btn btn-ghost" href="/artigos/">
                Boas práticas
              </Link>
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
            <Link className="path-card" href="/medicamentos/mounjaro/">
              <strong>O medicamento</strong>
              <span>O que é a tirzepatida e em que difere do Ozempic.</span>
            </Link>
          </li>
          <li>
            <Link className="path-card" href="/artigos/">
              <strong>Na prática</strong>
              <span>Primeiras semanas, náuseas, viagem e proteína.</span>
            </Link>
          </li>
          <li>
            <Link className="path-card" href="/precos/">
              <strong>O preço</strong>
              <span>Ordens de grandeza em Portugal e o que verificar.</span>
            </Link>
          </li>
          <li>
            <Link className="path-card" href="/medicos/">
              <strong>O médico</strong>
              <span>Que especialidade e o que levar à consulta.</span>
            </Link>
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
