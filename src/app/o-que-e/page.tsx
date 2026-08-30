import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";

export const metadata: Metadata = {
  title: "O que é o Mounjaro",
};

export default function Page() {
  return (
    <Article
      kicker="Fundamentos"
      title="O que é o Mounjaro — e o que é um GLP-1"
      lede="Antes de falar de canetas e de efeitos, vale a pena separar nomes comerciais, substâncias e a fama da internet."
    >
      <h2>Três nomes que se misturam</h2>
      <ul>
        <li>
          <strong>Tirzepatida</strong> é a substância. É o que o corpo recebe.
        </li>
        <li>
          <strong>Mounjaro</strong> é um nome comercial da Lilly para essa
          substância. As indicações oficiais mudam de país para país.
        </li>
        <li>
          <strong>GLP-1</strong>, na conversa corrente, virou a alcunha de uma
          família de medicamentos injetáveis (e alguns orais) que imitam
          hormonas do intestino. Em rigor, a tirzepatida atua em dois recetores:
          GLP-1 e GIP.
        </li>
      </ul>
      <p>
        Há outros fármacos nesta conversa — por exemplo a semaglutida (nomes
        como Ozempic ou Wegovy). Não são equivalentes. Mudar de um para o outro,
        copiar a dose do vizinho ou partir uma caneta «para render» não é um
        truque: é um risco.
      </p>

      <h2>Para que existe, oficialmente</h2>
      <p>
        Em muitos países o Mounjaro está autorizado para adultos com{" "}
        <strong>diabetes tipo 2</strong>, juntamente com alimentação e
        atividade física. Noutros, a tirzepatida também está autorizada para{" "}
        <strong>gestão de peso</strong> em pessoas com obesidade, ou com excesso
        de peso e outras doenças — por vezes com outro nome comercial.
      </p>
      <p>
        Por isso a pergunta útil não é «o Mounjaro emagrece?». É:{" "}
        <em>no meu país, para o meu diagnóstico, este medicamento está
        indicado — e faz sentido para mim?</em> Isso só se responde com a bula
        local e com um profissional.
      </p>
      <p className="callout">
        Confirme sempre no regulador do seu país (por exemplo EMA / INFARMED
        ou ANVISA) e no folheto da embalagem que comprou. Uma página em inglês,
        ou um vídeo, não substitui essa verificação.{" "}
        <Link href="/fontes">Lista de fontes</Link>.
      </p>

      <h2>O que este medicamento não é</h2>
      <ul>
        <li>Não é insulina, nem trata diabetes tipo 1.</li>
        <li>Não é um «queima-gordura» nem um estilo de vida em ampola.</li>
        <li>Não é inofensivo só porque muita gente famosa o usa.</li>
        <li>
          Não é um tratamento para começar com a dose de alguém nas redes
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
