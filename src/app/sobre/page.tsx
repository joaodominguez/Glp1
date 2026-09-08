import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sobre o Guia GLP-1",
  description:
    "Quem faz o Guia GLP-1, como é o processo editorial, data da última revisão e porque isto não é aconselhamento médico.",
  path: "/sobre",
  keywords: ["sobre", "E-E-A-T", "Guia GLP-1", "revisão editorial"],
});

export default function SobrePage() {
  return (
    <Article
      kicker="Transparência"
      title="Quem somos e como trabalhamos"
      lede="O Guia GLP-1 existe para juntar, em português claro, o que está disperso em bulas e páginas oficiais — sem vender canetas nem milagres."
    >
      <h2>O que é este guia</h2>
      <p>
        É um site educativo sobre agonistas de GLP-1 e medicamentos afins
        (Mounjaro, Ozempic, Wegovy, Saxenda e outros). Serve leitores em Portugal
        e no Brasil.{" "}
        <strong>Não é clínica, farmácia, consultório nem folheto oficial</strong>{" "}
        de nenhum laboratório.
      </p>

      <h2>Processo editorial</h2>
      <ol>
        <li>
          Partimos de documentos públicos (EMA, INFARMED/Infomed, ANVISA, FDA,
          bulas) listados em <Link href="/fontes">Fontes</Link>.
        </li>
        <li>
          Reescrevemos em linguagem acessível, sem inventar doses, indicações ou
          «resultados garantidos».
        </li>
        <li>
          Marcamos limites: o que é resumo, o que muda por país, e o que só o
          médico pode decidir.
        </li>
        <li>
          Revisão de clareza e exactidão factual — não substitui revisão clínica
          individual.
        </li>
      </ol>

      <p className="callout">
        <strong>Última revisão editorial do guia:</strong>{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time> (
        {CONTENT_REVIEWED_AT}).
      </p>

      <h2>Revisor clínico (futuro)</h2>
      <p>
        Ainda não há um revisor clínico nomeado nesta versão. Quando houver, o
        nome, credenciais e data de revisão clínica aparecerão aqui — separados
        da revisão editorial de clareza.
      </p>
      <p>
        Placeholder: <em>Revisor clínico — a anunciar</em>.
      </p>

      <h2>O que isto não é</h2>
      <p>
        Não é aconselhamento médico, diagnóstico nem prescrição. Não inicia nem
        altera tratamentos. Leia o <Link href="/aviso">aviso médico</Link>{" "}
        completo. Em dúvida clínica, fale com um profissional de saúde — não com
        um site.
      </p>

      <h2>Contacto</h2>
      <p>
        Sugestões de clínica, correcções factuais ou questões editoriais:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Também pode{" "}
        <Link href="/sugerir">sugerir uma clínica</Link>.
      </p>

      <h2>Privacidade</h2>
      <p>
        Usamos analytics de forma leve. Detalhes em{" "}
        <Link href="/privacidade">Privacidade e cookies</Link>.
      </p>
    </Article>
  );
}
