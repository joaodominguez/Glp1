export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  relatedHref?: string;
  relatedLabel?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "glp1",
    term: "GLP-1",
    definition:
      "Hormona intestinal (e a família de medicamentos que a imitam). Na conversa do dia a dia, «GLP-1» costuma significar canetas semanais como Ozempic ou Wegovy — mesmo quando o fármaco exacto é outro.",
    relatedHref: "/medicamentos/",
    relatedLabel: "Lista de medicamentos",
  },
  {
    id: "gip",
    term: "GIP",
    definition:
      "Outra hormona intestinal. A tirzepatida (Mounjaro) actua em GIP e GLP-1 — por isso se chama agonista duplo.",
    relatedHref: "/medicamentos/mounjaro/",
    relatedLabel: "Ficha Mounjaro",
  },
  {
    id: "tirzepatida",
    term: "Tirzepatida",
    definition:
      "Substância activa do Mounjaro (e, noutros mercados, de nomes como Zepbound). Não é semaglutida.",
    relatedHref: "/artigos/mounjaro-vs-ozempic/",
    relatedLabel: "Mounjaro vs Ozempic",
  },
  {
    id: "semaglutida",
    term: "Semaglutida",
    definition:
      "Substância activa de Ozempic, Wegovy e Rybelsus. A mesma molécula pode aparecer em caneta semanal ou comprimido diário, com indicações e rotinas diferentes.",
    relatedHref: "/artigos/ozempic-vs-wegovy/",
    relatedLabel: "Ozempic vs Wegovy",
  },
  {
    id: "titulacao",
    term: "Titulação",
    definition:
      "Subida gradual da dose para o corpo se adaptar. Começar já no máximo acelera náuseas, não um resultado saudável.",
    relatedHref: "/artigos/primeiras-semanas/",
    relatedLabel: "Primeiras 4 semanas",
  },
  {
    id: "comparticipacao",
    term: "Comparticipação",
    definition:
      "Parte do preço que o SNS (ou outro sistema) pode cobrir. Depende do medicamento, da indicação e das regras oficiais — ter receita não basta.",
    relatedHref: "/precos/",
    relatedLabel: "Preços em Portugal",
  },
  {
    id: "pvp",
    term: "PVP",
    definition:
      "Preço de venda ao público. Em farmácia portuguesa é a referência no ticket; muda com dose e no tempo. Confirme Infomed.",
    relatedHref: "/precos/",
    relatedLabel: "Preços",
  },
  {
    id: "infomed",
    term: "Infomed",
    definition:
      "Base de dados do INFARMED com informação oficial de medicamentos em Portugal (incluindo PVP e estatutos).",
    relatedHref: "/fontes/",
    relatedLabel: "Fontes oficiais",
  },
  {
    id: "off-label",
    term: "Off-label",
    definition:
      "Uso fora da indicação autorizada na bula. Pode existir em medicina, mas exige critério clínico — não é «atalho» de grupo online.",
  },
  {
    id: "cold-chain",
    term: "Cadeia de frio",
    definition:
      "Manter a temperatura correcta desde a farmácia até si. Interromper o frio (carro ao sol, porão do avião) pode inutilizar a caneta.",
    relatedHref: "/artigos/dose-esquecida-viagem-frio/",
    relatedLabel: "Viagem e frio",
  },
  {
    id: "rcm",
    term: "RCM / bula",
    definition:
      "Resumo das Características do Medicamento e o folheto informativo. São a referência legal do produto — acima de posts e vídeos.",
    relatedHref: "/fontes/",
    relatedLabel: "Fontes",
  },
  {
    id: "agonista",
    term: "Agonista",
    definition:
      "Substância que activa um recetor. «Agonista de GLP-1» significa que o medicamento imita parte do efeito da hormona GLP-1.",
  },
];
