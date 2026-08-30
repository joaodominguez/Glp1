export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Início", description: "Página inicial" },
  {
    href: "/medicamentos",
    label: "Medicamentos",
    description: "Mounjaro, Ozempic, Wegovy e toda a classe",
  },
  {
    href: "/o-que-e",
    label: "Sobre",
    description: "O que é a família GLP-1",
  },
  {
    href: "/como-funciona",
    label: "Como funciona",
    description: "O que estes medicamentos fazem no corpo",
  },
  {
    href: "/efeitos",
    label: "Efeitos",
    description: "Efeitos secundários e sinais de alerta",
  },
  {
    href: "/primeiras-semanas",
    label: "Primeiras semanas",
    description: "O que muita gente sente no início",
  },
  {
    href: "/faq",
    label: "Perguntas",
    description: "FAQ em linguagem simples",
  },
  {
    href: "/glossario",
    label: "Glossário",
    description: "Termos médicos sem jargão",
  },
  {
    href: "/fontes",
    label: "Fontes",
    description: "Reguladores e documentos oficiais",
  },
];

export const learnLinks: NavItem[] = [
  {
    href: "/medicamentos",
    label: "Medicamentos",
    description: "Levantamento: Mounjaro, Ozempic, Wegovy, Saxenda e outros",
  },
  {
    href: "/o-que-e",
    label: "O que é",
    description: "Família GLP-1, substâncias e nomes comerciais",
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
