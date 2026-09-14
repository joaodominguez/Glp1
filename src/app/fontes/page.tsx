import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { editorialPrinciples, manufacturerSources, officialSources } from "@/content/sources";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "Lista de fontes oficiais usadas neste guia: Infarmed, Infomed, EMA, Ordem dos Médicos e DGS — e os princípios editoriais.";

export const metadata: Metadata = pageMetadata({
  title: "Fontes — Infarmed, EMA e reguladores",
  description,
  path: "/fontes",
  keywords: [
    "fontes Infarmed",
    "Infomed medicamentos",
    "EMA GLP-1",
    "bula oficial",
  ],
});

export default function FontesPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Fontes oficiais",
            description,
            path: "/fontes",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Fontes", path: "/fontes" },
          ]),
        ]}
      />
      <p className="eyebrow">Transparência</p>
      <h1>Fontes</h1>
      <p className="lede">
        Preferimos reguladores e bulas oficiais a blogs comerciais. Esta lista é
        o ponto de partida — não uma bibliografia exaustiva.
      </p>

      <section className="content-block article">
        <h2>Onde verificar</h2>
        <ul className="source-list">
          {officialSources.map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p>{item.why}</p>
            </li>
          ))}
        </ul>

        <h2>Outras referências úteis</h2>
        <ul className="source-list">
          {manufacturerSources.map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p>{item.why}</p>
            </li>
          ))}
        </ul>

        <h2>Princípios editoriais</h2>
        <ul>
          {editorialPrinciples.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2>Como usamos as fontes</h2>
        <p>
          Cruzamos nomes comerciais, substâncias e indicações com o Infarmed e a
          EMA. As páginas de medicamentos e artigos apontam para estas bases — se
          houver discrepância, prevalece o documento oficial e o conselho do seu
          médico.
        </p>
      </section>

      <div className="next-reads">
        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/aviso/">
              <strong>Aviso médico</strong>
              <span>O que este site é e não é.</span>
            </Link>
          </li>
          <li>
            <Link href="/glossario/">
              <strong>Glossário</strong>
              <span>Termos técnicos em português.</span>
            </Link>
          </li>
        </ul>
      </div>

      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
