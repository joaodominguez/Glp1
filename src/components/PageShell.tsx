import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <div className="disclaimer-bar">
        <p>
          <span className="disclaimer-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="16" height="16">
              <path
                fill="currentColor"
                d="M10 1.5 16.5 4v5.2c0 4.2-2.8 7.9-6.5 9.3C6.3 17.1 3.5 13.4 3.5 9.2V4L10 1.5Zm-1.1 11.2 5-5-1.1-1.1-3.9 3.9-1.8-1.8-1.1 1.1 2.9 2.9Z"
              />
            </svg>
          </span>
          <span>
            <strong>Aviso médico:</strong> Este conteúdo é informativo e não
            substitui orientação médica individualizada. Consulte sempre um
            profissional de saúde.{" "}
            <Link href="/aviso">Ler o aviso completo</Link>.
          </span>
        </p>
      </div>
      <main id="conteudo">{children}</main>
      <SiteFooter />
    </div>
  );
}
