import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { HomeSearch } from "@/components/HomeSearch";
import { learnLinks, toolLinks } from "@/content/nav";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-with-pen">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-brand">
              <BrandMark className="brand-mark" />
              <div>
                <strong>Guia GLP-1</strong>
                <span>Mounjaro em português claro</span>
              </div>
            </div>
            <p className="kicker">Informação, não marketing</p>
            <h1>Mounjaro em português que se percebe.</h1>
            <p>
              O essencial sobre tirzepatida e GLP-1, sem fóruns barulhentos nem
              doses copiadas de outra pessoa.
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

          <div className="hero-visual" aria-hidden="true">
            <Image
              src="/hero-pen.png"
              alt=""
              width={900}
              height={1200}
              priority
              className="hero-pen"
            />
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

        <aside className="callout" style={{ marginTop: "2rem" }}>
          <p>
            <strong>Isto não é uma consulta.</strong> Não diz se o medicamento é
            para si, não calcula a sua dose e não vende canetas. Serve para
            chegar ao profissional de saúde com perguntas melhores.
          </p>
        </aside>
      </section>
    </>
  );
}
