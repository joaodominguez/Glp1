import type { Metadata } from "next";
import Link from "next/link";
import { SiteSearch } from "@/components/SiteSearch";
import { brasilLinks, intentLinks, portugalLinks } from "@/content/nav";
import { medicationsSorted } from "@/content/medications";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guia GLP-1 — Mounjaro, Ozempic, Wegovy e a classe GLP-1",
  description:
    "Informação clara em português sobre medicamentos GLP-1 e afins: Mounjaro, Ozempic, Wegovy, Saxenda, Victoza, Trulicity e outros. Como funcionam, efeitos e perguntas frequentes.",
  path: "/",
  type: "website",
  absoluteTitle: true,
  keywords: [
    "GLP-1",
    "Mounjaro",
    "Ozempic",
    "Wegovy",
    "Saxenda",
    "tirzepatida",
    "semaglutida",
  ],
});

export default function HomePage() {
  const featuredMeds = medicationsSorted().slice(0, 6);

  return (
    <div className="home">
      <header className="home-intro">
        <p className="kicker">Guia em português</p>
        <h1>Mounjaro, Ozempic, Wegovy — o que a bula não explica em linguagem simples.</h1>
        <p className="lede">
          Um mapa da classe GLP-1 para Portugal e Brasil. Sem ranking, sem
          milagres, sem substituir o médico.
        </p>
        <SiteSearch variant="home" id="pesquisa-inicio" />
      </header>

      <section className="home-section" aria-labelledby="home-meds">
        <div className="section-head">
          <h2 id="home-meds">Medicamentos</h2>
          <p>Nome comercial, substância e o que muda de país para país.</p>
        </div>
        <ul className="med-list">
          {featuredMeds.map((med) => (
            <li key={med.slug}>
              <Link href={`/medicamentos/${med.slug}`}>
                <strong>{med.brandName}</strong>
                <span className="med-meta">
                  {med.substance} · {med.frequency}
                </span>
                <span>{med.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="home-more">
          <Link href="/medicamentos">Todos os medicamentos</Link>
        </p>
      </section>

      <section className="home-split" aria-label="Por país">
        <div>
          <h2>Portugal</h2>
          <ul className="plain-links">
            {portugalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Brasil</h2>
          <ul className="plain-links">
            {brasilLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-intent">
        <div className="section-head">
          <h2 id="home-intent">Perguntas que mais se misturam</h2>
        </div>
        <ul className="plain-links">
          {intentLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
                <span> — {item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
