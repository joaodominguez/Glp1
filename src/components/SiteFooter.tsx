import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p className="footer-note">
            Conteúdo informativo. Não substitui consulta, diagnóstico nem
            prescrição. Não vendemos medicamentos.
          </p>
        </div>
        <nav className="footer-links" aria-label="Rodapé">
          <Link href="/medicamentos/">Medicamentos</Link>
          <Link href="/precos/">Preços</Link>
          <Link href="/medicos/">Médicos</Link>
          <Link href="/perguntas/">Perguntas</Link>
        </nav>
      </div>
    </footer>
  );
}
