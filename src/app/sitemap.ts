import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { medications } from "@/content/medications";
import { CONTENT_REVIEWED_AT, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/medicamentos/", changeFrequency: "weekly", priority: 0.95 },
  { path: "/artigos/", changeFrequency: "weekly", priority: 0.92 },
  { path: "/precos/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/medicos/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/onde-comprar/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/perguntas/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/pesquisa/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/comparar/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/sugerir/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/glossario/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/fontes/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sobre/", changeFrequency: "yearly", priority: 0.55 },
  { path: "/privacidade/", changeFrequency: "yearly", priority: 0.45 },
  { path: "/aviso/", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_REVIEWED_AT);

  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const medPages = medications.map((med) => ({
    url: `${SITE_URL}/medicamentos/${med.slug}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const articlePages = articles.map((article) => ({
    url: `${SITE_URL}/artigos/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  return [...pages, ...medPages, ...articlePages];
}
