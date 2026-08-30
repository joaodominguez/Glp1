"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { faqCategories, faqItems, type FaqCategory } from "@/content/faq";
import { matchesQuery } from "@/lib/search";

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "todas">("todas");

  const results = useMemo(() => {
    return faqItems.filter((item) => {
      const inCategory = category === "todas" || item.category === category;
      return inCategory && matchesQuery(query, item.question, item.answer);
    });
  }, [query, category]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const target = document.getElementById(hash);
    const details = target?.querySelector("details");
    if (details) details.open = true;
    target?.scrollIntoView({ block: "center" });
  }, []);

  return (
    <div className="tool-panel">
      <div className="tool-toolbar">
        <label className="search-field">
          <span>Pesquisar perguntas</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: náuseas, dose, gravidez, pílula"
            autoComplete="off"
          />
        </label>
        <label className="search-field">
          <span>Tema</span>
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value as FaqCategory | "todas");
              setQuery("");
            }}
          >
            <option value="todas">Todas</option>
            {faqCategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {results.length === 0
          ? "Nenhuma pergunta corresponde à pesquisa. Tente outra palavra, ou abra o glossário."
          : `${results.length} pergunta${results.length === 1 ? "" : "s"}`}
      </p>

      <ul className="faq-list">
        {results.map((item) => (
          <li key={item.id} id={item.id}>
            <details>
              <summary className="faq-question">
                <span>{item.question}</span>
              </summary>
              <p className="faq-answer">{item.answer}</p>
              {item.relatedHref ? (
                <p className="faq-related">
                  <Link href={item.relatedHref}>
                    {item.relatedLabel ?? "Ler mais →"}
                  </Link>
                </p>
              ) : null}
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
