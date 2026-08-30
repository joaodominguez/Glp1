import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { pageMetadata } from "@/lib/seo";
import { GA_MEASUREMENT_ID, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacidade e cookies",
  description:
    "Como o Guia GLP-1 usa Google Analytics (GA4), que dados são recolhidos e como gerir cookies neste site estático.",
  path: "/privacidade",
  keywords: ["privacidade", "cookies", "GA4", "analytics", "RGPD"],
});

export default function PrivacidadePage() {
  return (
    <Article
      kicker="Dados"
      title="Privacidade e cookies"
      lede="Site estático, sem contas de utilizador. Usamos analytics para perceber que páginas ajudam — não para vender o seu perfil."
    >
      <h2>Responsável</h2>
      <p>
        O site <strong>{SITE_URL}</strong> (Guia GLP-1) é um guia informativo. Não
        processamos dados de saúde clínicos seus: não pede login, não guarda
        checklists no servidor e não tem base de dados de utentes.
      </p>

      <h2>Google Analytics 4</h2>
      <p>
        Usamos <strong>Google Analytics 4</strong> com o identificador{" "}
        <code>{GA_MEASUREMENT_ID}</code> para estatísticas de utilização (páginas
        vistas, origem aproximada do tráfego, dispositivo). O objectivo é
        melhorar o guia — por exemplo, perceber se as páginas de preços ou de
        efeitos são úteis.
      </p>
      <ul>
        <li>
          O Google pode processar estes dados segundo a sua própria política de
          privacidade.
        </li>
        <li>
          Não usamos o analytics para anúncios personalizados neste site, nem
          vendemos listas de emails (não as temos).
        </li>
        <li>
          A checklist da consulta e a preferência de tema ficam só no{" "}
          <em>localStorage</em> do seu browser.
        </li>
      </ul>

      <h2>Cookies e armazenamento local</h2>
      <ul>
        <li>
          <strong>Analytics (GA4):</strong> cookies / identificadores do Google
          Analytics para medir visitas.
        </li>
        <li>
          <strong>Tema claro/escuro:</strong> preferência guardada localmente (
          <code>guia-glp1-theme</code>).
        </li>
        <li>
          <strong>Aviso de analytics:</strong> se fechar a barra, guardamos{" "}
          <code>guia-glp1-cookie-notice</code> para não repetir o aviso.
        </li>
        <li>
          <strong>Checklist:</strong> progresso da checklist no browser, sem
          envio para o servidor.
        </li>
      </ul>

      <h2>Como controlar</h2>
      <p>
        Pode bloquear cookies de terceiros nas definições do browser, usar modos
        de navegação privada, ou extensões de bloqueio. Limpar o armazenamento
        local remove tema, aviso e checklist guardados neste dispositivo.
      </p>

      <h2>Ligações úteis</h2>
      <ul>
        <li>
          <Link href="/aviso">Aviso médico</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre o guia</Link>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de privacidade da Google
          </a>
        </li>
      </ul>
    </Article>
  );
}
