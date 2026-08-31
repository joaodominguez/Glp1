"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "guia-glp1-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "dismissed") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="region" aria-label="Aviso de analytics">
      <p>
        Usamos Google Analytics (GA4) para perceber que páginas ajudam — sem
        vender dados.{" "}
        <Link href="/privacidade">Privacidade</Link>
      </p>
      <button type="button" className="cookie-dismiss" onClick={dismiss}>
        Entendi
      </button>
    </div>
  );
}
