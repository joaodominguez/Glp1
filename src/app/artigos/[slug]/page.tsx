import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PenIllustration } from "@/components/PenIllustration";
import { articles, getArticle } from "@/content/articles";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artigo" };
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/artigos/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = absoluteUrl(`/artigos/${article.slug}/`);
  const illo = article.illustration;

  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.summary,
            datePublished: article.publishedAt,
            dateModified: CONTENT_REVIEWED_AT,
            inLanguage: "pt-PT",
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: { "@type": "Organization", name: SITE_NAME },
            url,
            isAccessibleForFree: true,
          },
          webPageLd({
            name: article.title,
            description: article.summary,
            path: `/artigos/${article.slug}`,
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/artigos" },
            { name: article.title, path: `/artigos/${article.slug}` },
          ]),
        ]}
      />

      <nav className="crumbs" aria-label="Trilho">
        <Link href="/">Início</Link>
        {" / "}
        <Link href="/artigos/">Artigos</Link>
        {" / "}
        {article.title}
      </nav>

      <header className="article-hero">
        <div>
          <p className="eyebrow">
            {article.eyebrow} · {article.readMinutes} min
          </p>
          <h1>{article.title}</h1>
          <p className="lede">{article.lede}</p>
          <div className="disclaimer">
            Conteúdo informativo. Não substitui consulta, bula nem prescrição.
            As práticas abaixo são hábitos gerais — o seu médico manda no seu
            caso.
          </div>
        </div>
        <figure className="article-hero-art">
          <PenIllustration
            mechanism={illo.mechanism}
            brandName={illo.brandName}
            substance={illo.substance}
            title={`Ilustração editorial — ${illo.brandName}`}
          />
          <figcaption>
            {illo.brandName} · ilustração editorial (nome na caneta)
          </figcaption>
        </figure>
      </header>

      <article className="article article-body">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="plain-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <h2>Quando contactar o médico (ou urgência)</h2>
        <ul className="points points-2">
          {article.whenToCall.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="next-reads">
          <h2>Continuar</h2>
          <ul>
            {article.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <strong>{item.label}</strong>
                  <span>{item.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <p className="verified">
        Publicado{" "}
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>.
        Verificação editorial — não é revisão clínica.
      </p>
    </div>
  );
}
