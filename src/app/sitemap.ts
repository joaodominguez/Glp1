import type { MetadataRoute } from "next";
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
  { path: "/precos/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/medicos/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/clinicas/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/brasil/", changeFrequency: "weekly", priority: 0.92 },
  { path: "/brasil/precos/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/brasil/medicos/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/brasil/clinicas/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/apps/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/o-que-e/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/como-funciona/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tratamento/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/efeitos/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/primeiras-semanas/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/glossario/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/checklist/", changeFrequency: "monthly", priority: 0.65 },
  { path: "/fontes/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/aviso/", changeFrequency: "yearly", priority: 0.4 },
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

  return [...pages, ...medPages];
}
