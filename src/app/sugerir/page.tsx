import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { SuggestClinicForm } from "@/components/SuggestClinicForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sugerir uma clínica",
  description:
    "Sugira uma clínica ou centro de obesidade/endocrinologia para o Guia GLP-1. Envio por email — sem backend.",
  path: "/sugerir",
});

export default function SugerirPage() {
  return (
    <Article
      kicker="Comunidade"
      title="Sugerir uma clínica"
      lede="Conhece um centro em Portugal ou no Brasil que faça acompanhamento sério de GLP-1? Ajude a mapear — sem anúncios pagos."
    >
      <p>
        As listas em <Link href="/clinicas">Clínicas (Portugal)</Link> e{" "}
        <Link href="/brasil/clinicas">Clínicas (Brasil)</Link> são orientação, não
        ranking nem endosso. Preferimos centros com acompanhamento médico claro,
        sem «caneta no balcão» sem história clínica.
      </p>

      <SuggestClinicForm />

      <h2>O que não pedimos</h2>
      <ul>
        <li>Não vendemos espaços na lista.</li>
        <li>Não garantimos inclusão — verificamos o essencial publicamente.</li>
        <li>
          Não substituímos a sua verificação de cédula / CRM e de condições
          clínicas.
        </li>
      </ul>

      <p>
        Ver também <Link href="/medicos">Médicos (PT)</Link>,{" "}
        <Link href="/brasil/medicos">Médicos (BR)</Link> e o{" "}
        <Link href="/aviso">aviso médico</Link>.
      </p>
    </Article>
  );
}
