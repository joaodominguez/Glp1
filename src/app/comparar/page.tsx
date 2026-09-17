import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MedComparator } from "@/components/MedComparator";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "Compare dois medicamentos GLP-1 lado a lado: substância, via e frequência — factos do levantamento, sem dizer qual é melhor para si.";

export const metadata: Metadata = pageMetadata({
  title: "Comparar medicamentos GLP-1",
  description,
  path: "/comparar",
  keywords: [
    "comparar Mounjaro Ozempic",
    "Rybelsus vs Ozempic",
    "diferença Wegovy",
  ],
});

export default function CompararPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Comparar medicamentos",
            description,
            path: "/comparar",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Comparar", path: "/comparar" },
          ]),
        ]}
      />
      <p className="eyebrow">Ferramenta</p>
      <h1>Comparar</h1>
      <p className="lede">
        Dois nomes, factos estruturados. Sem ranking e sem dose recomendada.
      </p>
      <MedComparator />
      <p className="soft-note" style={{ marginTop: "1.5rem" }}>
        Artigos úteis:{" "}
        <Link href="/artigos/mounjaro-vs-ozempic/">Mounjaro vs Ozempic</Link>
        {" · "}
        <Link href="/artigos/rybelsus-vs-ozempic/">Rybelsus vs Ozempic</Link>
        {" · "}
        <Link href="/artigos/mounjaro-vs-wegovy/">Mounjaro vs Wegovy</Link>
      </p>
      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
