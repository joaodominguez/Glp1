export type MedicationIndication =
  | "diabetes-tipo-2"
  | "gestao-de-peso"
  | "ambas"
  | "variavel-por-pais";

export type MedicationMechanism =
  | "glp1"
  | "gip-glp1"
  | "outro";

export type Medication = {
  /** URL slug under /medicamentos/[slug]/ */
  slug: string;
  /** Brand / commercial name people search for */
  brandName: string;
  /** Active substance in Portuguese */
  substance: string;
  /** Marketing authorization holder (company) */
  company: string;
  mechanism: MedicationMechanism;
  mechanismLabel: string;
  /** How it is usually taken */
  route: string;
  frequency: string;
  /** Primary authorized uses — country-dependent */
  indication: MedicationIndication;
  indicationSummary: string;
  /** Short card blurb for the hub */
  summary: string;
  /** Longer intro for the detail page */
  lede: string;
  whatItIs: string[];
  howItDiffers: string[];
  practicalNotes: string[];
  /** Related brand siblings (same substance, other indication/name) */
  relatedSlugs?: string[];
  /** Extra search aliases */
  alsoKnownAs?: string[];
  /** Soft availability note for PT/EU readers */
  availabilityNote: string;
  /** Priority on hub (lower = first) */
  order: number;
  status: "autorizado" | "mais-antigo" | "nome-regional";
};

export const medications: Medication[] = [
  {
    slug: "mounjaro",
    brandName: "Mounjaro",
    substance: "tirzepatida",
    company: "Eli Lilly",
    mechanism: "gip-glp1",
    mechanismLabel: "Agonista duplo GIP + GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "variavel-por-pais",
    indicationSummary:
      "Em muitos países da UE está autorizado sobretudo para diabetes tipo 2; noutros mercados a tirzepatida também tem indicação de peso (por vezes com outro nome).",
    summary:
      "Tirzepatida semanal. Atua em GIP e GLP-1 — não é o mesmo que Ozempic ou Wegovy.",
    lede:
      "O Mounjaro é o nome comercial mais falado da tirzepatida. Vale a pena separar o nome da caneta, a substância e o que a bula do seu país realmente autoriza.",
    whatItIs: [
      "A substância ativa é a tirzepatida.",
      "É um agonista dos recetores de GIP e de GLP-1 (agonista duplo).",
      "Administra-se por injeção subcutânea, em geral uma vez por semana.",
      "As indicações oficiais (diabetes tipo 2, peso, ou ambos) dependem do país e da autorização local.",
    ],
    howItDiffers: [
      "Não é semaglutida: doses, canetas e titulação não são intercambiáveis com Ozempic ou Wegovy.",
      "Nalguns países a mesma substância aparece com outro nome comercial para gestão de peso (por exemplo Zepbound nos EUA).",
      "«GLP-1» na conversa do dia a dia é uma alcunha de família — em rigor, o Mounjaro não é só GLP-1.",
    ],
    practicalNotes: [
      "A titulação costuma subir de forma gradual para reduzir náuseas e outros efeitos digestivos.",
      "Confirme sempre o folheto da embalagem que comprou e a informação do INFARMED / EMA no seu país.",
      "Não copie a dose de outra pessoa nem parta canetas «para render».",
    ],
    relatedSlugs: ["zepbound"],
    alsoKnownAs: ["tirzepatida"],
    availabilityNote:
      "Em Portugal e na UE, verifique no INFARMED / EMA o estatuto atual e a indicação autorizada.",
    order: 1,
    status: "autorizado",
  },
  {
    slug: "zepbound",
    brandName: "Zepbound",
    substance: "tirzepatida",
    company: "Eli Lilly",
    mechanism: "gip-glp1",
    mechanismLabel: "Agonista duplo GIP + GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "gestao-de-peso",
    indicationSummary:
      "Nome comercial da tirzepatida orientado para gestão de peso em mercados onde essa indicação foi autorizada (nome sobretudo associado aos EUA).",
    summary:
      "Mesma substância do Mounjaro (tirzepatida), noutro nome comercial e outra lógica de indicação.",
    lede:
      "Zepbound e Mounjaro partilham a tirzepatida, mas não são «a mesma caixa» em todos os países. Nomes, bulas e critérios de prescrição mudam.",
    whatItIs: [
      "Substância ativa: tirzepatida — a mesma do Mounjaro.",
      "Posicionamento comercial ligado à gestão de peso onde essa autorização existe.",
      "Também é injeção subcutânea semanal, com titulação gradual.",
    ],
    howItDiffers: [
      "Não assuma que o que lê sobre Zepbound (por exemplo critérios de IMC nos EUA) se aplica automaticamente em Portugal.",
      "Mudar entre nomes comerciais ou «importar» canetas sem acompanhamento médico é um risco regulatório e clínico.",
    ],
    practicalNotes: [
      "Se ouvir os dois nomes na internet, peça ao profissional de saúde para traduzir o que isso significa no seu país.",
      "A fonte fiável continua a ser a bula local — não um vídeo ou um fórum.",
    ],
    relatedSlugs: ["mounjaro"],
    alsoKnownAs: ["tirzepatida"],
    availabilityNote:
      "Nome sobretudo usado fora de Portugal. No espaço europeu, confirme sempre o nome e a indicação autorizados localmente.",
    order: 2,
    status: "nome-regional",
  },
  {
    slug: "ozempic",
    brandName: "Ozempic",
    substance: "semaglutida",
    company: "Novo Nordisk",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Autorizado principalmente para adultos com diabetes tipo 2, em associação com alimentação e exercício. A perda de peso pode ocorrer, mas a indicação oficial não é a mesma do Wegovy.",
    summary:
      "Semaglutida semanal para diabetes tipo 2. Muito citada online — e muitas vezes confundida com Wegovy.",
    lede:
      "Ozempic popularizou a conversa sobre «GLP-1», mas a caneta e a indicação oficial não são as do Wegovy, apesar da mesma substância.",
    whatItIs: [
      "Substância ativa: semaglutida.",
      "Agonista do recetor de GLP-1 (não é agonista duplo GIP/GLP-1).",
      "Injeção subcutânea semanal, com doses e canetas próprias.",
    ],
    howItDiffers: [
      "Wegovy também é semaglutida, mas com doses e indicação orientadas para gestão de peso.",
      "Rybelsus é semaglutida em comprimido — outra via, outra rotina.",
      "Não é intercambiável com tirzepatida (Mounjaro / Zepbound).",
    ],
    practicalNotes: [
      "Usar Ozempic «só para emagrecer» sem indicação e sem acompanhamento é off-label e pode ser inseguro.",
      "Escassez e mercado paralelo aumentaram o ruído online — compre apenas por canais legais.",
    ],
    relatedSlugs: ["wegovy", "rybelsus"],
    alsoKnownAs: ["semaglutida"],
    availabilityNote:
      "Verifique no INFARMED a autorização e a comparticipação aplicáveis em Portugal.",
    order: 3,
    status: "autorizado",
  },
  {
    slug: "wegovy",
    brandName: "Wegovy",
    substance: "semaglutida",
    company: "Novo Nordisk",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "gestao-de-peso",
    indicationSummary:
      "Semaglutida em doses e esquema pensados para gestão de peso em adultos com obesidade, ou com excesso de peso e outras condições — segundo critérios da bula local.",
    summary:
      "Semaglutida para gestão de peso. Mesma família do Ozempic, indicação e doses diferentes.",
    lede:
      "Wegovy e Ozempic partilham a semaglutida, mas não são a mesma receita. Confundir as duas canetas é um dos erros mais comuns nas redes.",
    whatItIs: [
      "Substância ativa: semaglutida.",
      "Indicação centrada na gestão crónica de peso, quando autorizada e prescrita para esse fim.",
      "Injeção semanal com titulação própria.",
    ],
    howItDiffers: [
      "Não «troque» mentalmente Ozempic por Wegovy (nem o contrário) só porque a substância é a mesma.",
      "Critérios de IMC e comorbilidades vêm da bula e das regras do país — não do TikTok.",
    ],
    practicalNotes: [
      "Alimentação e atividade física continuam a fazer parte do plano; o medicamento não as substitui.",
      "Efeitos digestivos e a necessidade de subir a dose com calma são comuns a esta classe.",
    ],
    relatedSlugs: ["ozempic", "rybelsus"],
    alsoKnownAs: ["semaglutida"],
    availabilityNote:
      "Confirme autorização, critérios e acesso em Portugal junto do prescritor e do INFARMED.",
    order: 4,
    status: "autorizado",
  },
  {
    slug: "rybelsus",
    brandName: "Rybelsus",
    substance: "semaglutida",
    company: "Novo Nordisk",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1 (oral)",
    route: "Comprimido oral",
    frequency: "Uma vez por dia",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Forma oral da semaglutida, autorizada para diabetes tipo 2. A rotina de toma (jejum, água, espera) é diferente das canetas semanais.",
    summary:
      "Semaglutida em comprimido diário para diabetes tipo 2 — não é «Ozempic em pastilha» sem regras.",
    lede:
      "Rybelsus mostra que «GLP-1» não é só injeção. Mas a forma oral tem regras de toma que, se falharem, reduzem o efeito.",
    whatItIs: [
      "Substância ativa: semaglutida.",
      "Via oral diária, com instruções específicas de jejum e volume de água.",
      "Indicação principal: diabetes tipo 2, segundo a bula local.",
    ],
    howItDiffers: [
      "Não partilha a rotina semanal das canetas Ozempic / Wegovy.",
      "Não é automaticamente «mais fraco» ou «mais forte» — é outra formulação, outra adesão.",
    ],
    practicalNotes: [
      "Seguir à letra as instruções de toma do folheto: timing e líquidos importam.",
      "Fale com o médico ou farmacêutico antes de combinar com outros comprimidos da manhã.",
    ],
    relatedSlugs: ["ozempic", "wegovy"],
    alsoKnownAs: ["semaglutida oral"],
    availabilityNote:
      "Confirme no INFARMED a informação atual para Portugal.",
    order: 5,
    status: "autorizado",
  },
  {
    slug: "saxenda",
    brandName: "Saxenda",
    substance: "liraglutida",
    company: "Novo Nordisk",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por dia",
    indication: "gestao-de-peso",
    indicationSummary:
      "Liraglutida em dose diária para gestão de peso, quando autorizada e prescrita segundo critérios locais.",
    summary:
      "Liraglutida diária para peso. Mesma substância da Victoza, dose e indicação diferentes.",
    lede:
      "Saxenda é diária — não semanal. Essa diferença de rotina muda a adesão e a comparação com Ozempic, Wegovy ou Mounjaro.",
    whatItIs: [
      "Substância ativa: liraglutida.",
      "Injeção subcutânea diária.",
      "Indicação centrada na gestão de peso, segundo a bula.",
    ],
    howItDiffers: [
      "Victoza também é liraglutida, tipicamente posicionada para diabetes tipo 2, com doses diferentes.",
      "Não é semaglutida nem tirzepatida.",
    ],
    practicalNotes: [
      "A frequência diária exige constância; falhas repetidas alteram o plano.",
      "Efeitos gastrointestinais no início são frequentes nesta classe.",
    ],
    relatedSlugs: ["victoza"],
    alsoKnownAs: ["liraglutida"],
    availabilityNote:
      "Verifique autorização e critérios locais em Portugal / UE.",
    order: 6,
    status: "autorizado",
  },
  {
    slug: "victoza",
    brandName: "Victoza",
    substance: "liraglutida",
    company: "Novo Nordisk",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por dia",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Liraglutida diária autorizada principalmente para diabetes tipo 2.",
    summary:
      "Liraglutida diária para diabetes tipo 2. Irmã da Saxenda, com outra lógica de dose e indicação.",
    lede:
      "Victoza e Saxenda partilham a liraglutida — e partilham também a confusão online. A bula é que separa os dois.",
    whatItIs: [
      "Substância ativa: liraglutida.",
      "Injeção diária subcutânea.",
      "Uso principal: diabetes tipo 2, com alimentação e exercício.",
    ],
    howItDiffers: [
      "Saxenda usa a mesma substância para gestão de peso, noutro regime de dose.",
      "Não confundir com canetas semanais de semaglutida ou tirzepatida.",
    ],
    practicalNotes: [
      "Se já usa insulina ou outros antidiabéticos, o risco de hipoglicemia pode mudar — isso é conversa com o médico.",
      "Guarde e transporte a caneta segundo o folheto.",
    ],
    relatedSlugs: ["saxenda"],
    alsoKnownAs: ["liraglutida"],
    availabilityNote:
      "Confirme no INFARMED a informação para Portugal.",
    order: 7,
    status: "autorizado",
  },
  {
    slug: "trulicity",
    brandName: "Trulicity",
    substance: "dulaglutida",
    company: "Eli Lilly",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Dulaglutida semanal para diabetes tipo 2. Caneta de dose fixa, diferente das canetas de semaglutida ou tirzepatida.",
    summary:
      "Dulaglutida semanal para diabetes tipo 2 — outra substância da Lilly, só GLP-1.",
    lede:
      "Trulicity é semanal e da mesma empresa do Mounjaro, mas a substância e o mecanismo não são os da tirzepatida.",
    whatItIs: [
      "Substância ativa: dulaglutida.",
      "Agonista de GLP-1 (não é agonista duplo).",
      "Injeção semanal, tipicamente em caneta de dose pré-definida.",
    ],
    howItDiffers: [
      "Não é Mounjaro: dulaglutida ≠ tirzepatida.",
      "Não partilha doses com Ozempic / Wegovy.",
    ],
    practicalNotes: [
      "Útil conhecer a diferença se o médico discutir alternativas dentro da classe.",
      "Efeitos digestivos e titulação (quando aplicável) seguem a lógica da classe GLP-1.",
    ],
    alsoKnownAs: ["dulaglutida"],
    availabilityNote:
      "Verifique autorização e informação atual no INFARMED / EMA.",
    order: 8,
    status: "autorizado",
  },
  {
    slug: "byetta",
    brandName: "Byetta",
    substance: "exenatida",
    company: "AstraZeneca (histórico / várias titularidades)",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Duas vezes por dia (formulação clássica)",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Um dos primeiros agonistas de GLP-1 amplamente usados. A rotina é mais exigente do que as canetas semanais modernas.",
    summary:
      "Exenatida «clássica», duas vezes ao dia — gerações mais antigas da classe GLP-1.",
    lede:
      "Byetta ajuda a perceber de onde veio esta família de medicamentos. Hoje há opções semanais, mas a lógica da hormona GLP-1 é a mesma.",
    whatItIs: [
      "Substância ativa: exenatida.",
      "Formulação de ação mais curta, com administrações diárias múltiplas.",
      "Indicação histórica: diabetes tipo 2.",
    ],
    howItDiffers: [
      "Bydureon é uma formulação de exenatida de libertação prolongada (semanal), quando disponível.",
      "Não é equivalente a semaglutida ou tirzepatida.",
    ],
    practicalNotes: [
      "Pode já não ser a primeira escolha em muitos contextos — mas ainda aparece em conversas e histórico clínico.",
      "Se está na sua lista de medicação antiga, leve o nome exato à consulta.",
    ],
    relatedSlugs: ["bydureon"],
    alsoKnownAs: ["exenatida"],
    availabilityNote:
      "Disponibilidade e titularidade variam; confirme sempre a informação local atual.",
    order: 9,
    status: "mais-antigo",
  },
  {
    slug: "bydureon",
    brandName: "Bydureon",
    substance: "exenatida",
    company: "AstraZeneca (histórico / várias titularidades)",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1 (libertação prolongada)",
    route: "Injeção subcutânea",
    frequency: "Uma vez por semana",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Exenatida de libertação prolongada, tipicamente semanal, para diabetes tipo 2.",
    summary:
      "Versão semanal da exenatida. Mesma família do Byetta, outra formulação.",
    lede:
      "Bydureon mostra como a mesma substância pode mudar de rotina quando a formulação muda — um padrão que se repete em toda a classe.",
    whatItIs: [
      "Substância ativa: exenatida (formulação de libertação prolongada).",
      "Esquema semanal, distinto do Byetta duas vezes ao dia.",
      "Indicação: diabetes tipo 2, segundo autorizações locais.",
    ],
    howItDiffers: [
      "Não é Ozempic nem Trulicity — só partilham a classe GLP-1.",
      "Dispositivos e preparação da injeção podem ser diferentes dos das canetas mais recentes.",
    ],
    practicalNotes: [
      "Se comparar opções, compare indicação, evidência e tolerância — não só a palavra «semanal».",
    ],
    relatedSlugs: ["byetta"],
    alsoKnownAs: ["exenatida LAR", "exenatida semanal"],
    availabilityNote:
      "Confirme disponibilidade e estatuto regulatório no seu país.",
    order: 10,
    status: "mais-antigo",
  },
  {
    slug: "lyxumia",
    brandName: "Lyxumia",
    substance: "lixisenatida",
    company: "Sanofi",
    mechanism: "glp1",
    mechanismLabel: "Agonista de GLP-1",
    route: "Injeção subcutânea",
    frequency: "Uma vez por dia",
    indication: "diabetes-tipo-2",
    indicationSummary:
      "Lixisenatida diária para diabetes tipo 2. Nome europeu habitual; noutros mercados pode aparecer como Adlyxin.",
    summary:
      "Lixisenatida diária para diabetes tipo 2 — menos mediática, mas faz parte do mapa da classe.",
    lede:
      "Nem tudo o que é GLP-1 está no TikTok. Lyxumia completa o levantamento dos agonistas que um clínico pode discutir.",
    whatItIs: [
      "Substância ativa: lixisenatida.",
      "Injeção subcutânea diária.",
      "Indicação: diabetes tipo 2, segundo a bula.",
    ],
    howItDiffers: [
      "Não é liraglutida (Victoza / Saxenda) nem semaglutida.",
      "Nalguns países o nome comercial é outro (Adlyxin).",
    ],
    practicalNotes: [
      "Útil no histórico clínico e na comparação de alternativas da classe.",
      "Como sempre: indicação, dose e combinações são decisão médica.",
    ],
    alsoKnownAs: ["lixisenatida", "Adlyxin"],
    availabilityNote:
      "Verifique o nome e a autorização locais (UE vs outros mercados).",
    order: 11,
    status: "autorizado",
  },
];

export function getMedication(slug: string): Medication | undefined {
  return medications.find((item) => item.slug === slug);
}

export function medicationsSorted(): Medication[] {
  return [...medications].sort((a, b) => a.order - b.order);
}

export function relatedMedications(med: Medication): Medication[] {
  if (!med.relatedSlugs?.length) return [];
  return med.relatedSlugs
    .map((slug) => getMedication(slug))
    .filter((item): item is Medication => Boolean(item));
}

export const mechanismFilters: Array<{
  id: MedicationMechanism | "all";
  label: string;
}> = [
  { id: "all", label: "Todos" },
  { id: "gip-glp1", label: "Duplo GIP + GLP-1" },
  { id: "glp1", label: "Só GLP-1" },
];
