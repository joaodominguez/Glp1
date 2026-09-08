export type SpecialistProfile = {
  id: string;
  title: string;
  why: string;
  askFor: string[];
};

export type CareRedFlag = {
  id: string;
  title: string;
  detail: string;
};

/** What “aconselhável” means here: care quality criteria — not a ranked doctor list. */
export const specialistProfiles: SpecialistProfile[] = [
  {
    id: "endocrinologia",
    title: "Endocrinologia",
    why: "Especialidade de referência para diabetes, metabolismo e muitos casos de obesidade com indicação farmacológica.",
    askFor: [
      "Experiência com agonistas de GLP-1 / tirzepatida",
      "Plano de titulação e follow-up",
      "Avaliação de contraindicações (tiroide/MEN2, pancreatite, gravidez…)",
    ],
  },
  {
    id: "medicina-interna",
    title: "Medicina interna / consulta de obesidade",
    why: "Em centros multidisciplinares, o internista ou a consulta de obesidade articula riscos cardíacos, renais e medicação crónica.",
    askFor: [
      "Abordagem multidisciplinar (nutrição, psicologia, exercício)",
      "Critérios claros de indicação — não só «quer emagrecer»",
      "Quem contactar se houver efeito grave",
    ],
  },
  {
    id: "mgf",
    title: "Medicina geral e familiar (SNS)",
    why: "Ponto de entrada no SNS: história clínica, análises, referenciação a especialidade e acompanhamento de comorbilidades.",
    askFor: [
      "Referenciação quando a complexidade o justificar",
      "Alinhamento com a medicação que já toma",
      "Encaminhamento para nutrição / saúde mental se precisar",
    ],
  },
  {
    id: "nutricao",
    title: "Nutrição (e, se preciso, psicologia)",
    why: "O medicamento muda o apetite; não substitui um plano alimentar seguro nem o apoio a comportamentos.",
    askFor: [
      "Proteína, hidratação e prevenção de perda muscular",
      "Estratégia para náuseas e volume das refeições",
      "Plano para se/quando parar a caneta",
    ],
  },
];

export const careRedFlags: CareRedFlag[] = [
  {
    id: "sem-historia",
    title: "Receita sem história clínica",
    detail:
      "Prescrição depois de um formulário de 2 minutos, sem perguntas sobre tiroide, pâncreas, gravidez, outros fármacos ou saúde mental.",
  },
  {
    id: "venda-direta",
    title: "Venda direta do medicamento pelo «consultório»",
    detail:
      "Pressão para comprar a caneta no mesmo sítio da consulta, com preço «especial» e sem passar por farmácia licenciada.",
  },
  {
    id: "dose-vizinho",
    title: "Começar já na dose máxima",
    detail:
      "Saltar a titulação «porque assim emagrece mais depressa» — aumenta náuseas e riscos sem benefício clínico sólido.",
  },
  {
    id: "sem-followup",
    title: "Sem follow-up",
    detail:
      "Entregam a receita e desaparecem. Não há plano para efeitos, análises, dose esquecida ou revisão aos 4–12 semanas.",
  },
  {
    id: "promessas",
    title: "Promessas de resultado",
    detail:
      "«Garantimos X kg» ou «igual às famosas». Nenhum médico sério garante números de marketing.",
  },
];

export const howToFindDoctors = [
  {
    title: "No SNS",
    body: "Comece pelo médico de família. Peça referenciação a Endocrinologia ou a uma consulta de obesidade do hospital da área, se houver indicação. Tempos de espera variam — isso não é motivo para saltar a avaliação clínica.",
  },
  {
    title: "No setor privado / seguros",
    body: "Procure Endocrinologia ou centros de obesidade com equipa (médico + nutrição). Confirme se o seguro cobre a consulta — a medicação, em regra, é à parte.",
  },
  {
    title: "Ordem dos Médicos",
    body: "Use o diretório público da Ordem dos Médicos para confirmar cédula e especialidade. Um site bonito não substitui registo profissional.",
  },
  {
    title: "Teleconsulta",
    body: "Pode ser legítima se houver médico inscrito em Portugal, colheita de história completa, possibilidade de exames e farmácia legal. Desconfie de quem só vende canetas.",
  },
];

export const ordemMedicosUrl =
  "https://ordemdosmedicos.pt/pesquisa-de-medicos/";
