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
    title: "Infomed — infarmed",
    publisher: "INFARMED (Portugal)",
    href: "https://extranet.infarmed.pt/INFOMED-fo/",
    note: "Base portuguesa de medicamentos autorizados. Procure por «Mounjaro» ou «tirzepatida».",
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
