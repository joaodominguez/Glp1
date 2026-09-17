import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import {
  CONTENT_REVIEWED_LABEL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

const description =
  "Quem está por detrás do Guia GLP-1, como escolhemos o conteúdo e porque não vendemos medicamentos nem rankeamos clínicas.";

export const metadata: Metadata = pageMetadata({
  title: "Sobre o Guia GLP-1",
  description,
  path: "/sobre",
  keywords: ["sobre Guia GLP-1", "meuglp1", "informação GLP-1 Portugal"],
});

export default function SobrePage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: `Sobre — ${SITE_NAME}`,
            description,
            path: "/sobre",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Sobre", path: "/sobre" },
          ]),
        ]}
      />
      <p className="eyebrow">Transparência</p>
      <h1>Sobre</h1>
      <p className="lede">{SITE_TAGLINE}.</p>

      <section className="content-block article">
        <h2>O que queremos ser</h2>
        <p>
          Um mapa em português europeu para quem ouve falar de Mounjaro, Ozempic,
          Wegovy ou Rybelsus e precisa de contexto antes — e depois — da consulta.
          Preferimos perguntas melhores a respostas milagre.
        </p>

        <h2>Como escolhemos o conteúdo</h2>
        <ul>
          <li>Priorizamos dúvidas reais e sinais do Search Console (ex.: Rybelsus em Portugal).</li>
          <li>Cruzamos nomes e indicações com Infomed, INFARMED e EMA.</li>
          <li>Escrevemos em linguagem clara; termos técnicos vão para o glossário.</li>
          <li>Actualizamos quando regras, preços ou stock mudam de forma material.</li>
        </ul>

        <h2>O que não fazemos</h2>
        <ul>
          <li>Não vendemos medicamentos nem recebemos comissão por farmácias.</li>
          <li>Não publicamos rankings de médicos ou clínicas.</li>
          <li>Não recomendamos doses, marcas ou esquemas de tratamento.</li>
        </ul>

        <h2>Contacto editorial</h2>
        <p>
          Encontrou um erro factual? Prefira as{" "}
          <Link href="/fontes/">fontes oficiais</Link> e diga-nos o que corrigir —
          o objectivo é utilidade, não ego. Ver também o{" "}
          <Link href="/aviso/">aviso médico</Link> e a{" "}
          <Link href="/privacidade/">privacidade</Link>.
        </p>
      </section>

      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
