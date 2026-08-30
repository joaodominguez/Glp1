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
    href: "/precos",
    label: "Preços",
    description: "PVP e comparticipação em Portugal",
  },
  {
    href: "/brasil",
    label: "Brasil",
    description: "Preços, médicos e clínicas no Brasil",
  },
  {
    href: "/apps",
    label: "Apps",
    description: "Tracking de dose, peso e hábitos",
  },
  {
    href: "/medicos",
    label: "Médicos",
    description: "Quem acompanha e sinais de alerta",
  },
  {
    href: "/clinicas",
    label: "Clínicas",
    description: "Centros e hospitais — orientação",
  },
  {
    href: "/faq",
    label: "Perguntas",
    description: "FAQ em linguagem simples",
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

export const portugalLinks: NavItem[] = [
  {
    href: "/precos",
    label: "Preços (Portugal)",
    description: "Ordens de grandeza de PVP e comparticipação SNS",
  },
  {
    href: "/medicos",
    label: "Médicos (Portugal)",
    description: "Especialidades aconselháveis e sinais de alerta",
  },
  {
    href: "/clinicas",
    label: "Clínicas (Portugal)",
    description: "Exemplos de centros e o que verificar antes de marcar",
  },
];

export const brasilLinks: NavItem[] = [
  {
    href: "/brasil",
    label: "Hub Brasil",
    description: "Mapa do mercado brasileiro (pt-BR)",
  },
  {
    href: "/brasil/precos",
    label: "Preços (Brasil)",
    description: "Faixas em R$, SUS, planos e ANVISA",
  },
  {
    href: "/brasil/medicos",
    label: "Médicos (Brasil)",
    description: "Endocrino, nutrologia, CRM e red flags",
  },
  {
    href: "/brasil/clinicas",
    label: "Clínicas (Brasil)",
    description: "Einstein, Sírio, SUS e outras — orientação",
  },
];

export const toolLinks: NavItem[] = [
  {
    href: "/apps",
    label: "Apps",
    description: "Tracking de dose, peso, proteína e efeitos",
  },
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
    href: "/sobre",
    label: "Sobre",
    description: "Quem somos, revisão editorial e limites",
  },
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
  {
    href: "/privacidade",
    label: "Privacidade",
    description: "Analytics GA4 e cookies",
  },
  {
    href: "/sugerir",
    label: "Sugerir clínica",
    description: "Enviar uma sugestão por email",
  },
];

/** Intent / FAQ landing pages for search + sitemap. */
export const intentLinks: NavItem[] = [
  {
    href: "/nauseas",
    label: "Náuseas",
    description: "Efeitos digestivos frequentes e sinais de alerta",
  },
  {
    href: "/dose-esquecida",
    label: "Dose esquecida",
    description: "Regras gerais das bulas — sem inventar dose extra",
  },
  {
    href: "/gravidez",
    label: "Gravidez",
    description: "GLP-1, gravidez e amamentação",
  },
  {
    href: "/pilula",
    label: "Pílula",
    description: "Contraceptivo oral e absorção",
  },
  {
    href: "/comprar-online",
    label: "Comprar online",
    description: "Riscos de canetas fora do circuito legal",
  },
  {
    href: "/mounjaro-vs-ozempic",
    label: "Mounjaro vs Ozempic",
    description: "Diferenças entre tirzepatida e semaglutida",
  },
];

export const allNavLinks = [
  ...learnLinks,
  ...portugalLinks,
  ...brasilLinks,
  ...toolLinks,
  ...aboutLinks,
  ...intentLinks,
];
