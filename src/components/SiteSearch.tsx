"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { searchHits } from "@/lib/search-index";

const kindLabel: Record<string, string> = {
  medicamento: "Medicamento",
  artigo: "Artigo",
  faq: "FAQ",
  glossario: "Glossário",
  pagina: "Página",
};

export function SiteSearch({
  id = "pesquisa-site",
  autofocus = false,
}: {
  id?: string;
  autofocus?: boolean;
}) {
  const [query, setQuery] = useState("");
  const hits = useMemo(() => searchHits(query), [query]);

  useEffect(() => {
    if (query.trim().length < 2) return;
    const t = window.setTimeout(() => {
      trackEvent("search_query", {
        search_term: query.trim().slice(0, 80),
        result_count: hits.length,
      });
    }, 600);
    return () => window.clearTimeout(t);
  }, [query, hits.length]);

  return (
    <div className="site-search">
      <label className="sr-only" htmlFor={id}>
        Pesquisar no guia
      </label>
      <input
        id={id}
        type="search"
        value={query}
        autoFocus={autofocus}
        placeholder="Ex.: Rybelsus, náuseas, comparticipação…"
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      {query.trim().length >= 2 ? (
        <ul className="search-results" role="listbox">
          {hits.length === 0 ? (
            <li className="search-empty">
              Sem resultados. Experimente «Rybelsus», «preço» ou «náuseas».
            </li>
          ) : (
            hits.map((hit) => (
              <li key={hit.id}>
                <Link
                  href={hit.href}
                  onClick={() =>
                    trackEvent("search_result_click", {
                      link_url: hit.href,
                      search_term: query.trim().slice(0, 80),
                    })
                  }
                >
                  <span className="search-kind">{kindLabel[hit.kind]}</span>
                  <strong>{hit.title}</strong>
                  <span className="blurb">{hit.blurb}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : (
        <p className="soft-note">Escreva pelo menos 2 letras.</p>
      )}
    </div>
  );
}
