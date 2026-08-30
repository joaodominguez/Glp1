import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Dose esquecida de GLP-1 (Mounjaro, Ozempic, Wegovy)",
  description:
    "O que fazer se esquecer uma dose semanal de tirzepatida ou semaglutida: regras gerais das bulas e porque não inventar dose extra. Confirme com o seu médico.",
  path: "/dose-esquecida",
  keywords: ["dose esquecida", "Mounjaro dose", "Ozempic esqueci", "GLP-1"],
});

export default function DoseEsquecidaPage() {
  return (
    <Article
      kicker="Uso · dúvida frequente"
      title="E se eu esquecer uma dose?"
      lede="Há regras gerais nas bulas — e há o seu caso. Esta página resume o traço grosso; não substitui o folheto da sua caneta nem o profissional que o segue."
    >
      <div className="callout warning">
        <p>
          Não invente uma dose extra «para compensar». Se tiver dúvidas, pergunte
          a quem prescreve. <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>Regra geral (muitas bulas de tirzepatida / semaglutida semanal)</h2>
      <ul>
        <li>
          Se passaram <strong>4 dias ou menos</strong> desde o dia habitual:
          muitas orientações dizem para tomar assim que lembrar e retomar o
          calendário.
        </li>
        <li>
          Se passaram <strong>mais de 4 dias</strong>: muitas vezes a orientação
          é saltar essa dose e esperar pelo dia habitual.
        </li>
        <li>
          Deve haver, em geral, <strong>pelo menos 3 dias</strong> entre duas
          injeções.
        </li>
      </ul>
      <p>
        Os números exactos estão no RCM / bula do seu país e da sua apresentação.
        Confirme sempre aí — e em{" "}
        <Link href="/fontes">Fontes</Link>.
      </p>

      <h2>O que não fazer</h2>
      <ul>
        <li>Duplicar a dose no mesmo dia.</li>
        <li>Subir a dose sozinho porque «perdeu uma semana».</li>
        <li>Misturar canetas ou partilhar com outra pessoa.</li>
      </ul>

      <h2>Continuar</h2>
      <ul>
        <li>
          <Link href="/tratamento">Como costuma ser o tratamento</Link>
        </li>
        <li>
          <Link href="/checklist">Checklist para a consulta</Link>
        </li>
        <li>
          <Link href="/faq#esqueci">FAQ: dose esquecida</Link>
        </li>
        <li>
          <Link href="/medicamentos">Medicamentos do levantamento</Link>
        </li>
      </ul>
      <p>
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>.
      </p>
    </Article>
  );
}
