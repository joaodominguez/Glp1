import Link from "next/link";
import { HomeSearch } from "@/components/HomeSearch";
import { learnLinks, toolLinks } from "@/content/nav";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Informação, não marketing</p>
          <h1>Mounjaro e GLP-1 em português que se percebe.</h1>
          <p>
            Quem começa um tratamento destes costuma encontrar o mesmo: grupos
            barulhentos, traduções más, doses copiadas de outra pessoa e pouca
            distinção entre facto, opinião e anúncio. Este guia junta o
            essencial num sítio só — e diz com clareza o que não pode responder.
          </p>
          <HomeSearch />
        </div>
        <aside className="callout">
          <p>
            <strong>Isto não é uma consulta.</strong> Não diz se o medicamento é
            para si, não calcula a sua dose e não vende canetas. Serve para
            chegar ao profissional de saúde com perguntas melhores — e para não
            ficar refém da pior página que o motor de busca mostrou.
          </p>
        </aside>
      </section>

      <section className="home-body">
        <h2>Começar por aqui</h2>
        <div className="card-grid">
          {learnLinks.map((item) => (
            <Link className="card" href={item.href} key={item.href}>
              <span>Guia</span>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>

        <h2>Ferramentas leves</h2>
        <p>
          Sem contas, sem anúncios, sem «comunidade». A checklist fica neste
          browser, se quiser marcar o que já preparou.
        </p>
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
