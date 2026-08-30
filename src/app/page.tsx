import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { HomeSearch } from "@/components/HomeSearch";
import { learnLinks, toolLinks } from "@/content/nav";

export default function HomePage() {
  return (
    <>
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
              Mounjaro em português que{" "}
              <em className="accent-word">se percebe.</em>
            </h1>
            <p>
              Informação clara, prática e atualizada para tomar decisões com
              segurança.
            </p>
            <div className="cta-row">
              <Link className="button button-primary" href="/o-que-e">
                Começar
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
            Náuseas, dose esquecida, tiroide, checklist — escreva uma palavra.
          </p>
        </div>
        <HomeSearch />

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
