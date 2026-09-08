import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Comprar GLP-1 online — riscos e sinais de alerta",
  description:
    "Porque comprar Mounjaro, Ozempic ou Wegovy sem receita e sem farmácia identificada é inseguro: falsificações, cadeia de frio e ilegalidade. Alternativas honestas.",
  path: "/comprar-online",
  keywords: [
    "comprar Mounjaro online",
    "Ozempic falsificado",
    "caneta ilegal",
    "GLP-1 farmácia",
  ],
});

export default function ComprarOnlinePage() {
  return (
    <Article
      kicker="Segurança · mitos"
      title="Comprar canetas «mais barato» na internet"
      lede="Preço baixo sem receita, sem farmácia e sem cadeia de frio não é pechincha — é um dos riscos clássicos desta classe."
    >
      <div className="callout warning">
        <p>
          Este guia <strong>não</strong> indica onde comprar medicamento. Canetas
          fora do circuito legal são um risco de saúde e, em muitos sítios,
          ilegais. <Link href="/aviso">Aviso médico</Link>.
        </p>
      </div>

      <h2>Sinais de alerta</h2>
      <ul>
        <li>Venda sem receita ou «receita fácil» por mensagem.</li>
        <li>Preço muito abaixo do PVP habitual do país.</li>
        <li>Remetente sem farmácia identificada / sem cold chain.</li>
        <li>Embalagens estranhas, sem folheto na língua local, ou «genérico» duvidoso.</li>
        <li>Quem vende a caneta no mesmo sítio em que «consulta» em cinco minutos.</li>
      </ul>

      <h2>O que pode correr mal</h2>
      <p>
        Falsificações, doses erradas, contaminação, interrupção do frio,
        ausência de acompanhamento quando há efeitos graves. Se o custo é o
        obstáculo, isso é assunto para o médico, o seguro ou o sistema de saúde —
        não para um anúncio.
      </p>

      <h2>Caminhos mais seguros (orientação)</h2>
      <ul>
        <li>
          <Link href="/precos">Preços em Portugal</Link> e verificação Infomed
        </li>
        <li>
          <Link href="/brasil/precos">Preços no Brasil</Link> e ANVISA
        </li>
        <li>
          <Link href="/medicos">Médicos (PT)</Link> /{" "}
          <Link href="/brasil/medicos">Médicos (BR)</Link>
        </li>
        <li>
          <Link href="/checklist">Checklist para a consulta</Link>
        </li>
      </ul>

      <h2>Continuar</h2>
      <ul>
        <li>
          <Link href="/faq#comprar-online">FAQ: comprar online</Link>
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
