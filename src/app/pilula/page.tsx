import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GLP-1 e a pílula contraceptiva",
  description:
    "Tirzepatida (Mounjaro) e contraceptivos orais: o atraso do esvaziamento gástrico pode afectar a absorção. Tom de precaução — confirme com quem prescreve.",
  path: "/pilula",
  keywords: [
    "pílula Mounjaro",
    "contraceptivo GLP-1",
    "tirzepatida pílula",
    "absorção",
  ],
});

export default function PilulaPage() {
  return (
    <Article
      kicker="Vida · dúvida frequente"
      title="A pílula e os medicamentos GLP-1"
      lede="Não mude o método contraceptivo sozinho. O ponto é simples: o estômago esvazia mais devagar; alguns comprimidos podem absorver-se de forma diferente."
    >
      <div className="callout warning">
        <p>
          Informação oficial da tirzepatida alerta para contraceptivos orais,
          sobretudo ao subir a dose. Isto <strong>não</strong> é um plano
          contraceptivo personalizado.{" "}
          <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>Porque se fala nisto</h2>
      <p>
        Agonistas de GLP-1 (e a tirzepatida) atrasam o esvaziamento gástrico. A
        absorção de medicamentos orais pode alterar-se. Nas informações da
        tirzepatida, os contraceptivos orais são um exemplo explícito a
        discutir com o profissional.
      </p>

      <h2>O que fazer na prática</h2>
      <ul>
        <li>
          Leve o tema à consulta <em>antes</em> de mudar doses ou métodos.
        </li>
        <li>
          Não pare a pílula nem acrescente métodos «porque leu na internet»
          sem orientação.
        </li>
        <li>
          Se puder engravidar, veja também{" "}
          <Link href="/gravidez">gravidez e GLP-1</Link>.
        </li>
      </ul>

      <h2>Continuar</h2>
      <ul>
        <li>
          <Link href="/gravidez">Gravidez e amamentação</Link>
        </li>
        <li>
          <Link href="/checklist">Checklist para a consulta</Link>
        </li>
        <li>
          <Link href="/faq#anticoncepcional">FAQ: a pílula</Link>
        </li>
        <li>
          <Link href="/medicamentos/mounjaro">Página do Mounjaro</Link>
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
