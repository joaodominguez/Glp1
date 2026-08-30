import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { PageShell } from "@/components/PageShell";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Guia GLP-1 — informação clara sobre Mounjaro",
    template: "%s — Guia GLP-1",
  },
  description:
    "Informação em português claro sobre Mounjaro (tirzepatida) e medicamentos GLP-1: o que são, como funcionam, efeitos, FAQ, glossário e checklist para a consulta. Não substitui aconselhamento médico.",
  applicationName: "Guia GLP-1",
  icons: {
    icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      data-theme="dark"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <PageShell>{children}</PageShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
