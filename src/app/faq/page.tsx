import type { Metadata } from "next";
import { FaqExplorer } from "@/components/FaqExplorer";
import { JsonLd } from "@/components/JsonLd";
import { faqItems } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas frequentes sobre GLP-1",
  description:
    "FAQ em português: Mounjaro vs Ozempic, Wegovy, náuseas, dose esquecida, tiroide, gravidez, comprar online e mitos sobre medicamentos GLP-1.",
  path: "/faq",
});

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: `${SITE_URL}/faq/`,
    inLanguage: "pt-PT",
  };

  return (
    <section className="tool-page">
      <JsonLd data={faqLd} />
      <p className="kicker">Ferramenta</p>
      <h1>Perguntas, sem o ruído dos grupos</h1>
      <p className="lede">
        Respostas curtas ao que mais se mistura em português: Mounjaro, Ozempic,
        Wegovy e o resto da classe — o que são, como se usam, o que é efeito e
        o que é mito. Filtre por tema ou escreva uma palavra.
      </p>
      <FaqExplorer />
    </section>
  );
}
