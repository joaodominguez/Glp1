import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "As primeiras semanas com GLP-1",
  description:
    "O que muita gente sente no início do tratamento com agonistas de GLP-1: náuseas, apetite, hábitos alimentares e o que preparar antes da consulta.",
  path: "/primeiras-semanas",
});

export default function Page() {
  return (
    <Article
      kicker="Expectativas"
      title="O que muita gente sente no início"
      lede="As primeiras semanas são, em geral, de dose baixa. Julgar o tratamento inteiro pela semana 2 é uma forma fiável de se baralhar."
    >
      <h2>O corpo está a aprender um sinal novo</h2>
      <p>
        Com a dose inicial, o objetivo clínico costuma ser tolerar — não
        «transformar-se». Náusea ao cheiro de comida, um jantar que já não
        cabe, sono estranho, obstipação: são queixas comuns. Não são medalhas,
        nem prova de que «está a funcionar melhor».
      </p>
      <p>
        Em diabetes, o primeiro sinal útil pode ser o glicosímetro ou a HbA1c
        seguinte, não a balança. Em gestão de peso, a balança também mente à
        semana: água, intestino, horário, ciclo menstrual.
      </p>

      <h2>Hábitos que costumam chocar com a caneta</h2>
      <ul>
        <li>Comer depressa ou até ficar «cheio» como antes.</li>
        <li>Refeições muito gordurosas ou álcool no mesmo dia da injeção.</li>
        <li>Beber pouco e depois ter prisão de ventre ou tonturas.</li>
        <li>
          Cortar proteína porque «não apetece». O músculo não espera pela fome.
        </li>
        <li>
          Comparar-se com quem já está numa dose alta há meses, com outro ponto
          de partida.
        </li>
      </ul>

      <h2>O que preparar na cabeça (e no frigorífico)</h2>
      <p>
        Ter à mão refeições pequenas que ainda façam sentido quando a fome
        encolhe: iogurte, ovos, sopa, fruta, pão com proteína, o que a pessoa
        realmente come. Combinar um dia fixo da injeção. Saber a quem
        escrever se o vómito não deixar beber.
      </p>
      <p>
        A <Link href="/checklist">checklist da consulta</Link> inclui o seguimento
        — porque «comece e veja» sem data de regresso deixa a pessoa sozinha
        precisamente quando os efeitos são mais novos.
      </p>
      <p>
        Se o essencial ainda estiver confuso, volte a{" "}
        <Link href="/o-que-e">o que é</Link> e a{" "}
        <Link href="/como-funciona">como funciona</Link>. Clareza primeiro;
        dose depois, com quem pode prescrever.
      </p>
    </Article>
  );
}
