export const buyRedFlags = [
  {
    id: "sem-receita",
    title: "Venda sem receita",
    detail:
      "Ou «receita fácil» por mensagem / formulário de dois minutos. Medicamentos desta classe exigem avaliação clínica.",
  },
  {
    id: "preco-baixo",
    title: "Preço muito abaixo do PVP",
    detail:
      "Descontos agressivos sem farmácia identificada são um clássico de falsificação ou de cadeia ilegal.",
  },
  {
    id: "sem-farmacia",
    title: "Remetente sem farmácia licenciada",
    detail:
      "Sem identificação clara, sem cold chain e sem folheto na língua local — não compre.",
  },
  {
    id: "embalagem",
    title: "Embalagem estranha",
    detail:
      "Canetas sem rotulagem adequada, «genéricos» duvidosos ou lotes que a farmácia não reconhece.",
  },
  {
    id: "venda-consulta",
    title: "Venda no mesmo sítio da «consulta»",
    detail:
      "Pressão para comprar a caneta onde o «médico» atende em cinco minutos, sem passar por farmácia.",
  },
] as const;

export const buyRisks = [
  "Falsificações e doses erradas.",
  "Contaminação ou interrupção da cadeia de frio.",
  "Ausência de acompanhamento quando há efeitos graves.",
  "Ilegalidade — além do risco clínico.",
] as const;

export const buySaferPaths = [
  {
    title: "Receita + farmácia licenciada",
    body: "O caminho seguro em Portugal: avaliação médica, receita e dispensa numa farmácia identificada (presencial ou online legal).",
  },
  {
    title: "Confirmar o PVP",
    body: "Use a Infomed (INFARMED) e o ticket da farmácia. Ordens de grandeza estão em Preços — não são uma cotação.",
  },
  {
    title: "Custo como obstáculo",
    body: "Se o preço é o problema, fale com o médico sobre alternativas, comparticipação (quando existir) e o plano realista — não com um anúncio.",
  },
] as const;
