import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { aboutLinks, learnLinks, portugalLinks, toolLinks } from "@/content/nav";

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
            Informação em português sobre Mounjaro, Ozempic, Wegovy, Saxenda e
            o resto da classe GLP-1 — sem fóruns, anúncios nem meias verdades.
          </p>
        </div>
        <div>
          <p>Aprender</p>
          <ul>
            {learnLinks.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>Em Portugal</p>
          <ul>
            {portugalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Ferramentas e aviso</p>
          <ul>
            {toolLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
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
        revisto para clareza — não é um folheto oficial de nenhum medicamento.{" "}
        <Link href="/aviso">Ler o aviso completo</Link>.
      </p>
    </footer>
  );
}
