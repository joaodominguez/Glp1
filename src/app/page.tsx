import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { medicationsSorted } from "@/content/medications";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Mounjaro, Ozempic, Wegovy e a classe GLP-1`,
  description: SITE_TAGLINE,
};

export default function HomePage() {
  const meds = medicationsSorted();

  return (
    <>
      <section className="hero shell">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Guia GLP-1</p>
            <h1>Vais começar Mounjaro. Começa por perceber o que é.</h1>
            <p className="lede">
              Onze nomes comerciais, seis substâncias. Preços, onde comprar com
              segurança e que médico consultar — em português claro.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/medicamentos/mounjaro/">
                Ver Mounjaro
              </Link>
              <Link className="btn btn-ghost" href="/medicamentos/">
                Todos os medicamentos
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <Image
              src="/medications/mounjaro/pen-1.jpg"
              alt="Caneta Mounjaro KwikPen com tirzepatida"
              width={1200}
              height={900}
              priority
            />
            <figcaption>Caneta Mounjaro (tirzepatida)</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <h2>Por onde começar</h2>
          <p>Três caminhos. Sem menu infinito.</p>
        </div>
        <ul className="path-grid">
          <li>
            <Link className="path-card" href="/medicamentos/mounjaro/">
              <strong>O medicamento</strong>
              <span>O que é a tirzepatida e em que difere do Ozempic.</span>
            </Link>
          </li>
          <li>
            <Link className="path-card" href="/precos/">
              <strong>O preço</strong>
              <span>Ordens de grandeza em Portugal e o que verificar.</span>
            </Link>
          </li>
          <li>
            <Link className="path-card" href="/medicos/">
              <strong>O médico</strong>
              <span>Que especialidade e o que levar à consulta.</span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="section shell" id="medicamentos">
        <div className="section-head">
          <h2>Os 11 medicamentos</h2>
          <p>
            A mesma substância chega à farmácia com nomes diferentes. Cada
            página segue o mesmo formato.
          </p>
        </div>
        <ul className="med-grid">
          {meds.map((med) => (
            <li key={med.slug}>
              <Link className="med-card" href={`/medicamentos/${med.slug}/`}>
                <strong>{med.brandName}</strong>
                <span className="meta">
                  {med.substance} · {med.frequency}
                </span>
                <span className="blurb">{med.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="disclaimer">
          Quem decide a dose e se o tratamento faz sentido para si é o seu
          médico. Este guia serve para chegar à consulta a saber o que perguntar.
        </p>
      </section>
    </>
  );
}
