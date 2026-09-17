import { articles } from "@/content/articles";
import { faqItems } from "@/content/faq";
import { glossaryTerms } from "@/content/glossary";
import { medications } from "@/content/medications";

export type SearchHit = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  kind: "medicamento" | "artigo" | "faq" | "glossario" | "pagina";
};

const staticPages: SearchHit[] = [
  {
    id: "page-precos",
    title: "Preços em Portugal",
    blurb: "Ordens de grandeza PVP e o que verificar.",
    href: "/precos/",
    kind: "pagina",
  },
  {
    id: "page-medicos",
    title: "Médicos e checklist",
    blurb: "Critério de consulta e o que levar.",
    href: "/medicos/",
    kind: "pagina",
  },
  {
    id: "page-comparar",
    title: "Comparar medicamentos",
    blurb: "Dois nomes, factos lado a lado — sem veredicto.",
    href: "/comparar/",
    kind: "pagina",
  },
  {
    id: "page-onde",
    title: "Onde comprar",
    blurb: "Farmácia legal e sinais de alerta.",
    href: "/onde-comprar/",
    kind: "pagina",
  },
];

export function buildSearchIndex(): SearchHit[] {
  const meds: SearchHit[] = medications.map((m) => ({
    id: `med-${m.slug}`,
    title: `${m.brandName} (${m.substance})`,
    blurb: m.summary,
    href: `/medicamentos/${m.slug}/`,
    kind: "medicamento",
  }));

  const arts: SearchHit[] = articles.map((a) => ({
    id: `art-${a.slug}`,
    title: a.title,
    blurb: a.summary,
    href: `/artigos/${a.slug}/`,
    kind: "artigo",
  }));

  const faqs: SearchHit[] = faqItems.map((f) => ({
    id: `faq-${f.id}`,
    title: f.question,
    blurb: f.answer.slice(0, 140) + (f.answer.length > 140 ? "…" : ""),
    href: `/perguntas/#${f.id}`,
    kind: "faq",
  }));

  const gloss: SearchHit[] = glossaryTerms.map((g) => ({
    id: `gloss-${g.id}`,
    title: g.term,
    blurb: g.definition.slice(0, 140) + (g.definition.length > 140 ? "…" : ""),
    href: `/glossario/#${g.id}`,
    kind: "glossario",
  }));

  return [...meds, ...arts, ...faqs, ...gloss, ...staticPages];
}

export function searchHits(query: string, limit = 24): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const scored = buildSearchIndex()
    .map((hit) => {
      const hay = `${hit.title} ${hit.blurb}`.toLowerCase();
      let score = 0;
      for (const t of tokens) {
        if (hit.title.toLowerCase().includes(t)) score += 3;
        if (hay.includes(t)) score += 1;
      }
      return { hit, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.hit);
}
