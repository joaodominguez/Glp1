import type { Metadata } from "next";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Defaults to "website". Use "article" for long-form explainers. */
  type?: "website" | "article";
  keywords?: string[];
  /** Skip the "%s — Guia GLP-1" template (use for the homepage). */
  absoluteTitle?: boolean;
};

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}

const defaultOgImage = {
  url: absoluteUrl(OG_IMAGE_PATH),
  width: 1200,
  height: 630,
  alt: "Guia GLP-1 — Mounjaro, Ozempic, Wegovy em português",
};

export function pageMetadata({
  title,
  description,
  path,
  type = "article",
  keywords,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pt_PT",
      type,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
  };
}
