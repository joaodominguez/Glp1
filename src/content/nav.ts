export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const learnLinks: NavItem[] = [
  {
    href: "/o-que-e",
    label: "O que é",
    description: "Mounjaro, tirzepatida e medicamentos GLP-1",
  },
  {
    href: "/como-funciona",
    label: "Como funciona",
    description: "O que estes medicamentos fazem no corpo",
  },
  {
    href: "/tratamento",
    label: "O tratamento",
    description: "Como costuma ser o uso, sem substituir o médico",
  },
  {
    href: "/efeitos",
    label: "Efeitos",
    description: "Efeitos secundários comuns e sinais de alerta",
  },
  {
    href: "/primeiras-semanas",
    label: "Primeiras semanas",
    description: "O que muita gente sente no início",
  },
];

export const toolLinks: NavItem[] = [
  {
    href: "/faq",
    label: "Perguntas",
    description: "FAQ pesquisável, em linguagem simples",
  },
  {
    href: "/glossario",
    label: "Glossário",
    description: "Termos médicos explicados sem jargão",
  },
  {
    href: "/checklist",
    label: "Checklist",
    description: "Preparar a consulta com o profissional de saúde",
  },
];

export const aboutLinks: NavItem[] = [
  {
    href: "/fontes",
    label: "Fontes",
    description: "Documentos oficiais e reguladores",
  },
  {
    href: "/aviso",
    label: "Aviso médico",
    description: "O que este site é — e o que não é",
  },
];

export const allNavLinks = [...learnLinks, ...toolLinks, ...aboutLinks];
