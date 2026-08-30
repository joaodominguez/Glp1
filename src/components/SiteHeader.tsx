"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { aboutLinks, learnLinks, toolLinks } from "@/content/nav";

const primaryLinks = [
  ...learnLinks.slice(0, 3),
  toolLinks[0],
  toolLinks[2],
  aboutLinks[1],
];

const groups = [
  { label: "Aprender", items: learnLinks },
  { label: "Ferramentas", items: toolLinks },
  { label: "Sobre", items: aboutLinks },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark className="brand-mark" />
          <span>
            <strong>Guia GLP-1</strong>
            <em>Mounjaro em português claro</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Secções principais">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" className="mobile-nav" aria-label="Menu">
          {groups.map((group) => (
            <div key={group.label}>
              <p>{group.label}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
