import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { articlesSorted } from "@/content/articles";
import {
  absoluteUrl,
  breadcrumbLd,
  pageMetadata,
  webPageLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Artigos — boas práticas com GLP-1",
  description:
    "Guias práticos em português: primeiras semanas, náuseas, dose esquecida, viagem, proteína e músculo com canetas GLP-1.",
  path: "/artigos",
});

export default function ArtigosPage() {
  const list = articlesSorted();

  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Artigos — boas práticas com GLP-1",
            description:
              "Série Na prática: primeiros passos, efeitos, logística e alimentação.",
            path: "/artigos",
            type: "CollectionPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/artigos" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Artigos Guia GLP-1",
            numberOfItems: list.length,
            itemListElement: list.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: article.title,
              url: absoluteUrl(`/artigos/${article.slug}/`),
            })),
          },
        ]}
      />
      <div className="shell page-simple">
        <p className="eyebrow">Na prática</p>
        <h1>Artigos e boas práticas</h1>
        <p className="lede">
          Truques do dia a dia, sem protocolo DIY nem promessas de redes
          sociais. Quatro guias para quem começa — ou já está a meio.
        </p>

        <ul className="article-grid">
          {list.map((article) => (
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
      </div>
    </>
  );
}
