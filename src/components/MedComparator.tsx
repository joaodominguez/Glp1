"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { medications, type Medication } from "@/content/medications";
import { trackEvent } from "@/lib/analytics";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="compare-field">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function MedColumn({ med }: { med: Medication | undefined }) {
  if (!med) {
    return <p className="soft-note">Escolha um medicamento.</p>;
  }
  return (
    <dl className="compare-dl">
      <Field label="Nome" value={med.brandName} />
      <Field label="Substância" value={med.substance} />
      <Field label="Empresa" value={med.company} />
      <Field label="Mecanismo" value={med.mechanismLabel} />
      <Field label="Via" value={med.route} />
      <Field label="Frequência" value={med.frequency} />
      <Field label="Resumo" value={med.summary} />
    </dl>
  );
}

const PAIR_ARTICLES: Record<string, { href: string; label: string }> = {
  "mounjaro|ozempic": {
    href: "/artigos/mounjaro-vs-ozempic/",
    label: "Artigo: Mounjaro vs Ozempic",
  },
  "mounjaro|wegovy": {
    href: "/artigos/mounjaro-vs-wegovy/",
    label: "Artigo: Mounjaro vs Wegovy",
  },
  "ozempic|rybelsus": {
    href: "/artigos/rybelsus-vs-ozempic/",
    label: "Artigo: Rybelsus vs Ozempic",
  },
  "ozempic|wegovy": {
    href: "/artigos/ozempic-vs-wegovy/",
    label: "Artigo: Ozempic vs Wegovy",
  },
  "saxenda|wegovy": {
    href: "/artigos/saxenda-vs-wegovy/",
    label: "Artigo: Saxenda vs Wegovy",
  },
  "saxenda|victoza": {
    href: "/artigos/victoza-vs-saxenda/",
    label: "Artigo: Victoza vs Saxenda",
  },
};

function pairKey(a: string, b: string) {
  return [a, b].sort().join("|");
}

export function MedComparator() {
  const sorted = useMemo(
    () => [...medications].sort((a, b) => a.order - b.order),
    [],
  );
  const [left, setLeft] = useState("mounjaro");
  const [right, setRight] = useState("ozempic");

  const a = sorted.find((m) => m.slug === left);
  const b = sorted.find((m) => m.slug === right);
  const article = PAIR_ARTICLES[pairKey(left, right)];

  useEffect(() => {
    trackEvent("compare_view", { med_a: left, med_b: right });
  }, [left, right]);

  return (
    <div className="compare-tool">
      <div className="compare-pickers">
        <label>
          Medicamento A
          <select
            value={left}
            onChange={(e) => {
              setLeft(e.target.value);
              trackEvent("compare_change", {
                med_a: e.target.value,
                med_b: right,
              });
            }}
          >
            {sorted.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.brandName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Medicamento B
          <select
            value={right}
            onChange={(e) => {
              setRight(e.target.value);
              trackEvent("compare_change", {
                med_a: left,
                med_b: e.target.value,
              });
            }}
          >
            {sorted.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.brandName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="disclaimer">
        Comparação factual do nosso levantamento — não diz qual é «melhor» para
        si. Confirme Infomed e a consulta.
      </p>
      {article ? (
        <p className="soft-note">
          Leitura relacionada:{" "}
          <Link href={article.href} onClick={() => trackEvent("compare_article_click")}>
            {article.label}
          </Link>
        </p>
      ) : null}
      <div className="compare-grid">
        <div>
          <h2>{a?.brandName ?? "—"}</h2>
          <MedColumn med={a} />
        </div>
        <div>
          <h2>{b?.brandName ?? "—"}</h2>
          <MedColumn med={b} />
        </div>
      </div>
    </div>
  );
}
