export type Source = {
  id: string;
  title: string;
  publisher: string;
  href: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: "ema-mounjaro",
    title: "Mounjaro (tirzepatida) — informação do medicamento",
    publisher: "Agência Europeia de Medicamentos (EMA)",
    href: "https://www.ema.europa.eu/en/medicines/human/EPAR/mounjaro",
    note: "Resumo europeu oficial: para que serve, como se usa e principais riscos.",
  },
  {
    id: "ema-epar",
    title: "Relatório público de avaliação (EPAR) e RCM",
    publisher: "EMA / Lilly",
    href: "https://www.ema.europa.eu/en/medicines/human/EPAR/mounjaro#product-info",
    note: "O Resumo das Características do Medicamento (RCM) é a referência técnica para profissionais.",
  },
  {
    id: "infarmed",
    title: "Infomed — INFARMED",
    publisher: "INFARMED (Portugal)",
    href: "https://extranet.infarmed.pt/INFOMED-fo/",
    note: "Base portuguesa de medicamentos autorizados, apresentações e informação de preço/comparticipação. Procure por nome comercial ou substância.",
  },
  {
    id: "infarmed-preco",
    title: "Pesquisa do medicamento / preço",
    publisher: "INFARMED (Portugal)",
    href: "https://www.infarmed.pt/web/infarmed/servicos-on-line/pesquisa-do-medicamento",
    note: "Serviço online do INFARMED para consultar informação de medicamentos, incluindo preço quando disponível.",
  },
  {
    id: "ordem-medicos",
    title: "Pesquisa de médicos",
    publisher: "Ordem dos Médicos",
    href: "https://ordemdosmedicos.pt/pesquisa-de-medicos/",
    note: "Confirme cédula profissional e especialidade antes de confiar numa consulta online ou num anúncio.",
  },
  {
    id: "sns24",
    title: "SNS 24",
    publisher: "Serviço Nacional de Saúde",
    href: "https://www.sns24.gov.pt/",
    note: "Orientação do SNS (incluindo linha 808 24 24 24) para contactos e triagem não emergente.",
  },
  {
    id: "anvisa",
    title: "Consultas de medicamentos",
    publisher: "ANVISA (Brasil)",
    href: "https://consultas.anvisa.gov.br/#/medicamentos/",
    note: "Para confirmar o que está autorizado no Brasil e ler a bula local.",
  },
  {
    id: "fda-mounjaro",
    title: "Mounjaro prescribing information",
    publisher: "FDA (Estados Unidos)",
    href: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm",
    note: "A bula norte-americana descreve indicações, avisos e titulação. As regras não são iguais em todos os países.",
  },
  {
    id: "who-diabetes",
    title: "Diabetes",
    publisher: "Organização Mundial da Saúde",
    href: "https://www.who.int/health-topics/diabetes",
    note: "Contexto geral sobre diabetes tipo 2 — não é um folheto do Mounjaro.",
  },
];

export const sourceShortNote =
  "A autorização, o nome comercial e as indicações mudam de país para país. Confirme sempre a bula ou o RCM do seu país e a orientação de quem o acompanha.";
