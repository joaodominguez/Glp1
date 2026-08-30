import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "O que é a família GLP-1",
  description:
    "O que são medicamentos GLP-1 e afins: tirzepatida (Mounjaro), semaglutida (Ozempic, Wegovy), liraglutida e outros. Nomes comerciais vs substâncias, em português claro.",
  path: "/o-que-e",
  keywords: ["GLP-1", "Mounjaro", "Ozempic", "tirzepatida", "semaglutida"],
});

export default function Page() {
  return (
    <Article
      kicker="Fundamentos"
      title="O que é a família GLP-1 — e porque há tantos nomes"
      lede="Antes de falar de canetas e de efeitos, vale a pena separar nomes comerciais, substâncias e a fama da internet."
    >
      <h2>Três camadas que se misturam</h2>
      <ul>
        <li>
          <strong>Substância</strong> é o que o corpo recebe — tirzepatida,
          semaglutida, liraglutida, dulaglutida, exenatida, lixisenatida…
        </li>
        <li>
          <strong>Nome comercial</strong> é a marca da embalagem — Mounjaro,
          Ozempic, Wegovy, Saxenda, Victoza, Trulicity, Rybelsus…
        </li>
        <li>
          <strong>GLP-1</strong>, na conversa corrente, virou a alcunha de uma
          família de medicamentos que imitam hormonas do intestino. Em rigor,
          alguns (como a tirzepatida) atuam também no recetor de{" "}
          <strong>GIP</strong>.
        </li>
      </ul>
      <p>
        A mesma substância pode ter dois nomes comerciais com indicações
        diferentes (Ozempic vs Wegovy; Mounjaro vs Zepbound). Mudar de um para
        o outro, copiar a dose do vizinho ou partir uma caneta «para render»
        não é um truque: é um risco.
      </p>
      <p>
        O levantamento completo está em{" "}
        <Link href="/medicamentos">medicamentos GLP-1 e afins</Link>.
      </p>

      <h2>Para que existem, oficialmente</h2>
      <p>
        Nesta classe, as autorizações costumam cair em dois grandes grupos:{" "}
        <strong>diabetes tipo 2</strong> e <strong>gestão de peso</strong>{" "}
        (obesidade ou excesso de peso com outras doenças) — sempre juntamente
        com alimentação e atividade física, e sempre segundo a bula do país.
      </p>
      <p>
        Por isso a pergunta útil não é «o Mounjaro emagrece?» ou «o Ozempic é
        melhor?». É:{" "}
        <em>
          no meu país, para o meu diagnóstico, este medicamento está indicado —
          e faz sentido para mim?
        </em>{" "}
        Isso só se responde com a bula local e com um profissional.
      </p>
      <p className="callout">
        Confirme sempre no regulador do seu país (por exemplo EMA / INFARMED
        ou ANVISA) e no folheto da embalagem que comprou. Uma página em inglês,
        ou um vídeo, não substitui essa verificação.{" "}
        <Link href="/fontes">Lista de fontes</Link>.
      </p>

      <h2>O que estes medicamentos não são</h2>
      <ul>
        <li>Não são insulina, nem tratam diabetes tipo 1.</li>
        <li>Não são um «queima-gordura» nem um estilo de vida em ampola.</li>
        <li>Não são inofensivos só porque muita gente famosa os usa.</li>
        <li>
          Não são um tratamento para começar com a dose de alguém nas redes
          sociais.
        </li>
      </ul>
      <p>
        Se está a ponderar começar, a página{" "}
        <Link href="/checklist">checklist para a consulta</Link> existe para
        levar perguntas concretas — não um diagnóstico feito em casa.
      </p>
    </Article>
  );
}
