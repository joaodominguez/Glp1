import type { Metadata } from "next";
import {
  CONTENT_REVIEWED_AT,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}

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
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function webPageLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "MedicalWebPage" | "FAQPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    dateModified: CONTENT_REVIEWED_AT,
    inLanguage: "pt-PT",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function siteGraphLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_TAGLINE,
        inLanguage: "pt-PT",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        description:
          "Guia informativo em português sobre medicamentos GLP-1 e afins. Não vende medicamentos nem substitui consulta médica.",
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE_URL}/#medical`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_TAGLINE,
        inLanguage: "pt-PT",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "MedicalCondition",
          name: "Diabetes mellitus tipo 2 e gestão de peso com agonistas de GLP-1",
        },
        lastReviewed: CONTENT_REVIEWED_AT,
        audience: {
          "@type": "PeopleAudience",
          geographicArea: {
            "@type": "Country",
            name: "Portugal",
          },
        },
      },
    ],
  };
}
