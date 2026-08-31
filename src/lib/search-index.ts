import { faqItems } from "@/content/faq";
import { glossary } from "@/content/glossary";
import { medicationsSorted } from "@/content/medications";
import { allNavLinks } from "@/content/nav";
import { searchScore } from "@/lib/search";

export type SearchResult = {
  href: string;
  title: string;
  detail: string;
  kind: "Medicamento" | "Página" | "Pergunta" | "Glossário";
  score: number;
};

export type SearchSuggestion = {
  label: string;
  href: string;
  hint?: string;
};

/** Quick picks shown before the user types (or with very short input). */
export const popularSearches: SearchSuggestion[] = [
  { label: "Ozempic", href: "/medicamentos/ozempic", hint: "semaglutida" },
  { label: "Mounjaro", href: "/medicamentos/mounjaro", hint: "tirzepatida" },
  { label: "Wegovy", href: "/medicamentos/wegovy", hint: "peso" },
  { label: "Náuseas", href: "/nauseas", hint: "efeitos" },
  { label: "Dose esquecida", href: "/dose-esquecida", hint: "bula" },
  { label: "Preços Portugal", href: "/precos", hint: "PVP" },
  { label: "Mounjaro vs Ozempic", href: "/mounjaro-vs-ozempic", hint: "comparar" },
  { label: "Glossário", href: "/glossario", hint: "termos" },
];

function buildIndex(): SearchResult[] {
  const pages = allNavLinks.map((item) => ({
    href: item.href,
    title: item.label,
    detail: item.description,
    kind: "Página" as const,
    score: 0,
  }));

  const meds = medicationsSorted().map((item) => ({
    href: `/medicamentos/${item.slug}`,
    title: item.brandName,
    detail: `${item.substance} — ${item.summary}`,
    kind: "Medicamento" as const,
    score: 0,
  }));

  const faqs = faqItems.map((item) => ({
    href: `/faq#${item.id}`,
    title: item.question,
    detail: item.answer,
    kind: "Pergunta" as const,
    score: 0,
  }));

  const terms = glossary.map((item) => ({
    href: `/glossario#${item.id}`,
    title: item.term,
    detail: item.definition,
    kind: "Glossário" as const,
    score: 0,
  }));

  return [...meds, ...pages, ...faqs, ...terms];
}

const searchFields: Record<
  SearchResult["kind"],
  (item: SearchResult) => string[]
> = {
  Medicamento: (item) => {
    const med = medicationsSorted().find(
      (m) => `/medicamentos/${m.slug}` === item.href,
    );
    if (!med) return [item.title, item.detail];
    return [
      med.brandName,
      med.substance,
      ...(med.alsoKnownAs ?? []),
      med.summary,
      med.company,
    ];
  },
  Página: (item) => {
    const page = allNavLinks.find((p) => p.href === item.href);
    return page ? [page.label, page.description] : [item.title, item.detail];
  },
  Pergunta: (item) => {
    const faq = faqItems.find((f) => `/faq#${f.id}` === item.href);
    return faq ? [faq.question, faq.answer] : [item.title, item.detail];
  },
  Glossário: (item) => {
    const term = glossary.find((g) => `/glossario#${g.id}` === item.href);
    return term
      ? [term.term, ...(term.also ?? []), term.definition]
      : [item.title, item.detail];
  },
};

const index = buildIndex();

export function searchGuide(query: string, limit = 10): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  return index
    .map((item) => ({
      ...item,
      score: searchScore(trimmed, searchFields[item.kind](item)),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Title/label completions to help while typing (prefix-aware). */
export function searchCompletions(query: string, limit = 6): SearchSuggestion[] {
  const trimmed = query.trim();
  if (!trimmed) return popularSearches.slice(0, limit);

  const fromPopular = popularSearches
    .filter((item) => searchScore(trimmed, [item.label, item.hint ?? ""]) > 0)
    .slice(0, 3);

  const fromIndex = index
    .map((item) => ({
      label: item.title,
      href: item.href,
      hint: item.kind,
      score: searchScore(trimmed, searchFields[item.kind](item)),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ label, href, hint }) => ({ label, href, hint }));

  const seen = new Set<string>();
  return [...fromPopular, ...fromIndex].filter((item) => {
    const key = `${item.href}-${item.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}
