import type { Metadata } from "next";
import { FaqExplorer } from "@/components/FaqExplorer";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
};

export default function Page() {
  return (
    <section className="tool-page">
      <p className="kicker">Ferramenta</p>
      <h1>Perguntas, sem o ruído dos grupos</h1>
      <p className="lede">
        Respostas curtas ao que mais se mistura em português: o que o
        medicamento é, como se usa, o que é efeito e o que é mito. Filtre por
        tema ou escreva uma palavra.
      </p>
      <FaqExplorer />
    </section>
  );
}
