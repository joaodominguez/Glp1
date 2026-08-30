import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { aboutLinks, toolLinks } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="hero-brand" style={{ marginBottom: "0.75rem" }}>
            <BrandMark className="brand-mark" style={{ width: 40, height: 40 }} />
            <div>
              <p className="footer-brand">Guia GLP-1</p>
            </div>
          </div>
          <p>
            Um sítio para quem procura informação em português sem ter de
            atravessar fóruns, anúncios e meias verdades.
          </p>
        </div>
        <div>
          <p>Ferramentas</p>
          <ul>
            {toolLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Responsabilidade</p>
          <ul>
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-note">
        Não substitui consulta, diagnóstico nem prescrição. Conteúdo educativo,
        revisto para clareza — não é um folheto oficial do medicamento.
      </p>
    </footer>
  );
}
