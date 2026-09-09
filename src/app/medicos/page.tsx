import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médicos",
  description:
    "Que especialidade consultar para medicamentos GLP-1 e o que levar à consulta.",
};

export default function MedicosPage() {
  return (
    <div className="shell page-simple">
      <p className="eyebrow">Acompanhamento</p>
      <h1>Médicos</h1>
      <p className="lede">
        Endocrinologia, obesidade, medicina geral — o que faz sentido perguntar
        e sinais de alerta. Sem ranking de clínicas.
      </p>
      <p className="disclaimer">
        Página em construção nesta versão clean sheet. O layout já está pronto
        para o conteúdo.
      </p>
    </div>
  );
}
