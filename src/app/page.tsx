import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { HomeSearch } from "@/components/HomeSearch";
import { learnLinks, toolLinks } from "@/content/nav";
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
    <>
      {/* Confirmed mockup: cinematic pen photo is a full-bleed hero background, not a boxed/cutout panel. */}
      <section className="hero hero-bleed">
        <div className="hero-media">
          <Image
            src="/hero-pen.png"
            alt="Caneta injetora semanal ilustrativa sobre pedra escura, sem marca comercial"
            fill
            priority
            className="hero-bg"
            sizes="100vw"
          />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-brand">
              <BrandMark className="brand-mark" />
              <strong>Guia GLP-1</strong>
            </div>
            <h1>
              GLP-1 em português que{" "}
              <em className="accent-word">se percebe.</em>
            </h1>
            <p>
              Mounjaro, Ozempic, Wegovy, Saxenda e o resto da classe — informação
              clara para decidir com o seu médico, não com o algoritmo.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href="/medicamentos">
                Ver medicamentos
              </Link>
              <Link className="button button-secondary" href="/faq">
                Perguntas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-body">
        <div className="section-head">
          <h2>Procurar no guia</h2>
          <p>
            Náuseas, Ozempic, dose esquecida, tiroide — escreva uma palavra.
          </p>
        </div>
        <HomeSearch />

        <div className="section-head">
          <h2>Medicamentos do levantamento</h2>
          <p>
            Não é só Mounjaro. Cada página separa nome comercial, substância e
            indicação.
          </p>
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
        <p>
          <Link href="/medicamentos">Ver o levantamento completo →</Link>
        </p>

        <div className="section-head">
          <h2>Começar por aqui</h2>
        </div>
        <ul className="link-list">
          {learnLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="section-head">
          <h2>Ferramentas</h2>
          <p>Sem contas e sem anúncios. A checklist fica só neste browser.</p>
        </div>
        <div className="card-grid">
          {toolLinks.map((item) => (
            <Link className="card" href={item.href} key={item.href}>
              <span>Ferramenta</span>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
