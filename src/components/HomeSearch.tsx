"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { faqItems } from "@/content/faq";
import { glossary } from "@/content/glossary";
import { medicationsSorted } from "@/content/medications";
import { allNavLinks } from "@/content/nav";
import { searchScore } from "@/lib/search";

export function HomeSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const pages = allNavLinks
      .map((item) => ({
        href: item.href,
        title: item.label,
        detail: item.description,
        kind: "Página",
        score: searchScore(query, [item.label, item.description]),
      }))
      .filter((item) => item.score > 0);

    const meds = medicationsSorted()
      .map((item) => ({
        href: `/medicamentos/${item.slug}`,
        title: item.brandName,
        detail: `${item.substance} — ${item.summary}`,
        kind: "Medicamento",
        score: searchScore(query, [
          item.brandName,
          item.substance,
          ...(item.alsoKnownAs ?? []),
          item.summary,
          item.company,
        ]),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    const faqs = faqItems
      .map((item) => ({
        href: `/faq#${item.id}`,
        title: item.question,
        detail: item.answer,
        kind: "Pergunta",
        score: searchScore(query, [item.question, item.answer]),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    const terms = glossary
      .map((item) => ({
        href: `/glossario#${item.id}`,
        title: item.term,
        detail: item.definition,
        kind: "Glossário",
        score: searchScore(query, [item.term, ...(item.also ?? []), item.definition]),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return [...meds, ...pages, ...faqs, ...terms]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [query]);

  return (
    <div className="home-search">
      <label htmlFor="pesquisa-inicio">Procurar no guia</label>
      <input
        id="pesquisa-inicio"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ozempic, náuseas, dose esquecida, tiroide…"
        autoComplete="off"
      />
      {query.trim() ? (
        <ul className="search-results" aria-live="polite">
          {results.length === 0 ? (
            <li className="empty">
              Nada encontrado. Tente «Ozempic», «náuseas» ou «bula».
            </li>
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
