/** Spec sheet fields shown on every medication page — same layout for all brands. */
export type MedicationFicha = {
  doseInicial: string;
  doseMaxima: string;
  foraDoFrio: string;
  indicacao: string;
  estatuto: string;
};

export const medicationFicha: Record<string, MedicationFicha> = {
  mounjaro: {
    doseInicial: "2,5 mg uma vez por semana",
    doseMaxima: "15 mg por semana",
    foraDoFrio: "21 dias cumulativos, <30 °C",
    indicacao: "Varia com o país",
    estatuto: "Autorizado na UE",
  },
  zepbound: {
    doseInicial: "2,5 mg uma vez por semana",
    doseMaxima: "15 mg por semana",
    foraDoFrio: "21 dias cumulativos, <30 °C",
    indicacao: "Gestão de peso",
    estatuto: "Nome usado noutros mercados",
  },
  ozempic: {
    doseInicial: "0,25 mg uma vez por semana",
    doseMaxima: "2 mg por semana",
    foraDoFrio: "6 semanas após a 1.ª utilização, <30 °C",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE",
  },
  wegovy: {
    doseInicial: "0,25 mg uma vez por semana, semanas 1 a 4",
    doseMaxima: "2,4 mg por semana",
    foraDoFrio: "28 dias, ≤30 °C",
    indicacao: "Gestão de peso",
    estatuto: "Autorizado na UE",
  },
  rybelsus: {
    doseInicial: "1,5 mg uma vez por dia, durante um mês",
    doseMaxima: "50 mg por dia",
    foraDoFrio: "Não vai ao frio",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE",
  },
  saxenda: {
    doseInicial: "0,6 mg uma vez por dia",
    doseMaxima: "3,0 mg por dia",
    foraDoFrio: "1 mês após a 1.ª utilização, <30 °C",
    indicacao: "Gestão de peso",
    estatuto: "Autorizado na UE",
  },
  victoza: {
    doseInicial: "0,6 mg por dia",
    doseMaxima: "1,8 mg por dia",
    foraDoFrio: "1 mês após a 1.ª utilização, <30 °C",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE",
  },
  trulicity: {
    doseInicial: "0,75–1,5 mg por semana (conforme o regime)",
    doseMaxima: "4,5 mg por semana",
    foraDoFrio: "14 dias, ≤30 °C",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE",
  },
  byetta: {
    doseInicial: "5 µg duas vezes por dia, pelo menos um mês",
    doseMaxima: "10 µg duas vezes por dia",
    foraDoFrio: "Caneta em uso: 30 dias",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE (geração mais antiga)",
  },
  bydureon: {
    doseInicial: "2 mg uma vez por semana",
    doseMaxima: "2 mg por semana",
    foraDoFrio: "Ver folheto",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorizado na UE (geração mais antiga)",
  },
  lyxumia: {
    doseInicial: "Ver folheto / regulador",
    doseMaxima: "Ver folheto / regulador",
    foraDoFrio: "—",
    indicacao: "Diabetes tipo 2",
    estatuto: "Autorização retirada na UE",
  },
};

export function getFicha(slug: string): MedicationFicha | undefined {
  return medicationFicha[slug];
}
