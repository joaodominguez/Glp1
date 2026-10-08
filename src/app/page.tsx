import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnalyticsLink } from "@/components/AnalyticsLink";
import { JsonLd } from "@/components/JsonLd";
import { articlesSorted } from "@/content/articles";
import { getMedication, medicationsSorted } from "@/content/medications";
import { absoluteUrl, pageMetadata, webPageLd } from "@/lib/seo";
import { PILLAR_MED_SLUGS, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal`,
  description:
    "Guia GLP-1 (meuglp1.pt): preços em Portugal, fichas, titulação e o que perguntar na consulta. Sem venda de medicamentos.",
  path: "/",
  type: "website",
  absoluteTitle: true,
  keywords: [
    "Guia GLP-1",
    "meuglp1.pt",
    "mounjaro preço portugal",
    "rybelsus portugal",
    "ozempic dosagem",
    "trulicity preço",
    "GLP-1 Portugal",
  ],
});

const journeys = [
  {
    href: "/precos/",
    label: "Preços em Portugal",
    blurb: "PVP por dose — Mounjaro, Ozempic, Rybelsus, Trulicity.",
    event: "path_precos",
  },
  {
    href: "/artigos/rybelsus-portugal/",
    label: "Rybelsus",
    blurb: "Comprimido, rotina de toma e Infomed.",
    event: "path_rybelsus",
  },
  {
    href: "/artigos/titulacao-doses/",
    label: "Dosagem / titulação",
    blurb: "Porque a caneta sobe aos poucos — sem inventar doses.",
    event: "path_titulacao",
  },
  {
    href: "/clinicas/",
    label: "Clínicas",
    blurb: "Critério de consulta — sem ranking.",
    event: "path_clinicas",
  },
] as const;

export default function HomePage() {
  const pillars = PILLAR_MED_SLUGS.map((slug) => getMedication(slug)).filter(
    (med): med is NonNullable<typeof med> => Boolean(med),
  );
  const posts = articlesSorted().slice(0, 6);
  const medCount = medicationsSorted().length;

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
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Medicamentos GLP-1 em Portugal",
            itemListElement: pillars.map((med, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: med.brandName,
              url: absoluteUrl(`/medicamentos/${med.slug}/`),
            })),
          },
        ]}
      />

      <section className="hero-bleed" aria-label="Guia GLP-1">
        <figure className="hero-bleed-media" aria-hidden="true">
          <Image
            src="/illustrations/pens/mounjaro.png?v=20260914"
            alt=""
            width={1376}
            height={768}
            className="hero-bleed-img"
            priority
            sizes="100vw"
          />
        </figure>
        <div className="hero-bleed-scrim" aria-hidden="true" />
        <div className="hero-bleed-copy shell">
          <p className="eyebrow hero-anim">Portugal · meuglp1.pt</p>
          <h1 className="brand-hero hero-anim">Guia GLP-1</h1>
          <p className="lede hero-anim hero-anim-delay">
            Preços, fichas e o que perguntar na consulta — Rybelsus, Mounjaro,
            Ozempic e Wegovy em português claro. Sem venda de medicamentos.
          </p>
          <div className="cta-row hero-anim hero-anim-delay-2">
            <AnalyticsLink
              className="btn btn-primary"
              href="/precos/"
              event="cta_precos"
            >
              Ver preços em Portugal
            </AnalyticsLink>
            <AnalyticsLink
              className="btn btn-ghost"
              href="/artigos/rybelsus-portugal/"
              event="cta_rybelsus"
            >
              Rybelsus
            </AnalyticsLink>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>Por onde começar</h2>
          <p>Quatro caminhos alinhados ao que as pessoas procuram.</p>
        </div>
        <ul className="journey-list">
          {journeys.map((item) => (
            <li key={item.href}>
              <AnalyticsLink
                className="journey-link"
                href={item.href}
                event={item.event}
              >
                <strong>{item.label}</strong>
                <span>{item.blurb}</span>
              </AnalyticsLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="section shell" id="medicamentos">
        <div className="section-head">
          <h2>Medicamentos em Portugal</h2>
          <p>
            Os nomes com procura real primeiro. Os outros {medCount - pillars.length}{" "}
            estão no hub completo.
          </p>
        </div>
        <ul className="pillar-list">
          {pillars.map((med) => (
            <li key={med.slug}>
              <Link
                className="pillar-link"
                href={`/medicamentos/${med.slug}/`}
              >
                <strong>{med.brandName}</strong>
                <span className="meta">
                  {med.substance} · {med.frequency}
                </span>
                <span className="blurb">{med.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="soft-note">
          <Link href="/medicamentos/">Ver todos os {medCount} nomes</Link>
          {" · "}
          <Link href="/comparar/">Comparar dois</Link>
        </p>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>Artigos</h2>
          <p>Prática, comparações e Portugal — sem promessas de redes.</p>
        </div>
        <ul className="story-list">
          {posts.map((article) => (
            <li key={article.slug}>
              <Link className="story-link" href={`/artigos/${article.slug}/`}>
                <span className="meta">
                  {article.eyebrow} · {article.readMinutes} min
                </span>
                <strong>{article.title}</strong>
                <span className="blurb">{article.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="soft-note">
          <Link href="/artigos/">Todos os artigos</Link>
          {" · "}
          <Link href="/perguntas/">FAQ</Link>
          {" · "}
          <Link href="/artigos/como-ler-infomed/">Ler Infomed</Link>
        </p>
      </section>
    </>
  );
}
