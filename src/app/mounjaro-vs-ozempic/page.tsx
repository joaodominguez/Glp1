import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Mounjaro vs Ozempic — diferenças",
  description:
    "Mounjaro (tirzepatida) e Ozempic (semaglutida) não são o mesmo fármaco: mecanismos, empresas, doses e indicações diferem. Comparação cuidadosa em português.",
  path: "/mounjaro-vs-ozempic",
  keywords: [
    "Mounjaro vs Ozempic",
    "tirzepatida semaglutida",
    "diferença GLP-1",
  ],
});

export default function MounjaroVsOzempicPage() {
  return (
    <Article
      kicker="Comparar · com cuidado"
      title="Mounjaro e Ozempic: não são a mesma coisa"
      lede="Comparações de «qual emagrece mais» na internet não substituem a escolha clínica com base no seu diagnóstico e na bula local."
    >
      <div className="callout warning">
        <p>
          Este resumo é educativo. Não recomenda um medicamento em vez do outro.{" "}
          <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>Em uma frase</h2>
      <p>
        <strong>Mounjaro</strong> é tirzepatida (agonista duplo GIP + GLP-1), da
        Lilly. <strong>Ozempic</strong> é semaglutida (agonista de GLP-1), da
        Novo Nordisk. Empresas, doses, canetas e evidência são diferentes.
      </p>

      <h2>Pontos que costumam confundir</h2>
      <ul>
        <li>
          Ozempic e Wegovy partilham semaglutida, mas não são a mesma caneta nem
          a mesma indicação típica.
        </li>
        <li>
          Nalguns mercados a tirzepatida para peso tem outro nome comercial
          (ex.: Zepbound) — ver{" "}
          <Link href="/medicamentos/mounjaro">página do Mounjaro</Link>.
        </li>
        <li>
          Indicações oficiais (diabetes tipo 2, peso, ambos) mudam por país.
        </li>
      </ul>

      <h2>Onde aprofundar</h2>
      <ul>
        <li>
          <Link href="/medicamentos/mounjaro">Mounjaro (tirzepatida)</Link>
        </li>
        <li>
          <Link href="/medicamentos/ozempic">Ozempic (semaglutida)</Link>
        </li>
        <li>
          <Link href="/medicamentos/wegovy">Wegovy (semaglutida)</Link>
        </li>
        <li>
          <Link href="/como-funciona">Como funcionam</Link>
        </li>
        <li>
          <Link href="/precos">Preços (Portugal)</Link> ·{" "}
          <Link href="/brasil/precos">Preços (Brasil)</Link>
        </li>
        <li>
          <Link href="/faq#mounjaro-vs-ozempic">FAQ</Link>
        </li>
        <li>
          <Link href="/fontes">Fontes</Link>
        </li>
      </ul>
      <p>
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>.
      </p>
    </Article>
  );
}
