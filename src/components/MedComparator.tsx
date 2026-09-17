"use client";

import { useMemo, useState } from "react";
import { medications, type Medication } from "@/content/medications";

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

export function MedComparator() {
  const sorted = useMemo(
    () => [...medications].sort((a, b) => a.order - b.order),
    [],
  );
  const [left, setLeft] = useState("mounjaro");
  const [right, setRight] = useState("ozempic");

  const a = sorted.find((m) => m.slug === left);
  const b = sorted.find((m) => m.slug === right);

  return (
    <div className="compare-tool">
      <div className="compare-pickers">
        <label>
          Medicamento A
          <select value={left} onChange={(e) => setLeft(e.target.value)}>
            {sorted.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.brandName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Medicamento B
          <select value={right} onChange={(e) => setRight(e.target.value)}>
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
