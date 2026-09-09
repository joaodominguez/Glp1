import type { Metadata } from "next";
import Link from "next/link";
import { faqCategories, faqItems } from "@/content/faq";
import { CONTENT_REVIEWED_AT, CONTENT_REVIEWED_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes sobre GLP-1",
  description:
    "FAQ em português: o que é o Mounjaro, quanto custa, que médico procurar, náuseas, dose esquecida e riscos de comprar online.",
};

export default function PerguntasPage() {
  return (
    <div className="shell page-simple">
      <p className="eyebrow">FAQ</p>
      <h1>Perguntas frequentes</h1>
      <p className="lede">
        As dúvidas que aparecem antes da primeira dose e nas primeiras semanas —
        em português claro, sem marketing.
      </p>

      <nav className="faq-toc" aria-label="Categorias">
        {faqCategories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`}>
            {cat.label}
          </a>
        ))}
      </nav>

      {faqCategories.map((cat) => {
        const items = faqItems.filter((item) => item.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={cat.id} className="faq-section">
            <h2>{cat.label}</h2>
            <div className="faq-list">
              {items.map((item) => (
                <details key={item.id} id={item.id} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                  {item.relatedHref && item.relatedLabel ? (
                    <p className="faq-related">
                      <Link href={item.relatedHref}>{item.relatedLabel}</Link>
                    </p>
                  ) : null}
                </details>
              ))}
            </div>
          </section>
        );
      })}

      <div className="next-reads">
        <h2>Continuar</h2>
        <ul>
          <li>
            <Link href="/medicamentos/mounjaro/">
              <strong>Mounjaro</strong>
              <span>A ficha completa.</span>
            </Link>
          </li>
          <li>
            <Link href="/medicos/#checklist">
              <strong>Checklist</strong>
              <span>O que levar à consulta.</span>
            </Link>
          </li>
          <li>
            <Link href="/onde-comprar/">
              <strong>Onde comprar</strong>
              <span>Sem atalhos perigosos.</span>
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
