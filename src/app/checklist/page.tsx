import type { Metadata } from "next";
import { ConsultationChecklist } from "@/components/ConsultationChecklist";

export const metadata: Metadata = {
  title: "Checklist para a consulta",
};

export default function Page() {
  return (
    <section className="tool-page">
      <p className="kicker">Ferramenta</p>
      <h1>Chegar à consulta com a lição feita</h1>
      <p className="lede">
        Não é um formulário clínico. É uma lista para não esquecer história
        familiar, medicamentos e as perguntas que depois se lembra no
        corredor. As marcas ficam só neste browser.
      </p>
      <ConsultationChecklist />
    </section>
  );
}
