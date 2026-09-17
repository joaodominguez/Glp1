"use client";

import { useEffect, useState } from "react";
import {
  CHECKLIST_STORAGE_KEY,
  checklistSections,
} from "@/content/checklist";

export function InteractiveChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, ready]);

  const total = checklistSections.reduce((n, s) => n + s.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="checklist-stack">
      <p className="soft-note">
        Progresso neste dispositivo: {done}/{total}. Os vistos ficam guardados
        no browser (não enviamos estes dados).
      </p>
      {checklistSections.map((section) => (
        <div key={section.id} className="checklist-block">
          <h3>{section.title}</h3>
          <p>{section.intro}</p>
          <ul className="checklist checklist-interactive">
            {section.items.map((item) => {
              const id = `${section.id}-${item.id}`;
              const isOn = Boolean(checked[id]);
              return (
                <li key={id}>
                  <label className="check-row">
                    <input
                      type="checkbox"
                      checked={isOn}
                      onChange={() =>
                        setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
                      }
                    />
                    <span>
                      <strong>{item.label}</strong>
                      {item.hint ? (
                        <span className="hint">{item.hint}</span>
                      ) : null}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => setChecked({})}
      >
        Limpar vistos
      </button>
    </div>
  );
}
