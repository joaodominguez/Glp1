export type ClinicExampleBR = {
  id: string;
  name: string;
  region: string;
  kind: "hospital" | "grupo" | "sus" | "diagnostico";
  focus: string;
  href: string;
  note: string;
};

export const clinicExamplesBrazil: ClinicExampleBR[] = [
  {
    id: "einstein",
    name: "Hospital Israelita Albert Einstein — obesidade",
    region: "São Paulo (SP)",
    kind: "hospital",
    focus: "Centro multidisciplinar de prevenção e tratamento da obesidade",
    href: "https://www.einstein.br/",
    note: "Hospital privado de referência. Confirme programas e convênios atuais no site.",
  },
  {
    id: "sirio",
    name: "Hospital Sírio-Libanês — obesidade / bariátrica",
    region: "São Paulo e Brasília",
    kind: "hospital",
    focus: "Endocrinologia, obesidade e cirurgia bariátrica",
    href: "https://www.hospitalsiriolibanes.org.br/",
    note: "Oferta varia por unidade.",
  },
  {
    id: "oswaldo-cruz",
    name: "Hospital Alemão Oswaldo Cruz — obesidade e diabetes",
    region: "São Paulo (SP)",
    kind: "hospital",
    focus: "Centro especializado obesidade + diabetes",
    href: "https://www.hospitaloswaldocruz.org.br/",
    note: "Valide o que o programa inclui (consulta vs pacote).",
  },
  {
    id: "fleury",
    name: "Fleury / a+ medicina — endocrinologia",
    region: "SP, RJ e outras capitais",
    kind: "diagnostico",
    focus: "Consultas e apoio diagnóstico em rede ambulatorial",
    href: "https://www.fleury.com.br/",
    note: "Porta de entrada frequente no particular/plano — não é «clínica de caneta».",
  },
  {
    id: "rede-dor",
    name: "Rede D’Or São Luiz — endocrinologia / obesidade",
    region: "Nacional (forte SP/RJ)",
    kind: "grupo",
    focus: "Rede hospitalar com endocrinologia conforme a unidade",
    href: "https://www.rededorsaoluiz.com.br/",
    note: "Peça a especialidade na unidade mais próxima.",
  },
  {
    id: "hc-fmUSP",
    name: "Hospital das Clínicas da FMUSP",
    region: "São Paulo (SP)",
    kind: "hospital",
    focus: "Ambulatórios de endocrinologia / obesidade (ensino, via referência)",
    href: "https://www.hc.fm.usp.br/",
    note: "Acesso tipicamente por encaminhamento SUS.",
  },
  {
    id: "sus",
    name: "SUS — UBS + ambulatórios públicos",
    region: "Todo o Brasil",
    kind: "sus",
    focus: "Atenção primária e referência a endocrino/obesidade",
    href: "https://www.gov.br/saude/pt-br",
    note: "GLP-1 para peso em geral não é fornecido rotineiramente; o valor está na avaliação clínica. Disque Saúde 136.",
  },
];

export const clinicQualityChecksBrazil = [
  "Médico com CRM/UF ativo e especialidade/RQE adequados?",
  "História clínica e exames — ou só receita?",
  "Nutrição (e psicologia) no percurso?",
  "Medicamento em farmácia com registro ANVISA e receita?",
  "Plano de follow-up e contacto para efeitos graves?",
  "Preço da consulta separado do preço da caneta?",
];

export const clinicPageDisclaimerBrazil =
  "Exemplos institucionais públicos para orientação. Sem parceria, patrocínio ou comissão. Não é ranking nem garantia de agenda ou prescrição.";
