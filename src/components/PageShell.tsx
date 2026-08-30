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
          Informação geral, não conselho médico. Não inicia, altera nem interrompe
          medicamentos com base neste site.{" "}
          <Link href="/aviso">Ler o aviso completo</Link>.
        </p>
      </div>
      <main id="conteudo">{children}</main>
      <SiteFooter />
    </div>
  );
}
