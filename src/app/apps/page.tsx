import type { Metadata } from "next";
import Link from "next/link";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/JsonLd";
import {
  appCategories,
  appRedFlags,
  appSelectionCriteria,
  appsPageDisclaimer,
  recommendedApps,
} from "@/content/apps";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_REVIEWED_AT, SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Apps móveis aconselháveis para tracking de GLP-1: doses, peso, proteína, efeitos e o que evitar. Shotsy, Titra, Pep e alternativas — sem parceria paga.";

export const metadata: Metadata = pageMetadata({
  title: "Apps para tracking GLP-1",
  description,
  path: "/apps",
  keywords: [
    "app Mounjaro",
    "tracker Ozempic",
    "Shotsy",
    "app Wegovy",
    "tracking GLP-1",
  ],
});

export default function AppsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Apps para tracking GLP-1",
    description,
    url: `${SITE_URL}/apps/`,
    dateModified: CONTENT_REVIEWED_AT,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    inLanguage: "pt-PT",
    hasPart: recommendedApps.map((app) => ({
      "@type": "SoftwareApplication",
      name: app.name,
      applicationCategory: "HealthApplication",
      operatingSystem:
        app.platforms === "ios"
          ? "iOS"
          : app.platforms === "android"
            ? "Android"
            : "iOS, Android",
      url: app.href ?? app.hrefIos ?? app.hrefAndroid,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Article
        kicker="Ferramentas · telemóvel"
        title="Apps aconselháveis para fazer tracking"
        lede="Dose semanal, peso, proteína, náuseas — o telemóvel pode ajudar a não perder o fio. Aqui vai o critério e exemplos úteis, sem ranking pago."
      >
        <div className="callout warning">
          <p>
            <strong>{appsPageDisclaimer}</strong>
          </p>
        </div>

        <h2>O que uma boa app deve fazer</h2>
        <ul>
          {appSelectionCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Por categoria</h2>
        {appCategories.map((cat) => {
          const apps = recommendedApps.filter((app) => app.category === cat.id);
          if (apps.length === 0) return null;
          return (
            <div key={cat.id}>
              <h3>{cat.label}</h3>
              <p>{cat.blurb}</p>
              <ul className="med-list">
                {apps.map((app) => (
                  <li key={app.id}>
                    <div>
                      <strong>{app.name}</strong>
                      <span className="med-meta">
                        {app.categoryLabel}
                        {" · "}
                        {app.platforms === "ambos"
                          ? "iOS e Android"
                          : app.platforms === "ios"
                            ? "iOS"
                            : "Android"}
                      </span>
                      <span>{app.summary}</span>
                      <p>
                        <strong>Serve para:</strong> {app.goodFor.join("; ")}.
                      </p>
                      <p>
                        <strong>Atenção:</strong> {app.watchOut.join("; ")}.
                      </p>
                      <p className="app-links">
                        {app.href ? (
                          <a href={app.href} target="_blank" rel="noopener noreferrer">
                            Site
                          </a>
                        ) : null}
                        {app.hrefIos ? (
                          <a href={app.hrefIos} target="_blank" rel="noopener noreferrer">
                            App Store
                          </a>
                        ) : null}
                        {app.hrefAndroid ? (
                          <a
                            href={app.hrefAndroid}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google Play
                          </a>
                        ) : null}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <h2>Sinais de alerta</h2>
        <ul>
          {appRedFlags.map((flag) => (
            <li key={flag.title}>
              <strong>{flag.title}.</strong> {flag.detail}
            </li>
          ))}
        </ul>

        <h2>Leve o histórico à consulta</h2>
        <p>
          O tracking só vale se ajudar a conversa clínica. Use a{" "}
          <Link href="/checklist">checklist</Link> e, se puder, exporte peso,
          doses e efeitos das últimas semanas.
        </p>

        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/tratamento">Como costuma ser o tratamento</Link>
          </li>
          <li>
            <Link href="/efeitos">Efeitos e sinais de alerta</Link>
          </li>
          <li>
            <Link href="/precos">Preços em Portugal</Link>
          </li>
        </ul>
      </Article>
    </>
  );
}
