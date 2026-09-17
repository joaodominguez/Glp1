import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteSearch } from "@/components/SiteSearch";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Pesquise medicamentos, artigos, FAQ e glossário do Guia GLP-1 em português.";

export const metadata: Metadata = pageMetadata({
  title: "Pesquisar",
  description,
  path: "/pesquisa",
  keywords: ["pesquisar GLP-1", "buscar Mounjaro", "FAQ Rybelsus"],
});

export default function PesquisaPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Pesquisar",
            description,
            path: "/pesquisa",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Pesquisar", path: "/pesquisa" },
          ]),
        ]}
      />
      <p className="eyebrow">Ferramenta</p>
      <h1>Pesquisar</h1>
      <p className="lede">
        Encontre fichas, artigos, perguntas e termos do glossário — sem sair do
        guia.
      </p>
      <SiteSearch id="pesquisa-principal" autofocus />
      <p className="soft-note" style={{ marginTop: "1.5rem" }}>
        Também pode <Link href="/comparar/">comparar dois medicamentos</Link> ou
        ver o <Link href="/glossario/">glossário</Link>.
      </p>
    </div>
  );
}
