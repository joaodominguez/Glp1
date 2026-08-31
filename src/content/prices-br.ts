export type PriceBandBR = {
  slug: string;
  brandName: string;
  substance: string;
  monthlyBandBrl: string;
  packNote: string;
  susPlano: string;
  caveat: string;
};

export const priceBandsBrazil: PriceBandBR[] = [
  {
    slug: "mounjaro",
    brandName: "Mounjaro",
    substance: "tirzepatida",
    monthlyBandBrl: "≈ R$ 1.400 – 3.800+",
    packNote:
      "Caixa típica ≈ 1 mês (dose semanal). Programas do laboratório e e-commerce alteram o ticket.",
    susPlano:
      "Em regra fora do SUS para obesidade. Planos costumam negar cobertura de uso domiciliar — confirme contrato/ANS.",
    caveat: "Doses altas e ausência de desconto oficial empurram para o topo da faixa.",
  },
  {
    slug: "wegovy",
    brandName: "Wegovy",
    substance: "semaglutida",
    monthlyBandBrl: "≈ R$ 900 – 2.700",
    packNote: "Caneta semanal; tetos CMED e descontos de programa mudam o PVP efetivo.",
    susPlano:
      "Sem disponibilização rotineira no SUS para peso. Há avaliações CONITEC e pilotos pontuais — confirme fontes oficiais.",
    caveat: "Apresentações/análogos nacionais de semaglutida têm preços próprios; não são «o mesmo» sem critério clínico.",
  },
  {
    slug: "ozempic",
    brandName: "Ozempic",
    substance: "semaglutida",
    monthlyBandBrl: "≈ R$ 975 – 1.400",
    packNote: "Caneta semanal; indicação principal diabetes tipo 2.",
    susPlano:
      "Não é liberação rotineira nacional no SUS para obesidade. Em diabetes, o elenco padronizado pode ser outro.",
    caveat: "Uso off-label «só para emagrecer» não cria direito a SUS/plano.",
  },
  {
    slug: "saxenda",
    brandName: "Saxenda",
    substance: "liraglutida",
    monthlyBandBrl: "≈ R$ 900 – 1.900+ / mês",
    packNote: "Diária: o custo mensal depende do número de aplicadores.",
    susPlano: "Sem incorporação SUS rotineira para obesidade reportada.",
    caveat: "Compare custo mensal real; há outras marcas de liraglutida no BR.",
  },
];

export const pricePageDisclaimerBrazil =
  "Valores em reais (BRL) são ordens de grandeza aproximadas (reportagens e listagens públicas ≈ 2025–2026, programas de laboratório, faixas CMED/varejo). Não são cotação. O ticket da farmácia, o PMC e a ANVISA mandam.";

export const susPlanoNotesBrazil = [
  "SUS: agonistas GLP-1 / tirzepatida para obesidade em geral não estão disponíveis de forma rotineira. Pilotos e pedidos CONITEC existem — confirme Ministério da Saúde / Secretaria local.",
  "Planos: medicamentos autoaplicáveis em domicílio costumam não ter cobertura obrigatória (Lei 9.656/98). Contrato e rol ANS prevalecem.",
  "Descontos de programas (laboratório) e e-commerce mudam o preço efetivo; raramente acumulam com todas as promoções de farmácia.",
];

export const anvisaConsultasUrl = "https://consultas.anvisa.gov.br/#/medicamentos/";
export const anvisaBularioUrl = "https://consultas.anvisa.gov.br/#/bulario/";
