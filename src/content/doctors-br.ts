export type SpecialistProfileBR = {
  id: string;
  title: string;
  why: string;
  askFor: string[];
};

export type CareRedFlagBR = {
  id: string;
  title: string;
  detail: string;
};

export const specialistProfilesBrazil: SpecialistProfileBR[] = [
  {
    id: "endocrinologia",
    title: "Endocrinologia e metabologia",
    why: "Referência para diabetes, metabolismo e obesidade com indicação farmacológica (SBEM / RQE quando aplicável).",
    askFor: [
      "Experiência com GLP-1 / tirzepatida e critérios de bula",
      "Plano de follow-up — não só a primeira receita",
      "Avaliação de contraindicações e outros fármacos",
    ],
  },
  {
    id: "nutrologia",
    title: "Nutrologia",
    why: "Foco em nutrição clínica e composição corporal em programas de excesso de peso.",
    askFor: [
      "Integração com nutricionista",
      "Monitoramento de perda muscular e adesão",
      "Critérios claros de indicação",
    ],
  },
  {
    id: "clinica-medica",
    title: "Clínica médica",
    why: "Porta de entrada frequente; articula comorbidades e encaminha quando a complexidade exige.",
    askFor: [
      "História e exames antes da receita",
      "Encaminhamento a especialidade se preciso",
      "Alinhamento com a medicação crónica",
    ],
  },
  {
    id: "nutricao",
    title: "Nutrição (e psicologia, se preciso)",
    why: "O medicamento muda o apetite; não substitui plano alimentar nem apoio comportamental.",
    askFor: [
      "Proteína, hidratação, náuseas",
      "Plano sustentável se/quando pausar o tratamento",
    ],
  },
];

export const careRedFlagsBrazil: CareRedFlagBR[] = [
  {
    id: "teleconsulta-receita",
    title: "Teleconsulta que só vende receita",
    detail: "Formulário de 2 minutos e caneta no mesmo clique, sem história clínica.",
  },
  {
    id: "vendedor-caneta",
    title: "Quem vende a caneta na consulta",
    detail: "Kit no Instagram/WhatsApp ou estoque particular sem farmácia licenciada.",
  },
  {
    id: "sem-crm",
    title: "Sem CRM verificável",
    detail: "Não informa CRM/UF ou recusa confirmação no CFM.",
  },
  {
    id: "manipulado",
    title: "Manipulado / importado «igual ao original»",
    detail: "Promessa de tirzepatida ou semaglutida irregular como atalho barato.",
  },
  {
    id: "promessas",
    title: "Garantia de X kg",
    detail: "Marketing de resultado — não medicina.",
  },
];

export const howToFindDoctorsBrazil = [
  {
    title: "CRM / CFM",
    body: "Confirme nome, CRM/UF e situação no portal do CFM (Busca Médicos). Pergunte o RQE da especialidade.",
  },
  {
    title: "SUS — UBS",
    body: "Comece na UBS. Peça encaminhamento a endocrinologia ou ambulatório de obesidade quando indicado.",
  },
  {
    title: "Particular / plano",
    body: "Endocrino, nutrologia ou centro multidisciplinar. A medicação, em regra, é à parte na farmácia.",
  },
  {
    title: "Teleconsulta",
    body: "Pode ser válida com CRM ativo, história completa e dispensação em farmácia. Desconfie de quem só vende caneta.",
  },
];

export const cfmBuscaMedicosUrl = "https://portal.cfm.org.br/busca-medicos/";
