"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/content/glossary";
import { matchesQuery } from "@/lib/search";

export function GlossaryExplorer() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return glossary.filter((item) =>
      matchesQuery(query, item.term, item.definition, ...(item.also ?? [])),
    );
  }, [query]);

  return (
    <div className="tool-panel">
      <label className="search-field">
        <span>Pesquisar termos</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: titulação, GIP, bula, HbA1c"
          autoComplete="off"
        />
      </label>

      <p className="result-count" aria-live="polite">
        {results.length === 0
          ? "Nenhum termo encontrado. Tente o nome comercial, a substância ou uma sigla."
          : `${results.length} termo${results.length === 1 ? "" : "s"}`}
      </p>

      <dl className="glossary-list">
        {results.map((item) => (
          <div key={item.id} id={item.id} className="glossary-item">
            <dt>{item.term}</dt>
            {item.also ? (
              <p className="also">Também: {item.also.join(", ")}</p>
            ) : null}
            <dd>{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
