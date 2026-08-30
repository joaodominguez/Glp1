import type { Metadata } from "next";
import { GlossaryExplorer } from "@/components/GlossaryExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Glossário GLP-1",
  description:
    "Glossário em português: GLP-1, GIP, tirzepatida, semaglutida, titulação, IMC, MEN2, bula/RCM e outros termos das bulas explicados sem jargão.",
  path: "/glossario",
});

export default function Page() {
  return (
    <section className="tool-page">
      <p className="kicker">Ferramenta</p>
      <h1>As palavras que as bulas não explicam</h1>
      <p className="lede">
        Titulação, GIP, HbA1c, off-label, MEN2. O jargão é metade da confusão.
        Aqui cada termo cabe numa frase que se pode reler.
      </p>
      <GlossaryExplorer />
    </section>
  );
}
