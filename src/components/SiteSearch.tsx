"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  popularSearches,
  searchCompletions,
  searchGuide,
  type SearchResult,
  type SearchSuggestion,
} from "@/lib/search-index";

type SiteSearchProps = {
  variant?: "home" | "header" | "inline";
  id?: string;
  label?: string;
  placeholder?: string;
  /** Hide visible label (keep for screen readers). */
  hideLabel?: boolean;
};

function highlightText(text: string, query: string): ReactNode {
  const trimmed = query.trim();
  if (!trimmed) return text;

  const tokens = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
  let parts: ReactNode[] = [text];

  for (const token of tokens) {
    const next: ReactNode[] = [];
    for (const part of parts) {
      if (typeof part !== "string") {
        next.push(part);
        continue;
      }
      const lower = part.toLowerCase();
      let cursor = 0;
      while (cursor < part.length) {
        const index = lower.indexOf(token, cursor);
        if (index === -1) {
          next.push(part.slice(cursor));
          break;
        }
        if (index > cursor) next.push(part.slice(cursor, index));
        next.push(
          <mark key={`${index}-${token}-${cursor}`} className="search-highlight">
            {part.slice(index, index + token.length)}
          </mark>,
        );
        cursor = index + token.length;
      }
    }
    parts = next;
  }
  return parts;
}

export function SiteSearch({
  variant = "home",
  id,
  label = "Procurar no guia",
  placeholder = "Ozempic, náuseas, dose esquecida, tiroide…",
  hideLabel = false,
}: SiteSearchProps) {
  const autoId = useId();
  const inputId = id ?? `site-search-${autoId}`;
  const listboxId = `${inputId}-listbox`;
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const results = useMemo(
    () => (trimmed ? searchGuide(trimmed, 10) : []),
    [trimmed],
  );
  const suggestions = useMemo(
    () => searchCompletions(trimmed, 6),
    [trimmed],
  );

  const showSuggestions = open && suggestions.length > 0 && results.length === 0;
  const showResults = open && trimmed.length > 0;
  const panelOpen = showSuggestions || showResults;

  const selectableItems: Array<
    | { type: "suggestion"; item: SearchSuggestion }
    | { type: "result"; item: SearchResult }
  > = useMemo(() => {
    if (showResults) {
      return results.map((item) => ({ type: "result" as const, item }));
    }
    if (showSuggestions) {
      return suggestions.map((item) => ({ type: "suggestion" as const, item }));
    }
    return [];
  }, [showResults, showSuggestions, results, suggestions]);

  const close = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      close();
      setQuery("");
      router.push(href);
    },
    [close, router],
  );

  const applySuggestion = useCallback((label: string) => {
    setQuery(label);
    setOpen(true);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [close]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!panelOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (event.key === "Escape") {
      close();
      inputRef.current?.blur();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((value) =>
        value < selectableItems.length - 1 ? value + 1 : 0,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((value) =>
        value > 0 ? value - 1 : selectableItems.length - 1,
      );
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      const selected = selectableItems[activeIndex];
      if (!selected) return;
      if (selected.type === "suggestion" && !trimmed) {
        applySuggestion(selected.item.label);
        return;
      }
      navigateTo(selected.item.href);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`site-search site-search--${variant}${panelOpen ? " is-open" : ""}`}
    >
      <label htmlFor={inputId} className={hideLabel ? "sr-only" : undefined}>
        {label}
      </label>
      <div className="site-search-field">
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          role="combobox"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={panelOpen}
          aria-controls={panelOpen ? listboxId : undefined}
          aria-activedescendant={
            activeIndex >= 0 ? `${inputId}-option-${activeIndex}` : undefined
          }
        />
        {panelOpen ? (
          <div className="site-search-panel" role="presentation">
            {showSuggestions ? (
              <>
                <p className="site-search-panel-label">
                  {trimmed ? "Sugestões" : "Pesquisas frequentes"}
                </p>
                <ul
                  id={listboxId}
                  className="search-suggestions"
                  role="listbox"
                  aria-label={trimmed ? "Sugestões de pesquisa" : "Pesquisas frequentes"}
                >
                  {suggestions.map((item, index) => (
                    <li key={`${item.href}-${item.label}`} role="presentation">
                      <button
                        type="button"
                        id={`${inputId}-option-${index}`}
                        role="option"
                        aria-selected={activeIndex === index}
                        className={activeIndex === index ? "is-active" : undefined}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => {
                          if (trimmed) {
                            applySuggestion(item.label);
                          } else {
                            navigateTo(item.href);
                          }
                        }}
                      >
                        <strong>{highlightText(item.label, trimmed)}</strong>
                        {item.hint ? <span>{item.hint}</span> : null}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {showResults ? (
              <>
                <p className="site-search-panel-label" aria-live="polite">
                  {results.length === 0
                    ? "Nada encontrado"
                    : `${results.length} resultado${results.length === 1 ? "" : "s"}`}
                </p>
                <ul
                  id={listboxId}
                  className="search-results"
                  role="listbox"
                  aria-label="Resultados da pesquisa"
                >
                  {results.length === 0 ? (
                    <li className="empty" role="presentation">
                      Nada encontrado. Tente «Ozempic», «náuseas» ou «bula».
                    </li>
                  ) : (
                    results.map((item, index) => (
                      <li key={`${item.kind}-${item.href}`} role="presentation">
                        <Link
                          href={item.href}
                          id={`${inputId}-option-${index}`}
                          role="option"
                          aria-selected={activeIndex === index}
                          className={activeIndex === index ? "is-active" : undefined}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => close()}
                        >
                          <small>{item.kind}</small>
                          <strong>{highlightText(item.title, trimmed)}</strong>
                          <span>{highlightText(item.detail, trimmed)}</span>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
      </div>

      {variant === "home" && !panelOpen ? (
        <div className="site-search-chips" aria-label="Atalhos de pesquisa">
          {popularSearches.slice(0, 5).map((item) => (
            <button
              key={item.href}
              type="button"
              className="search-chip"
              onClick={() => applySuggestion(item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
