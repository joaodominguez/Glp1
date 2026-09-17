import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SuggestForm } from "@/components/SuggestForm";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Sugerir uma correcção factual ao Guia GLP-1. Sem dados clínicos pessoais.";

export const metadata: Metadata = pageMetadata({
  title: "Sugerir correcção",
  description,
  path: "/sugerir",
});

export default function SugerirPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Sugerir correcção",
            description,
            path: "/sugerir",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Sugerir", path: "/sugerir" },
          ]),
        ]}
      />
      <p className="eyebrow">Melhorar o guia</p>
      <h1>Sugerir correcção</h1>
      <p className="lede">
        Encontrou um erro factual ou uma fonte desactualizada? Descreva sem
        partilhar dados de saúde pessoais.
      </p>
      <SuggestForm />
      <p className="soft-note" style={{ marginTop: "1.5rem" }}>
        Preferimos <Link href="/fontes/">fontes oficiais</Link>. Ver{" "}
        <Link href="/sobre/">Sobre</Link> e o{" "}
        <Link href="/aviso/">aviso médico</Link>.
      </p>
    </div>
  );
}
