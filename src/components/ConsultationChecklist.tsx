"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  CHECKLIST_STORAGE_KEY,
  checklistSections,
} from "@/content/checklist";

const emptySnapshot = "{}";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(CHECKLIST_STORAGE_KEY) ?? emptySnapshot;
}

function getServerSnapshot() {
  return emptySnapshot;
}

function parseChecked(raw: string): Record<string, boolean> {
  try {
    return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function ConsultationChecklist() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const checked = useMemo(() => parseChecked(raw), [raw]);

  const { total, done } = useMemo(() => {
    const ids = checklistSections.flatMap((section) =>
      section.items.map((item) => item.id),
    );
    return {
      total: ids.length,
      done: ids.filter((id) => checked[id]).length,
    };
  }, [checked]);

  function write(next: Record<string, boolean>) {
    window.localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
    emit();
  }

  function toggle(id: string) {
    write({ ...checked, [id]: !checked[id] });
  }

  function reset() {
    write({});
  }

  return (
    <div className="tool-panel checklist">
      <div className="checklist-progress">
        <p>
          {done} de {total} pontos preparados
        </p>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
        >
          <span style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
        </div>
        <div className="checklist-actions">
          <button type="button" onClick={() => window.print()}>
            Imprimir ou guardar em PDF
          </button>
          <button type="button" className="ghost" onClick={reset}>
            Limpar marcas
          </button>
        </div>
      </div>

      {checklistSections.map((section) => (
        <section key={section.id} className="checklist-section">
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
          <ul>
            {section.items.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={Boolean(checked[item.id])}
                    onChange={() => toggle(item.id)}
                  />
                  <span>
                    <strong>{item.label}</strong>
                    {item.hint ? <em>{item.hint}</em> : null}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
