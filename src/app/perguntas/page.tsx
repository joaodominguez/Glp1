import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas",
  description: "Perguntas frequentes sobre a classe GLP-1, em linguagem simples.",
};

export default function PerguntasPage() {
  return (
    <div className="shell page-simple">
      <p className="eyebrow">FAQ</p>
      <h1>Perguntas</h1>
      <p className="lede">
        As dúvidas que aparecem antes da primeira dose e nas primeiras semanas.
      </p>
      <p className="disclaimer">
        Página em construção nesta versão clean sheet.
      </p>
    </div>
  );
}
