import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

const description =
  "Clínicas e consultas para GLP-1 em Portugal: o critério (não um ranking), sinais de alerta e como avançar com médico de família ou endocrinologia.";

export const metadata: Metadata = pageMetadata({
  title: "Clínicas GLP-1 em Portugal — critério, não ranking",
  description,
  path: "/clinicas",
  keywords: [
    "clínicas Mounjaro Portugal",
    "consulta obesidade",
    "clínica GLP-1",
    "endocrinologia Portugal",
  ],
});

export default function ClinicasPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Clínicas GLP-1 em Portugal",
            description,
            path: "/clinicas",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Clínicas", path: "/clinicas" },
          ]),
        ]}
      />
      <p className="eyebrow">Portugal · onde consultar</p>
      <h1>Clínicas — o critério, não um top 10</h1>
      <p className="lede">
        Não listamos «as melhores clínicas». Explicamos o que pedir a uma
        consulta séria e para onde ir a seguir — SNS ou privado.
      </p>

      <div className="disclaimer">
        <strong>O Guia GLP-1 não classifica clínicas.</strong> Não temos
        parcerias pagas. Um bom sítio pode ser hospital público, consulta de
        obesidade ou endocrinologia privada — o que importa é a avaliação
        clínica, não o marketing.
      </div>

      <section className="content-block article">
        <h2>O que uma boa consulta costuma incluir</h2>
        <ul>
          <li>História clínica completa (tiroide, pâncreas, gravidez, outros fármacos).</li>
          <li>Objectivo claro (diabetes, peso, ambos) e plano de titulação.</li>
          <li>Espaço para efeitos adversos, stock e custo — sem pressão de venda.</li>
          <li>Encaminhamento para nutrição quando fizer sentido.</li>
        </ul>

        <h2>Sinais de alerta</h2>
        <ul>
          <li>Receita depois de um formulário de 2 minutos, sem perguntas clínicas.</li>
          <li>Venda da caneta no mesmo sítio da «consulta».</li>
          <li>Promessas de resultado garantido ou dose máxima «para ir mais depressa».</li>
        </ul>

        <h2>Por onde começar</h2>
        <p>
          No SNS, o médico de família é o ponto de entrada habitual. No privado,
          endocrinologia ou consulta multidisciplinar de obesidade são perfis
          frequentes. Confirme cédula na Ordem dos Médicos.
        </p>
        <p>
          A página completa de critérios e a checklist estão em{" "}
          <Link href="/medicos/">Médicos</Link>
          {" · "}
          <Link href="/medicos/#checklist">Checklist da consulta</Link>.
        </p>
      </section>

      <div className="next-reads">
        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/medicos/">
              <strong>Médicos</strong>
              <span>Perfis, red flags e checklist.</span>
            </Link>
          </li>
          <li>
            <Link href="/precos/">
              <strong>Preços</strong>
              <span>Ordens de grandeza em Portugal.</span>
            </Link>
          </li>
          <li>
            <Link href="/onde-comprar/">
              <strong>Onde comprar</strong>
              <span>Farmácia legal, sem atalhos.</span>
            </Link>
          </li>
        </ul>
      </div>

      <p className="verified">
        Revisão editorial:{" "}
        <time dateTime={CONTENT_REVIEWED_AT}>{CONTENT_REVIEWED_LABEL}</time>
      </p>
    </div>
  );
}
