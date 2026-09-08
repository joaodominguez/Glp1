import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Náuseas com GLP-1 (Mounjaro, Ozempic, Wegovy)",
  description:
    "Náuseas e outros efeitos digestivos com agonistas de GLP-1: o que é frequente, o que pode ajudar e quando procurar ajuda. Não substitui o médico.",
  path: "/nauseas",
  keywords: ["náuseas GLP-1", "náuseas Mounjaro", "náuseas Ozempic", "efeitos"],
});

export default function NauseasPage() {
  return (
    <Article
      kicker="Efeitos · dúvida frequente"
      title="Náuseas com medicamentos GLP-1"
      lede="São o efeito mais falado. Frequente não quer dizer inofensivo em todos os casos — nem que tenha de «aguentar calado»."
    >
      <div className="callout warning">
        <p>
          Isto é informação geral. Não classifica os seus sintomas. Em dúvida
          entre «adaptação» e urgência, trate como urgente até um profissional
          dizer o contrário.{" "}
          <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>O que é frequente</h2>
      <p>
        Náusea, menos fome, enfartamento, azia, prisão de ventre ou diarreia
        aparecem muito nas bulas e nos ensaios — sobretudo ao começar e a cada
        subida de dose. Muita gente nota alívio com o tempo; isso não é
        garantia.
      </p>

      <h2>O que muita gente tenta (com acordo do profissional)</h2>
      <ul>
        <li>refeições mais pequenas e mais lentas;</li>
        <li>menos gordura, menos volume de uma vez, menos álcool;</li>
        <li>hidratação ao longo do dia;</li>
        <li>não trepar a dose se ainda estiver no pior da adaptação.</li>
      </ul>

      <h2>Quando não é «só náusea»</h2>
      <p>
        Vómitos intensos, desidratação, dor forte e persistente na barriga,
        amarelar da pele, desmaio ou confusão — isto sai do guião de
        «adaptação». Veja também a página de{" "}
        <Link href="/efeitos">efeitos e sinais de alerta</Link>.
      </p>

      <h2>Continuar</h2>
      <ul>
        <li>
          <Link href="/efeitos">Efeitos secundários</Link>
        </li>
        <li>
          <Link href="/primeiras-semanas">Primeiras semanas</Link>
        </li>
        <li>
          <Link href="/checklist">Checklist para a consulta</Link>
        </li>
        <li>
          <Link href="/faq#nauseas">FAQ: as náuseas são normais?</Link>
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
