import Link from "next/link";
import {
  aboutLinks,
  brasilLinks,
  portugalLinks,
  toolLinks,
} from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">Guia GLP-1</p>
          <p>
            Informação em português sobre a classe GLP-1. Educativo — não é
            consulta, farmácia nem folheto de laboratório.
          </p>
        </div>
        <div>
          <p>Portugal e Brasil</p>
          <ul>
            {portugalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            {brasilLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Ferramentas e transparência</p>
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
        Não substitui consulta, diagnóstico nem prescrição.{" "}
        <Link href="/aviso">Aviso médico</Link>
        {" · "}
        <Link href="/sobre">Sobre</Link>
        {" · "}
        <Link href="/privacidade">Privacidade</Link>
      </p>
    </footer>
  );
}
