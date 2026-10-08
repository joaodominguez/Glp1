import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, siteGraphLd } from "@/lib/seo";
import {
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const ogImage = {
  url: absoluteUrl(OG_IMAGE_PATH),
  width: 1200,
  height: 630,
  alt: "Guia GLP-1 — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: [
    "GLP-1",
    "Guia GLP-1",
    "meuglp1.pt",
    "Rybelsus Portugal",
    "Mounjaro preço portugal",
    "Ozempic",
    "Wegovy",
    "Trulicity",
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
    title: `${SITE_NAME} — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal`,
    description: SITE_TAGLINE,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Rybelsus, Mounjaro, Ozempic e Wegovy em Portugal`,
    description: SITE_TAGLINE,
    images: [ogImage.url],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body>
        <Analytics />
        <JsonLd data={siteGraphLd()} />
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
