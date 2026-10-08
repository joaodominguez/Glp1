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
  title: "Artigos — Rybelsus, preços, titulação e comparações",
  description:
    "Guias práticos em Portugal: Rybelsus, Trulicity, preços, titulação/dosagem, obstipação, comparações e Infomed.",
  path: "/artigos",
  keywords: [
    "rybelsus portugal",
    "mounjaro preço",
    "ozempic dosagem",
    "trulicity preço",
    "artigos GLP-1",
    "titulação",
  ],
});

const groups = [
  { id: "portugal", label: "Portugal", match: "Portugal" },
  { id: "comparar", label: "Comparar", match: "Comparar" },
  { id: "pratica", label: "Na prática", match: "Na prática" },
  { id: "seguranca", label: "Segurança", match: "Segurança" },
] as const;

export default function ArtigosPage() {
  const list = articlesSorted();

  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: "Artigos — boas práticas com GLP-1",
            description:
              "Série prática: Portugal, comparações, primeiras semanas e alarmes.",
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
        <h1>Artigos</h1>
        <p className="lede">
          Sem protocolo DIY nem promessas de redes. Agrupados pelo momento da
          jornada.
        </p>

        <nav className="filter-row" aria-label="Grupos de artigos">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              {g.label}
            </a>
          ))}
        </nav>

        {groups.map((g) => {
          const items = list.filter((a) => a.eyebrow === g.match);
          if (items.length === 0) return null;
          return (
            <section key={g.id} id={g.id} className="article-group">
              <h2>{g.label}</h2>
              <ul className="story-list">
                {items.map((article) => (
                  <li key={article.slug}>
                    <Link
                      className="story-link"
                      href={`/artigos/${article.slug}/`}
                    >
                      <span className="meta">{article.readMinutes} min</span>
                      <strong>{article.title}</strong>
                      <span className="blurb">{article.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
