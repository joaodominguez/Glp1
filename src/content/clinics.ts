export type ClinicExample = {
  id: string;
  name: string;
  region: string;
  kind: "hospital" | "grupo" | "online";
  focus: string;
  href: string;
  note: string;
};

/**
 * Institutional examples for orientation — not a ranking, not paid placement,
 * not a guarantee of quality or availability of GLP-1 prescribing.
 */
export const clinicExamples: ClinicExample[] = [
  {
    id: "lusiadas-obesidade",
    name: "Hospital Lusíadas Lisboa — Centro Multidisciplinar de Tratamento da Obesidade",
    region: "Lisboa",
    kind: "hospital",
    focus: "Obesidade multidisciplinar (endocrinologia, nutrição, psicologia, cirurgia quando indicada)",
    href: "https://www.lusiadas.pt/hospitais-clinicas/hospital-lusiadas-lisboa/servicos/centro-multidisciplinar-tratamento-obesidade",
    note: "Centro com acreditação histórica DGS no tratamento da obesidade. Confirme sempre agendas e critérios atuais.",
  },
  {
    id: "cuf",
    name: "CUF — Endocrinologia / consultas de emagrecimento (várias unidades)",
    region: "Lisboa, Porto, Algarve e outras",
    kind: "grupo",
    focus: "Avaliação clínica e acompanhamento; algumas unidades comunicam programas com agonistas GLP-1",
    href: "https://www.cuf.pt/",
    note: "Rede hospitalar privada. A oferta varia por unidade — peça Endocrinologia ou a consulta específica de peso.",
  },
  {
    id: "luz",
    name: "Hospital da Luz — Endocrinologia / obesidade",
    region: "Lisboa, Porto e rede",
    kind: "grupo",
    focus: "Especialidades hospitalares incluindo endocrinologia e apoio a excesso de peso",
    href: "https://www.hospitaldaluz.pt/",
    note: "Confirme a especialidade e se há circuito de obesidade na unidade mais próxima.",
  },
  {
    id: "sns",
    name: "Hospitais SNS — Endocrinologia e consultas de obesidade",
    region: "Todo o país",
    kind: "hospital",
    focus: "Referenciação via médico de família; acompanhamento de diabetes e obesidade grave",
    href: "https://www.sns24.gov.pt/",
    note: "Caminho público. Pode haver lista de espera. SNS 24 (808 24 24 24) orienta contactos e urgências não emergentes.",
  },
  {
    id: "hpa-cuf-algarve",
    name: "Grupo HPA / CUF Algarve — consulta de emagrecimento",
    region: "Algarve",
    kind: "grupo",
    focus: "Consulta de emagrecimento com menção a agonistas GLP-1 em comunicação pública",
    href: "https://www.grupohpa.com/pt/especialidades-e-consultas/consulta-de-emagrecimento/",
    note: "Exemplo regional. Valide indicação, preço da consulta e o que está incluído (só consulta vs pacote).",
  },
];

export const clinicQualityChecks = [
  "Há médico com cédula portuguesa e especialidade adequada?",
  "Há tempo para história clínica, análises e contraindicações — ou só para a receita?",
  "Existe nutrição (e, se preciso, psicologia) no percurso?",
  "A medicação sai de farmácia licenciada, com receita?",
  "Ficou claro o plano de follow-up e o contacto para efeitos graves?",
  "O preço da consulta está separado do preço do medicamento?",
];

export const clinicPageDisclaimer =
  "Esta lista é orientativa e pública. O Guia GLP-1 não tem parcerias pagas com estas instituições, não recebe comissão por marcações e não garante qualidade, disponibilidade de agenda nem prescrição de nenhum medicamento.";
