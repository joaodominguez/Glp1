import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";

export const metadata: Metadata = {
  title: "Como funciona",
};

export default function Page() {
  return (
    <Article
      kicker="Mecanismo, em linguagem simples"
      title="O que a tirzepatida faz no corpo"
      lede="Não precisa de um doutoramento em endocrinologia. Precisa de um mapa: fome, estômago, açúcar no sangue."
    >
      <h2>Hormonas que o intestino já conhece</h2>
      <p>
        Depois de uma refeição, o intestino liberta sinais — entre eles GLP-1 e
        GIP. Esses sinais dizem ao pâncreas para libertar insulina quando o
        açúcar sobe, travam o glucagon (que puxaria ainda mais açúcar), atrasam
        a saída da comida do estômago e aumentam a saciedade no cérebro.
      </p>
      <p>
        A tirzepatida imita parte destes sinais, de forma prolongada, com uma
        injeção semanal. Por isso muita gente descreve a mesma tríade:{" "}
        <strong>menos ruído de fome</strong>, <strong>enfarta mais cedo</strong>{" "}
        e, se tiver diabetes tipo 2, <strong>análises de açúcar melhores</strong>.
      </p>

      <h2>Porque o efeito não é «mágica»</h2>
      <p>
        O medicamento muda o volume e o ritmo do que a pessoa tolera comer. Não
        escolhe o prato por si. Sem proteína, sem estímulo muscular e sem um
        plano para quando a dose estabilizar (ou faltar), o corpo perde o que
        estiver mais à mão — incluindo músculo — e o peso pode voltar quando o
        sinal químico desaparece.
      </p>

      <h2>O que isto explica nos efeitos</h2>
      <ul>
        <li>
          Náusea, enfartamento e azia: o estômago está mais lento. Comer como
          «antes» costuma correr mal.
        </li>
        <li>
          Prisão de ventre ou diarreia: o trânsito muda. Hidratação e fibra
          tornam-se práticos, não morais.
        </li>
        <li>
          Menos fome não é o mesmo que «não preciso de comer». Refeições
          pequenas e regulares ainda importam.
        </li>
      </ul>
      <p>
        A página de <Link href="/efeitos">efeitos</Link> separa o desconforto
        comum dos sinais que não se esperam em casa. O{" "}
        <Link href="/glossario">glossário</Link> explica palavras como
        titulação, HbA1c e pancreatite.
      </p>
    </Article>
  );
}
