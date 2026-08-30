import type { Metadata } from "next";
import { GlossaryExplorer } from "@/components/GlossaryExplorer";

export const metadata: Metadata = {
  title: "Glossário",
};

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
