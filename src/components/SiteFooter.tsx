import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand-block">
          <p className="footer-brand">{SITE_NAME}</p>
          <p className="footer-note">
            meuglp1.pt · Portugal. Conteúdo informativo — não substitui
            consulta, diagnóstico nem prescrição. Não vendemos medicamentos.
          </p>
        </div>
        <div className="footer-cols">
          <nav aria-label="Guia">
            <p className="footer-col-title">Guia</p>
            <Link href="/precos/">Preços</Link>
            <Link href="/medicamentos/">Medicamentos</Link>
            <Link href="/artigos/">Artigos</Link>
            <Link href="/perguntas/">Perguntas</Link>
            <Link href="/comparar/">Comparar</Link>
          </nav>
          <nav aria-label="Portugal">
            <p className="footer-col-title">Portugal</p>
            <Link href="/clinicas/">Clínicas</Link>
            <Link href="/medicos/">Médicos</Link>
            <Link href="/onde-comprar/">Onde comprar</Link>
            <Link href="/artigos/como-ler-infomed/">Infomed</Link>
            <Link href="/fontes/">Fontes</Link>
          </nav>
          <nav aria-label="Confiança">
            <p className="footer-col-title">Confiança</p>
            <Link href="/sobre/">Sobre</Link>
            <Link href="/aviso/">Aviso médico</Link>
            <Link href="/privacidade/">Privacidade</Link>
            <Link href="/sugerir/">Sugerir</Link>
            <Link href="/pesquisa/">Pesquisar</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
