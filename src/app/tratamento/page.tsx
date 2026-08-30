import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Como costuma ser o tratamento GLP-1",
  description:
    "Injeção semanal ou diária, titulação de dose, dose esquecida e conservação da caneta. Informação geral sobre o tratamento com agonistas de GLP-1 — não substitui o médico.",
  path: "/tratamento",
});

export default function Page() {
  return (
    <Article
      kicker="Uso típico, não a sua receita"
      title="Como o tratamento costuma ser organizado"
      lede="Há um padrão nos documentos oficiais. Há também mil excepções individuais. Esta página descreve o padrão — e pára aí."
    >
      <div className="callout warning">
        <p>
          <strong>Não copie uma dose da internet.</strong> A sequência abaixo é
          a lógica geral descrita nas informações do medicamento, não um
          esquema para auto-medicação.
        </p>
      </div>

      <h2>Semanal, diário — ou oral</h2>
      <p>
        Muitos da classe (Mounjaro / tirzepatida, Ozempic, Wegovy, Trulicity…)
        são injeção subcutânea <strong>semanal</strong>. Outros são{" "}
        <strong>diários</strong> (Saxenda, Victoza, Lyxumia) ou{" "}
        <strong>orais</strong> (Rybelsus). O que os folhetos pedem é
        regularidade: o mesmo dia ou a mesma rotina, sítios de injeção
        rotativos quando aplicável (abdómen, coxa ou parte de trás do braço),
        técnica correta da caneta ou das instruções do comprimido.
      </p>
      <p>
        Vale a pena pedir uma demonstração na farmácia ou na consulta. A
        primeira injeção feita com pressa, no ângulo errado ou com uma caneta
        mal conservada é uma forma cara de começar mal.
      </p>

      <h2>Titulação: subir depressa não é «ser mais eficaz»</h2>
      <p>
        Os documentos oficiais descrevem um início em dose baixa (na informação
        europeia, 2,5 mg uma vez por semana durante 4 semanas) e aumentos
        graduais, em geral de 2,5 mg, se a pessoa tolerar e se o objetivo
        clínico o justificar. Essa primeira dose baixa existe para adaptar o
        aparelho digestivo — não como dose de manutenção.
      </p>
      <p>
        A dose «certa» é um compromisso entre benefício (açúcar, peso, outros
        alvos definidos consigo) e efeitos que consiga viver. Chegar ao máximo
        da caneta não é um diploma.
      </p>

      <h2>Se esquecer uma injeção</h2>
      <p>
        A regra oficial mais citada: se passaram <strong>4 dias ou menos</strong>,
        tome quando lembrar e siga o calendário; se passaram{" "}
        <strong>mais de 4 dias</strong>, salte e espere pelo dia habitual. Deve
        haver pelo menos <strong>3 dias</strong> entre duas doses. Não «compense»
        com uma dose extra. Se o atraso for confuso, pergunte a quem prescreveu.
      </p>

      <h2>Frio, viagens e stock</h2>
      <p>
        As canetas vivem no frigorífico (cerca de 2 a 8 °C), sem congelar, ao
        abrigo da luz. Muitas bulas permitem um período limitado à temperatura
        ambiente — o número exato (por exemplo até 21 dias, até 30 °C) está no
        folheto da <em>sua</em> embalagem. Uma caneta que viajou no porão gelado
        ou num carro ao sol pode estar inutilizável mesmo que o líquido
        «pareça normal».
      </p>
      <p>
        Falta de stock é um problema clínico, não só logístico. Quem usa o
        medicamento para diabetes não deve improvisar um intervalo de várias
        semanas sem falar com o médico.
      </p>

      <h2>O que o tratamento pede além da caneta</h2>
      <ul>
        <li>Um plano alimentar que ainda caiba numa fome mais pequena.</li>
        <li>Atenção a músculo: proteína e algum treino de força, se possível.</li>
        <li>
          Revisão de outros medicamentos — sobretudo insulina, sulfonilureias e
          contraceptivos orais.
        </li>
        <li>Datas de seguimento, não só «volte se precisar».</li>
      </ul>
      <p>
        A <Link href="/checklist">checklist</Link> ajuda a não esquecer estas
        perguntas. As <Link href="/faq">perguntas frequentes</Link> cobrem
        pílula, viagens e o que acontece se parar.
      </p>
    </Article>
  );
}
