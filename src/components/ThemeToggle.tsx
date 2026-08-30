"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-switch" role="group" aria-label="Tema">
      <button
        type="button"
        className={theme === "light" ? "is-active" : undefined}
        aria-pressed={theme === "light"}
        aria-label="Modo claro"
        onClick={() => setTheme("light")}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path
            d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </button>
      <button
        type="button"
        className={theme === "dark" ? "is-active" : undefined}
        aria-pressed={theme === "dark"}
        aria-label="Modo escuro"
        onClick={() => setTheme("dark")}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path
            d="M19 13.5A7.5 7.5 0 1 1 10.5 5 6 6 0 0 0 19 13.5Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
