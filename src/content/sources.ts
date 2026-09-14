export type SourceLink = {
  id: string;
  title: string;
  href: string;
  why: string;
};

export const officialSources: SourceLink[] = [
  {
    id: "infomed",
    title: "Infomed (INFARMED)",
    href: "https://extranet.infarmed.pt/INFOMED-fo/",
    why: "PVP, estatuto e informação oficial de medicamentos em Portugal.",
  },
  {
    id: "infarmed",
    title: "INFARMED",
    href: "https://www.infarmed.pt/",
    why: "Autoridade nacional do medicamento e produtos de saúde.",
  },
  {
    id: "ema",
    title: "EMA — Agência Europeia de Medicamentos",
    href: "https://www.ema.europa.eu/",
    why: "Avaliação e informação europeia sobre medicamentos autorizados.",
  },
  {
    id: "ordem",
    title: "Ordem dos Médicos — pesquisa de médicos",
    href: "https://ordemdosmedicos.pt/pesquisa-de-medicos/",
    why: "Confirmar cédula e especialidade antes de confiar num prescritor.",
  },
  {
    id: "dgs",
    title: "Direção-Geral da Saúde",
    href: "https://www.dgs.pt/",
    why: "Orientações e informação de saúde pública em Portugal.",
  },
];

export const manufacturerSources: SourceLink[] = [
  {
    id: "ema-search",
    title: "EMA — pesquisa de medicamentos",
    href: "https://www.ema.europa.eu/en/medicines",
    why: "Fichas europeias (EPAR) dos medicamentos autorizados na UE.",
  },
  {
    id: "sns24",
    title: "SNS 24",
    href: "https://www.sns24.gov.pt/",
    why: "Linha e informação de saúde do SNS para dúvidas e urgências.",
  },
];

export const editorialPrinciples = [
  "Não vendemos medicamentos nem recebemos comissão por farmácias ou clínicas.",
  "Não publicamos rankings de médicos nem «top clínicas».",
  "Preferimos linguagem clara a jargão — sem simplificar riscos de mais.",
  "Quando os preços ou regras mudam, a Infomed e a bula mandam sobre este site.",
  "Conteúdo educativo YMYL: não substitui consulta, diagnóstico ou prescrição.",
];
