"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { faqItems } from "@/content/faq";
import { glossary } from "@/content/glossary";
import { allNavLinks } from "@/content/nav";
import { matchesQuery } from "@/lib/search";

export function HomeSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const pages = allNavLinks
      .filter((item) => matchesQuery(query, item.label, item.description))
      .map((item) => ({
        href: item.href,
        title: item.label,
        detail: item.description,
        kind: "Página",
      }));

    const faqs = faqItems
      .filter((item) => matchesQuery(query, item.question, item.answer))
      .slice(0, 5)
      .map((item) => ({
        href: `/faq#${item.id}`,
        title: item.question,
        detail: item.answer,
        kind: "Pergunta",
      }));

    const terms = glossary
      .filter((item) =>
        matchesQuery(query, item.term, item.definition, ...(item.also ?? [])),
      )
      .slice(0, 5)
      .map((item) => ({
        href: `/glossario#${item.id}`,
        title: item.term,
        detail: item.definition,
        kind: "Glossário",
      }));

    return [...pages, ...faqs, ...terms].slice(0, 8);
  }, [query]);

  return (
    <div className="home-search">
      <label htmlFor="pesquisa-inicio">Procurar no guia</label>
      <input
        id="pesquisa-inicio"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Náuseas, dose esquecida, tiroide, checklist…"
        autoComplete="off"
      />
      {query.trim() ? (
        <ul className="search-results" aria-live="polite">
          {results.length === 0 ? (
            <li className="empty">Nada encontrado. Tente «náuseas», «bula» ou «pílula».</li>
          ) : (
            results.map((item) => (
              <li key={`${item.kind}-${item.href}`}>
                <Link href={item.href}>
                  <small>{item.kind}</small>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
