import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { PageShell } from "@/components/PageShell";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Guia GLP-1 — informação clara sobre Mounjaro",
    template: "%s — Guia GLP-1",
  },
  description:
    "Informação em português claro sobre Mounjaro (tirzepatida) e medicamentos GLP-1: o que são, como funcionam, efeitos, FAQ, glossário e checklist para a consulta. Não substitui aconselhamento médico.",
  applicationName: "Guia GLP-1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
