import type { Metadata } from "next";
import { Libre_Bodoni, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { ThemeProvider } from "@/components/ThemeProvider";
import { absoluteUrl } from "@/lib/seo";
import {
  CONTENT_REVIEWED_AT,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const display = Libre_Bodoni({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guia GLP-1 — Mounjaro, Ozempic, Wegovy e a classe GLP-1",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Informação em português claro sobre medicamentos GLP-1 e afins: Mounjaro (tirzepatida), Ozempic, Wegovy, Saxenda, Victoza, Trulicity e outros. Como funcionam, efeitos, FAQ e checklist. Não substitui aconselhamento médico.",
  applicationName: SITE_NAME,
  keywords: [
    "GLP-1",
    "Mounjaro",
    "tirzepatida",
    "Ozempic",
    "Wegovy",
    "semaglutida",
    "Saxenda",
    "Trulicity",
    "medicamentos GLP-1",
    "Portugal",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    title: "Guia GLP-1 — Mounjaro, Ozempic, Wegovy e a classe GLP-1",
    description: SITE_TAGLINE,
    images: [
      {
        url: absoluteUrl("/hero-pen.png"),
        width: 1920,
        height: 1080,
        alt: "Caneta injetora semanal ilustrativa — Guia GLP-1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia GLP-1 — Mounjaro, Ozempic, Wegovy e a classe GLP-1",
    description: SITE_TAGLINE,
    images: [absoluteUrl("/hero-pen.png")],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand-mark.svg", type: "image/svg+xml" },
    ],
  },
};

const themeBootScript = `
(function () {
  try {
    var key = "guia-glp1-theme";
    var stored = localStorage.getItem(key);
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_TAGLINE,
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: absoluteUrl("/brand-mark.svg"),
      description:
        "Guia informativo em português sobre agonistas de GLP-1 e medicamentos afins. Conteúdo educativo — não substitui consulta médica.",
    },
    {
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}/#medical`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      dateModified: CONTENT_REVIEWED_AT,
      inLanguage: "pt-PT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: {
        "@type": "MedicalCondition",
        name: "Diabetes mellitus tipo 2 e gestão de peso com agonistas de GLP-1",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      data-theme="dark"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full">
        <JsonLd data={organizationLd} />
        <ThemeProvider>
          <PageShell>{children}</PageShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
