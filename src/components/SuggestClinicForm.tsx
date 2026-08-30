"use client";

import { CONTACT_EMAIL } from "@/lib/site";

const SUBJECT = "Sugestão de clínica — Guia GLP-1";

const BODY = `Olá,

Gostaria de sugerir uma clínica / centro para o guia:

Nome:
Cidade / região:
País (PT ou BR):
Site ou contacto público:
Porque faz sentido incluir:

Obrigado.`;

export function SuggestClinicForm() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  return (
    <div className="suggest-box">
      <p>
        Não há backend neste site estático: o botão abre o seu cliente de email
        com um modelo pronto. Se preferir, escreva directamente para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p className="cta-row" style={{ marginBottom: 0 }}>
        <a className="button button-primary" href={mailto}>
          Abrir email com modelo
        </a>
      </p>
    </div>
  );
}
