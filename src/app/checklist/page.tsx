import type { Metadata } from "next";
import { ConsultationChecklist } from "@/components/ConsultationChecklist";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Checklist para a consulta GLP-1",
  description:
    "Checklist para a consulta sobre agonistas de GLP-1: histórico, perguntas ao médico, caneta, frio e sinais de alerta. Fica só neste browser.",
  path: "/checklist",
});

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
