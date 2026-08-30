"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { aboutLinks, learnLinks, toolLinks } from "@/content/nav";

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
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path
                d="M9 19c3-8 11-10 14-3 1 3-1 6-4 7-4 1-7-1-10-4Z"
                fill="#f4efe4"
              />
            </svg>
          </span>
          <span>
            <strong>Guia GLP-1</strong>
            <em>Mounjaro em português claro</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Secções principais">
          {groups.map((group) => (
            <div className="nav-group" key={group.label}>
              <span>{group.label}</span>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

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
