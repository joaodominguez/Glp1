import type { Metadata } from "next";
import { sources, sourceShortNote } from "@/content/sources";

export const metadata: Metadata = {
  title: "Fontes",
};

export default function Page() {
  return (
    <section className="tool-page">
      <p className="kicker">Sobre</p>
      <h1>De onde vem a informação</h1>
      <p className="lede">
        Este site traduz e organiza. Não inventa indicações. Quando houver
        conflito, a bula do seu país e o profissional que o acompanha ganham.
      </p>
      <p className="callout">{sourceShortNote}</p>
      <div className="source-list">
        {sources.map((source) => (
          <article className="source-card" key={source.id}>
            <p className="kicker">{source.publisher}</p>
            <h2>
              <a href={source.href} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </h2>
            <p>{source.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
