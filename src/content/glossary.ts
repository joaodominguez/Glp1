export type GlossaryTerm = {
  id: string;
  term: string;
  also?: string[];
  definition: string;
};

export const glossary: GlossaryTerm[] = [
  {
    id: "agonista",
    term: "Agonista",
    definition:
      "Substância que se liga a um recetor no corpo e o «liga», imitando um sinal natural. A tirzepatida é agonista dos recetores de GIP e de GLP-1.",
  },
  {
    id: "anvisa",
    term: "ANVISA",
    definition:
      "Agência reguladora de medicamentos no Brasil. Decide o que pode ser vendido e que informação a bula deve ter.",
  },
  {
    id: "bula",
    term: "Bula / RCM",
    also: ["folheto informativo", "resumo das características do medicamento"],
    definition:
      "Documento oficial do medicamento. A bula (ou folheto) é para o paciente; o RCM é a versão técnica para profissionais. É a fonte mais fiável sobre dose, riscos e contraindicações no seu país.",
  },
  {
    id: "contraindicacao",
    term: "Contraindicação",
    definition:
      "Situação em que o medicamento não deve ser usado, porque o risco é demasiado alto. Exemplo clássico nestes fármacos: certas doenças da tiroide (CMT e MEN2).",
  },
  {
    id: "diabetes-tipo-2",
    term: "Diabetes tipo 2",
    definition:
      "Doença em que o corpo resiste à insulina ou produz menos insulina do que precisa. O açúcar no sangue sobe. Não é a mesma coisa que diabetes tipo 1.",
  },
  {
    id: "dose-de-manutencao",
    term: "Dose de manutenção",
    definition:
      "A dose em que a pessoa fica depois da subida gradual, se o médico decidir que faz sentido. Não é igual para toda a gente e não é um objetivo a atingir sozinho.",
  },
  {
    id: "ema",
    term: "EMA",
    definition:
      "Agência Europeia de Medicamentos. Avalia medicamentos para a União Europeia, incluindo o Mounjaro.",
  },
  {
    id: "esvaziamento-gastrico",
    term: "Esvaziamento gástrico",
    definition:
      "O tempo que a comida demora a sair do estômago. Os agonistas de GLP-1 costumam atrasar este processo. Por isso muita gente sente saciedade mais cedo — e por isso náuseas são comuns.",
  },
  {
    id: "gip",
    term: "GIP",
    also: ["polipéptido insulinotrópico dependente de glucose"],
    definition:
      "Hormona intestinal que ajuda a regular a insulina depois das refeições. A tirzepatida também atua neste recetor, além do GLP-1.",
  },
  {
    id: "glp1",
    term: "GLP-1",
    also: ["peptídeo semelhante ao glucagon tipo 1"],
    definition:
      "Hormona que o intestino liberta quando comemos. Ajuda o pâncreas a libertar insulina, reduz o glucagon, atrasa o estômago e aumenta a sensação de saciedade. Vários medicamentos imitam esta hormona.",
  },
  {
    id: "hba1c",
    term: "HbA1c",
    also: ["hemoglobina glicada", "A1c"],
    definition:
      "Análise que estima a média de açúcar no sangue nas últimas 8 a 12 semanas. É um dos números que o médico usa para acompanhar diabetes.",
  },
  {
    id: "hipoglicemia",
    term: "Hipoglicemia",
    definition:
      "Açúcar no sangue demasiado baixo. Sozinha, a tirzepatida tem baixo risco; o risco sobe se for usada com insulina ou sulfonilureias.",
  },
  {
    id: "imc",
    term: "IMC",
    also: ["índice de massa corporal"],
    definition:
      "Número que relaciona peso e altura. Serve de referência em muitos critérios de prescrição, mas não descreve a saúde de uma pessoa sozinho.",
  },
  {
    id: "infarmed",
    term: "INFARMED",
    definition:
      "Autoridade do medicamento em Portugal. Autoriza, fiscaliza e publica informação sobre medicamentos.",
  },
  {
    id: "injecao-subcutanea",
    term: "Injeção subcutânea",
    definition:
      "Injeção na gordura debaixo da pele — não no músculo nem na veia. No Mounjaro, costuma ser na barriga, coxa ou parte de trás do braço.",
  },
  {
    id: "insulina",
    term: "Insulina",
    definition:
      "Hormona que permite às células usar o açúcar do sangue. Em diabetes tipo 2 pode haver resistência à insulina, produção insuficiente, ou as duas coisas.",
  },
  {
    id: "men2",
    term: "MEN2",
    also: ["neoplasia endócrina múltipla tipo 2"],
    definition:
      "Síndrome genética rara associada a tumores da tiroide e de outras glândulas. Quem tem MEN2 (ou história familiar de carcinoma medular da tiroide) em geral não deve usar estes medicamentos.",
  },
  {
    id: "mounjaro",
    term: "Mounjaro",
    definition:
      "Nome comercial da tirzepatida da Lilly. Em alguns países está autorizado para diabetes tipo 2; noutros também para excesso de peso, segundo regras locais. Não é um nome genérico. Ver página dedicada em /medicamentos/mounjaro.",
  },
  {
    id: "ozempic",
    term: "Ozempic",
    also: ["semaglutida para diabetes"],
    definition:
      "Nome comercial da semaglutida (Novo Nordisk) tipicamente autorizado para diabetes tipo 2. Não é o mesmo que Wegovy, apesar da mesma substância. Ver /medicamentos/ozempic.",
  },
  {
    id: "wegovy",
    term: "Wegovy",
    also: ["semaglutida para peso"],
    definition:
      "Nome comercial da semaglutida orientado para gestão de peso. Partilha a substância com Ozempic, mas doses e indicação são diferentes. Ver /medicamentos/wegovy.",
  },
  {
    id: "saxenda",
    term: "Saxenda",
    also: ["liraglutida para peso"],
    definition:
      "Liraglutida em injeção diária para gestão de peso. A Victoza usa a mesma substância noutro contexto (diabetes tipo 2). Ver /medicamentos/saxenda.",
  },
  {
    id: "trulicity",
    term: "Trulicity",
    also: ["dulaglutida"],
    definition:
      "Nome comercial da dulaglutida, agonista de GLP-1 semanal para diabetes tipo 2. Não é tirzepatida (Mounjaro). Ver /medicamentos/trulicity.",
  },
  {
    id: "liraglutida",
    term: "Liraglutida",
    also: ["Victoza", "Saxenda"],
    definition:
      "Agonista de GLP-1 de administração diária. Victoza (diabetes tipo 2) e Saxenda (peso) usam esta substância com doses e bulas diferentes.",
  },
  {
    id: "dulaglutida",
    term: "Dulaglutida",
    also: ["Trulicity"],
    definition:
      "Agonista de GLP-1 semanal. Nome comercial habitual: Trulicity. Não é intercambiável com semaglutida nem tirzepatida.",
  },
  {
    id: "exenatida",
    term: "Exenatida",
    also: ["Byetta", "Bydureon"],
    definition:
      "Um dos agonistas de GLP-1 mais antigos. Byetta (várias vezes ao dia) e Bydureon (formulação prolongada, tipicamente semanal) usam esta substância.",
  },
  {
    id: "off-label",
    term: "Uso off-label",
    definition:
      "Uso de um medicamento para um fim ou numa dose que o regulador daquele país ainda não aprovou. Só um profissional de saúde pode avaliar se isso faz sentido — e os riscos.",
  },
  {
    id: "pancreatite",
    term: "Pancreatite",
    definition:
      "Inflamação do pâncreas. É pouco frequente, mas grave. Dor forte e persistente na barriga, às vezes com vómitos, é motivo para procurar ajuda urgente e não «esperar que passe».",
  },
  {
    id: "recetor",
    term: "Recetor",
    definition:
      "«Fechadura» na superfície das células. Hormonas e medicamentos são as «chaves». Sem recetor certo, o sinal não passa.",
  },
  {
    id: "saciedade",
    term: "Saciedade",
    definition:
      "A sensação de «já chega» depois de comer. Estes medicamentos costumam antecipá-la. Isso não significa que a pessoa deixe de precisar de comer de forma suficiente e equilibrada.",
  },
  {
    id: "semaglutida",
    term: "Semaglutida",
    also: ["Ozempic", "Wegovy", "Rybelsus"],
    definition:
      "Outro medicamento da família GLP-1, de outra empresa. Não é o mesmo que tirzepatida. Doses, canetas e indicações não são intercambiáveis sem orientação médica.",
  },
  {
    id: "tirzepatida",
    term: "Tirzepatida",
    definition:
      "Substância ativa do Mounjaro. É um agonista duplo: atua nos recetores de GIP e de GLP-1. Noutros países pode ter outro nome comercial para outra indicação.",
  },
  {
    id: "titulacao",
    term: "Titulação",
    also: ["escalada de dose"],
    definition:
      "Subida lenta da dose, em geral de 4 em 4 semanas, para o corpo se adaptar. Começar já numa dose alta aumenta náuseas e outros efeitos digestivos.",
  },
  {
    id: "vesicula",
    term: "Vesícula biliar",
    definition:
      "Pequeno órgão que guarda bílis. Perda de peso rápida e alguns destes medicamentos associam-se a mais problemas de vesícula (cólicas, cálculos). Dor no lado direito de cima da barriga merece avaliação.",
  },
];
