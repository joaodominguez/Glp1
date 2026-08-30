export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Início", description: "Página inicial" },
  {
    href: "/o-que-e",
    label: "Sobre",
    description: "O que é o Mounjaro e o GLP-1",
  },
  {
    href: "/como-funciona",
    label: "Como funciona",
    description: "O que estes medicamentos fazem no corpo",
  },
  {
    href: "/efeitos",
    label: "Efeitos e resultados",
    description: "Efeitos secundários e o que esperar",
  },
  {
    href: "/aviso",
    label: "Segurança",
    description: "Avisos, limites e quando procurar ajuda",
  },
  {
    href: "/primeiras-semanas",
    label: "Alimentação",
    description: "Hábitos nas primeiras semanas",
  },
  {
    href: "/fontes",
    label: "Recursos",
    description: "Fontes oficiais e reguladores",
  },
  {
    href: "/faq",
    label: "Blog",
    description: "Perguntas e respostas em linguagem simples",
  },
  {
    href: "/checklist",
    label: "Contato",
    description: "Checklist e preparação para a consulta",
  },
];

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
