import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Ordens de grandeza de preço dos medicamentos GLP-1 em Portugal e o que verificar na farmácia.",
};

export default function PrecosPage() {
  return (
    <div className="shell page-simple">
      <p className="eyebrow">Portugal</p>
      <h1>Preços</h1>
      <p className="lede">
        Os PVP mudam. Aqui vão ordens de grandeza e o que confirmar no INFARMED
        e na farmácia — sem fingir uma tabela eterna.
      </p>
      <p className="disclaimer">
        Página em construção nesta versão clean sheet. O layout e a navegação já
        estão no sítio; o conteúdo de preços entra a seguir.
      </p>
    </div>
  );
}
