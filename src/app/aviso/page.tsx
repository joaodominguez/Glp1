import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { CONTENT_REVIEWED_LABEL, SITE_NAME } from "@/lib/site";

const description =
  "Este site é informativo e educativo. Não substitui consulta médica, não vende medicamentos e não classifica clínicas.";

export const metadata: Metadata = pageMetadata({
  title: "Aviso médico e responsabilidade",
  description,
  path: "/aviso",
  keywords: ["aviso médico", "disclaimer GLP-1", "informação educativa"],
});

export default function AvisoPage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Aviso médico",
            description,
            path: "/aviso",
            type: "MedicalWebPage",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Aviso médico", path: "/aviso" },
          ]),
        ]}
      />
      <p className="eyebrow">Importante</p>
      <h1>Aviso médico</h1>
      <p className="lede">
        {SITE_NAME} é um guia educativo. Não é consulta, receita, farmácia online
        nem classificação de clínicas.
      </p>

      <div className="disclaimer">
        <strong>Decisões de saúde são consigo e com o seu médico.</strong> Em
        urgência, contacte o SNS 24 ou os serviços de emergência — não este site.
      </div>

      <section className="content-block article">
        <h2>O que este site é</h2>
        <p>
          Um mapa em português europeu sobre medicamentos da família GLP-1 (e
          relacionados): nomes, substâncias, diferenças gerais, preços em
          contexto, perguntas frequentes e artigos práticos. O objectivo é
          preparar perguntas melhores para a consulta — não substituí-la.
        </p>

        <h2>O que este site não é</h2>
        <ul>
          <li>Não vende medicamentos nem encaminha para compra online.</li>
          <li>Não recomenda doses, marcas ou esquemas de tratamento.</li>
          <li>Não classifica nem recomenda clínicas ou médicos.</li>
          <li>Não interpreta análises clínicas individuais.</li>
          <li>Não substitui a bula, o RCM nem o aconselhamento farmacêutico.</li>
        </ul>

        <h2>Responsabilidade</h2>
        <p>
          A informação pode ficar desactualizada face a alterações regulatórias
          ou de stock. Em caso de dúvida, prevalecem Infomed, bula e o
          profissional que o acompanha.
        </p>
        <p>
          Fontes oficiais: <Link href="/fontes/">lista de fontes</Link>. Termos
          técnicos: <Link href="/glossario/">glossário</Link>.
        </p>
      </section>

      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
