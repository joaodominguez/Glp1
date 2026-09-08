export type PriceBand = {
  slug: string;
  brandName: string;
  substance: string;
  /** Approximate public retail band in Portugal for a typical monthly pack (4 weekly doses when weekly). */
  monthlyBandEur: string;
  packNote: string;
  comparticipacao: string;
  caveat: string;
};

/**
 * Approximate PVP bands reported for Portugal (farmácia).
 * Always verify Infomed / the pharmacy ticket — prices and comparticipação change.
 */
export const priceBands: PriceBand[] = [
  {
    slug: "mounjaro",
    brandName: "Mounjaro",
    substance: "tirzepatida",
    monthlyBandEur: "≈ 180 – 430 €",
    packNote: "Em geral 1 caneta = 4 doses semanais (≈ 1 mês).",
    comparticipacao:
      "Sem comparticipação SNS para obesidade/peso à data desta revisão. Em diabetes tipo 2, confirme o estatuto atual — regras mudam.",
    caveat: "O valor sobe com a dose de manutenção.",
  },
  {
    slug: "wegovy",
    brandName: "Wegovy",
    substance: "semaglutida",
    monthlyBandEur: "≈ 150 – 200 €",
    packNote: "Caneta semanal; custo típico por mês de tratamento.",
    comparticipacao:
      "Sem comparticipação SNS para gestão de peso à data desta revisão.",
    caveat: "PVP oficial varia por dosagem (0,25 mg → 2,4 mg).",
  },
  {
    slug: "ozempic",
    brandName: "Ozempic",
    substance: "semaglutida",
    monthlyBandEur: "≈ 100 – 140 €",
    packNote: "Caneta semanal; indicação principal diabetes tipo 2.",
    comparticipacao:
      "Pode haver comparticipação SNS em diabetes tipo 2 quando prescrito dentro dos critérios em vigor — confirme na receita e na farmácia.",
    caveat:
      "Usar Ozempic «só para emagrecer» fora de indicação é off-label e pode não ter comparticipação.",
  },
  {
    slug: "saxenda",
    brandName: "Saxenda",
    substance: "liraglutida",
    monthlyBandEur: "Variável (diário)",
    packNote: "Injeção diária — o custo mensal depende da dose e das embalagens.",
    comparticipacao: "Sem comparticipação SNS para peso à data desta revisão.",
    caveat: "Compare o custo mensal real, não só o preço da caixa.",
  },
  {
    slug: "rybelsus",
    brandName: "Rybelsus",
    substance: "semaglutida oral",
    monthlyBandEur: "Variável",
    packNote: "Comprimidos diários para diabetes tipo 2.",
    comparticipacao: "Confirme na Infomed / receita se há comparticipação aplicável.",
    caveat: "Não é «Ozempic em pastilha» sem regras de toma.",
  },
  {
    slug: "trulicity",
    brandName: "Trulicity",
    substance: "dulaglutida",
    monthlyBandEur: "Variável",
    packNote: "Caneta semanal; tipicamente diabetes tipo 2.",
    comparticipacao: "Confirme comparticipação como antidiabético nos critérios atuais.",
    caveat: "Não é intercambiável com Mounjaro ou Wegovy.",
  },
];

export const pricePageDisclaimer =
  "Os valores são ordens de grandeza de PVP em farmácia em Portugal, reunidos a partir de informação pública (incl. Infomed / reportagens e listagens de PVP). Não são uma cotação. O preço no ticket da farmácia e o estatuto de comparticipação no INFARMED mandam.";

export const comparticipacaoNotes = [
  "Para obesidade / gestão de peso, Mounjaro, Wegovy e Saxenda têm sido pagos a 100% pelo utente — sem comparticipação SNS — à data da revisão editorial deste guia.",
  "O Ozempic pode ser comparticipado em contextos de diabetes tipo 2 quando a prescrição cumpre os critérios oficiais (que podem incluir obesidade ou risco cardiovascular elevado). Isso não é o mesmo que comparticipação «para emagrecer».",
  "O Governo / INFARMED têm tido em estudo modelos de comparticipação para fármacos da obesidade, com restrições clínicas e equipas multidisciplinares. Qualquer mudança deve ser confirmada em fontes oficiais — não em anúncios de clínicas.",
];
