import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1, gravidez e amamentação",
  description:
    "Medicamentos GLP-1 (Mounjaro, Ozempic, Wegovy) e gravidez ou amamentação: precaução geral das bulas. Não é aconselhamento individual — fale com o médico.",
  path: "/gravidez",
  keywords: ["GLP-1 gravidez", "Mounjaro gravidez", "Ozempic amamentação"],
});

export default function GravidezPage() {
  return (
    <Article
      kicker="Segurança · dúvida frequente"
      title="Gravidez, amamentação e GLP-1"
      lede="Em geral estes medicamentos não se usam na gravidez. Quem puder engravidar precisa de um plano contraceptivo claro com o profissional de saúde."
    >
      <div className="callout warning">
        <p>
          Se houver gravidez (confirmada ou suspeita), contacte o médico. Não
          ajuste doses pela internet.{" "}
          <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>O que as bulas costumam dizer</h2>
      <ul>
        <li>
          Uso na gravidez: em geral <strong>não recomendado</strong>.
        </li>
        <li>
          Quem pode engravidar: plano contraceptivo e conversa sobre quando
          parar o medicamento antes de tentar engravidar (os prazos variam —
          confirme na bula e com o médico).
        </li>
        <li>
          Amamentação: exige orientação individual; a bula local é o ponto de
          partida.
        </li>
      </ul>

      <h2>Pílula e absorção</h2>
      <p>
        Como o esvaziamento gástrico atrasa, a absorção de alguns comprimidos
        (incluindo contraceptivos orais) pode mudar — sobretudo ao subir a dose
        de tirzepatida. Detalhe em <Link href="/pilula">GLP-1 e a pílula</Link>.
      </p>

      <h2>Continuar</h2>
      <ul>
        <li>
          <Link href="/pilula">Interacção com contraceptivo oral</Link>
        </li>
        <li>
          <Link href="/checklist">Checklist para a consulta</Link>
        </li>
        <li>
          <Link href="/faq#gravidez">FAQ: gravidez</Link>
        </li>
        <li>
          <Link href="/fontes">Fontes oficiais</Link>
        </li>
      </ul>
      <p>
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>.
      </p>
    </Article>
  );
}
