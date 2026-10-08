import type { Metadata } from "next";
import {
  CONTENT_REVIEWED_AT,
  OG_IMAGE_PATH,
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

const ASSET_EXT = /\.(?:svg|png|jpe?g|webp|gif|ico|pdf|txt|xml|json|woff2?)$/i;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // Static assets must not get trailingSlash — Apache serves the file, not a folder.
  if (ASSET_EXT.test(normalized)) {
    return `${SITE_URL}${normalized.replace(/\/+$/, "")}`;
  }
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
  const image = {
    url: absoluteUrl(OG_IMAGE_PATH),
    width: 1200,
    height: 630,
    alt: ogTitle,
  };
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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.url],
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
      logo: absoluteUrl("/brand-mark.svg"),
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

/** Sitewide graph — no MedicalWebPage here (avoids polluting every URL). */
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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/pesquisa/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["meuglp1.pt", "Meu GLP-1", "Guia GLP1 Portugal"],
        url: absoluteUrl("/"),
        logo: absoluteUrl("/brand-mark.svg"),
        areaServed: {
          "@type": "Country",
          name: "Portugal",
        },
        description:
          "Guia informativo em português (Portugal) sobre medicamentos GLP-1 e afins. Domínio meuglp1.pt — não vende medicamentos nem substitui consulta médica.",
      },
    ],
  };
}
