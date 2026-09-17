"use client";

import { useState } from "react";

export function SuggestForm() {
  const [page, setPage] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const draft = [
    "Sugestão de correcção — Guia GLP-1",
    page ? `Página: ${page}` : "Página: (não indicada)",
    "",
    note.trim() || "(sem detalhe)",
  ].join("\n");

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form
      className="suggest-form"
      onSubmit={(e) => {
        e.preventDefault();
        void copyDraft();
      }}
    >
      <label>
        URL ou nome da página (opcional)
        <input
          type="text"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          placeholder="https://www.meuglp1.pt/artigos/…"
        />
      </label>
      <label>
        O que corrigir ou melhorar
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={6}
          required
          placeholder="Descreva o erro factual ou a dúvida — sem dados de saúde pessoais."
        />
      </label>
      <p className="soft-note">
        Não envie dados clínicos identificáveis. Copie o texto e envie-o pelo
        canal que preferir (email pessoal, etc.). Não temos caixa de entrada
        automática neste site.
      </p>
      <button type="submit" className="btn btn-primary">
        {copied ? "Copiado" : "Copiar texto da sugestão"}
      </button>
    </form>
  );
}
