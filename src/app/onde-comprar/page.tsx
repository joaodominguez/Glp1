import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  buyRedFlags,
  buyRisks,
  buySaferPaths,
} from "@/content/buy-online";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "Porque comprar Mounjaro, Ozempic ou Wegovy sem receita e sem farmácia identificada é inseguro. Sinais de alerta e o caminho legal em Portugal.";

export const metadata: Metadata = pageMetadata({
  title: "Onde comprar GLP-1 com segurança",
  description,
  path: "/onde-comprar",
  keywords: [
    "comprar Mounjaro online",
    "Ozempic falsificado",
    "caneta ilegal",
    "GLP-1 farmácia",
  ],
});

export default function OndeComprarPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Onde comprar GLP-1 com segurança",
            description,
            path: "/onde-comprar",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Onde comprar", path: "/onde-comprar" },
          ]),
        ]}
      />
      <p className="eyebrow">Segurança</p>
      <h1>Onde comprar — e onde não</h1>
      <p className="lede">
        Preço baixo sem receita, sem farmácia e sem cadeia de frio não é
        pechincha. É um dos riscos clássicos desta classe.
      </p>

      <div className="disclaimer">
        Este guia <strong>não</strong> indica lojas nem links de compra. Não
        vendemos medicamentos. O caminho seguro é receita médica + farmácia
        licenciada.
      </div>

      <article className="article">
        <h2>Sinais de alerta</h2>
        <ul className="points">
          {buyRedFlags.map((flag) => (
            <li key={flag.id}>
              <strong className="ink">{flag.title}.</strong> {flag.detail}
            </li>
          ))}
        </ul>

        <h2>O que pode correr mal</h2>
        <ul className="plain-list">
          {buyRisks.map((risk) => (
            <li key={risk}>{risk}</li>
          ))}
        </ul>

        <h2>Caminhos mais seguros</h2>
        <ul className="profile-list">
          {buySaferPaths.map((path) => (
            <li key={path.title}>
              <strong>{path.title}</strong>
              <p>{path.body}</p>
            </li>
          ))}
        </ul>

        <div className="next-reads">
          <h2>Continuar</h2>
          <ul>
            <li>
              <Link href="/precos/">
                <strong>Preços</strong>
                <span>Confirme Infomed antes de decidir.</span>
              </Link>
            </li>
            <li>
              <Link href="/medicos/">
                <strong>Médicos</strong>
                <span>Quem pode avaliar e receitar.</span>
              </Link>
            </li>
            <li>
              <Link href="/perguntas/">
                <strong>Perguntas</strong>
                <span>Inclui «posso comprar na internet?».</span>
              </Link>
            </li>
          </ul>
        </div>
      </article>

      <p className="verified">
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
      </p>
    </div>
  );
}
