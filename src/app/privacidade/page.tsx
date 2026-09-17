import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import {
  CONTENT_REVIEWED_LABEL,
  GA_MEASUREMENT_ID,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const description =
  "Como tratamos dados no Guia GLP-1: analytics, cookies e o que não recolhemos. Sem contas de utilizador nesta versão.";

export const metadata: Metadata = pageMetadata({
  title: "Privacidade",
  description,
  path: "/privacidade",
  keywords: ["privacidade", "cookies", "Google Analytics", "meuglp1"],
});

export default function PrivacidadePage() {
  return (
    <div className="shell page-simple">
      <JsonLd
        data={[
          webPageLd({
            name: "Privacidade",
            description,
            path: "/privacidade",
          }),
          breadcrumbLd([
            { name: "Início", path: "/" },
            { name: "Privacidade", path: "/privacidade" },
          ]),
        ]}
      />
      <p className="eyebrow">Dados</p>
      <h1>Privacidade</h1>
      <p className="lede">
        {SITE_NAME} é um site estático informativo. Não cria contas nem vende
        dados pessoais.
      </p>

      <section className="content-block article">
        <h2>O que este site não recolhe</h2>
        <ul>
          <li>Não pedimos nome, email ou dados de saúde para navegar.</li>
          <li>Não temos área de login nem base de dados de utentes.</li>
          <li>Não vendemos listas nem partilhamos dados com anunciantes de medicamentos.</li>
        </ul>

        <h2>Google Analytics 4</h2>
        <p>
          Usamos Google Analytics 4 (propriedade{" "}
          <code>{GA_MEASUREMENT_ID}</code>) para perceber que páginas são úteis —
          por exemplo, se o artigo sobre Rybelsus ou o FAQ são lidos. O Google
          pode processar dados de utilização segundo a respectiva política. O
          identificador está ligado ao domínio {SITE_URL.replace("https://", "")}.
        </p>
        <p>
          Pode limitar cookies de medição nas definições do browser ou com
          extensões de privacidade. Isso pode reduzir a qualidade das estatísticas,
          não o acesso ao conteúdo educativo.
        </p>

        <h2>Logs de servidor e Cloudflare</h2>
        <p>
          O alojamento e a CDN (Cloudflare) podem registar pedidos técnicos
          habituais (IP, user-agent, URL) para segurança e desempenho. Não usamos
          esses logs para perfil clínico.
        </p>

        <h2>Ligações externas</h2>
        <p>
          Links para Infomed, EMA, Ordem dos Médicos e outros sites oficiais têm
          políticas próprias. Ao saír de {SITE_NAME}, aplica-se a política do
          destino.
        </p>

        <h2>Contacto</h2>
        <p>
          Dúvidas sobre esta página: ver <Link href="/sobre/">Sobre</Link> e{" "}
          <Link href="/aviso/">Aviso médico</Link>.
        </p>
      </section>

      <p className="verified">Conteúdo revisto em {CONTENT_REVIEWED_LABEL}.</p>
    </div>
  );
}
