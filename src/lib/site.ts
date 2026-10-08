export const SITE_URL = "https://www.meuglp1.pt";
export const SITE_NAME = "Guia GLP-1";
export const SITE_TAGLINE =
  "Informação clara em português sobre medicamentos GLP-1 e afins — preços, fichas e o que perguntar na consulta.";
export const CONTENT_REVIEWED_AT = "2026-10-08";
export const CONTENT_REVIEWED_LABEL = "8 de outubro de 2026";
export const OG_IMAGE_PATH = "/og-image.svg";

/** Google Analytics 4 measurement ID. */
export const GA_MEASUREMENT_ID = "G-NQVW713D8K";

/** Nav ordered by live GSC demand (preços first). */
export const navLinks = [
  { href: "/precos/", label: "Preços" },
  { href: "/medicamentos/", label: "Medicamentos" },
  { href: "/artigos/", label: "Artigos" },
  { href: "/clinicas/", label: "Clínicas" },
] as const;

/** Pillar brands for Portugal SEO (impressions + intent). */
export const PILLAR_MED_SLUGS = [
  "rybelsus",
  "mounjaro",
  "ozempic",
  "wegovy",
  "trulicity",
  "saxenda",
] as const;
