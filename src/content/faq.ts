export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

export type FaqCategory =
  | "basico"
  | "uso"
  | "efeitos"
  | "vida"
  | "seguranca"
  | "mitos";

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "basico", label: "O essencial" },
  { id: "uso", label: "Como se usa" },
  { id: "efeitos", label: "Efeitos" },
  { id: "vida", label: "No dia a dia" },
  { id: "seguranca", label: "Segurança" },
  { id: "mitos", label: "Mitos e ruído" },
];

export const faqItems: FaqItem[] = [
  {
    id: "o-que-e-mounjaro",
    category: "basico",
    question: "O que é o Mounjaro?",
    answer:
      "Mounjaro é o nome comercial da tirzepatida, um medicamento injetável semanal da Lilly. Atua em dois recetores intestinais (GIP e GLP-1). As indicações oficiais — diabetes tipo 2, excesso de peso, ou ambos — dependem do país e da bula local. Este site explica o conceito; não diz se o medicamento é para si.",
  },
  {
    id: "glp1-ou-gip",
    category: "basico",
    question: "É um «GLP-1»?",
    answer:
      "Na conversa do dia a dia, muita gente chama «GLP-1» a toda esta família de injeções semanais. Em rigor, a tirzepatida é um agonista duplo: GLP-1 e GIP. A semaglutida (Ozempic, Wegovy) atua sobretudo no GLP-1. Não são o mesmo fármaco nem a mesma caneta.",
  },
  {
    id: "emagrece",
    category: "basico",
    question: "Serve para emagrecer?",
    answer:
      "Em ensaios clínicos, muita gente perde peso enquanto usa tirzepatida, porque come menos e o esvaziamento do estômago atrasa. Isso não transforma o medicamento num «atalho» nem garante resultado. Em vários países a indicação oficial de peso tem critérios próprios (IMC, outras doenças). Noutros, o nome Mounjaro está autorizado sobretudo para diabetes tipo 2. Quem decide a indicação é o profissional de saúde, com a lei do seu país.",
  },
  {
    id: "substitui-dieta",
    category: "basico",
    question: "Substitui alimentação e exercício?",
    answer:
      "Não. Os documentos oficiais descrevem o medicamento como complemento de dieta e atividade física, no contexto de diabetes ou de gestão de peso. Sem acompanhamento, o risco de comer de menos de forma desequilibrada, perder massa muscular ou desistir ao parar a injeção é real.",
  },
  {
    id: "quem-pode",
    category: "basico",
    question: "Quem pode usar?",
    answer:
      "Só um profissional de saúde pode responder no seu caso. Em geral avalia-se o diagnóstico (diabetes tipo 2 e/ou excesso de peso com critérios), outras doenças, outros medicamentos, gravidez, e contraindicações como história pessoal ou familiar de carcinoma medular da tiroide ou MEN2. Comprar sem receita ou partilhar canetas é inseguro e, em muitos sítios, ilegal.",
  },
  {
    id: "como-se-toma",
    category: "uso",
    question: "Como se toma?",
    answer:
      "É uma injeção subcutânea, em geral uma vez por semana, no mesmo dia. Os sítios habituais são abdómen, coxa ou parte posterior do braço. Deve-se rodar o local. A técnica exata está no folheto da caneta do seu país — vale a pena pedir para alguém mostrar na primeira vez.",
  },
  {
    id: "comida",
    category: "uso",
    question: "Tem de ser com comida ou em jejum?",
    answer:
      "A informação oficial do Mounjaro indica que pode ser tomado a qualquer hora do dia, com ou sem refeição. O que importa é a regularidade semanal e a dose que o médico definiu.",
  },
  {
    id: "titulacao",
    category: "uso",
    question: "Porque se começa com uma dose baixa?",
    answer:
      "Porque o aparelho digestivo precisa de tempo. A titulação típica sobe a dose em degraus (muitas vezes de 4 em 4 semanas), se a pessoa tolerar. Começar já «no máximo» não acelera um resultado saudável — acelera náuseas. A dose certa é a mais baixa que cumpre o objetivo clínico com efeitos que a pessoa consegue viver.",
  },
  {
    id: "esqueci",
    category: "uso",
    question: "E se eu esquecer uma dose?",
    answer:
      "O RCM europeu e a bula de vários países dizem, em traços gerais: se passaram 4 dias ou menos, tome assim que lembrar e retome o calendário; se passaram mais de 4 dias, salte essa dose e espere pelo dia habitual. Deve haver pelo menos 3 dias entre duas injeções. Se tiver dúvidas, pergunte a quem o acompanha — não invente uma dose extra «para compensar».",
  },
  {
    id: "guardar",
    category: "uso",
    question: "Como se guarda a caneta?",
    answer:
      "Em geral no frigorífico (cerca de 2 a 8 °C), sem congelar, na embalagem original para proteger da luz. Muitas bulas permitem um período fora do frio (por exemplo até 21 dias, até 30 °C) — confirme o número exato no folheto da sua embalagem, porque pode variar. Caneta congelada ou sobreaquecida não se usa.",
  },
  {
    id: "nauseas",
    category: "efeitos",
    question: "As náuseas são normais?",
    answer:
      "São o efeito mais falado: náusea, menos fome, prisão de ventre ou diarreia, azia, enfartamento. Costumam ser mais fortes ao subir a dose e tendem a aliviar. Estratégias que muita gente usa (sempre com o acordo do profissional): refeições mais pequenas, comer devagar, menos gordura e álcool, hidratação. Vómitos intensos, desidratação ou dor forte já não são «o normal da adaptação».",
  },
  {
    id: "quando-ligar",
    category: "efeitos",
    question: "Quando é que não é «só um efeito»?",
    answer:
      "Procure ajuda urgente se houver dor intensa e persistente na barriga (com ou sem vómitos), sinais de reação alérgica grave, desmaio, confusão, febre com amarelar da pele, ou sintomas de vesícula. Avise o médico se a visão piorar, se urinar muito pouco, ou se tiver hipoglicemia (sobretudo se usar insulina ou comprimidos que baixam o açúcar).",
  },
  {
    id: "cabelo",
    category: "efeitos",
    question: "Cai o cabelo?",
    answer:
      "Algumas pessoas notam mais queda de cabelo durante perdas de peso rápidas — acontece também noutras dietas muito restritivas. Não é o efeito mais estudado do fármaco, mas vale a pena falar com o médico se for marcada, e garantir proteína e nutrientes suficientes.",
  },
  {
    id: "alcool",
    category: "vida",
    question: "Posso beber álcool?",
    answer:
      "Não há uma proibição universal na bula, mas o álcool irrita o estômago, acrescenta calorias vazias e, em quem tem diabetes, complica o açúcar no sangue. Muita gente tolera menos álcool depois de começar. É uma conversa honesta para a consulta — não um conselho de «pode» ou «não pode» da internet.",
  },
  {
    id: "viagem",
    category: "vida",
    question: "E em viagens?",
    answer:
      "Planeie o frio (mala térmica, não o porão do avião se houver risco de congelar), o fuso horário (mantenha ~7 dias entre doses) e a quantidade de canetas. Leve a receita ou uma declaração, porque controlos alfandegários podem perguntar. Confirme as regras de transporte no folheto e com a companhia aérea.",
  },
  {
    id: "anticoncepcional",
    category: "vida",
    question: "Afeta a pílula?",
    answer:
      "Como o estômago esvazia mais devagar, a absorção de alguns comprimidos pode mudar, sobretudo ao subir a dose. A informação oficial da tirzepatida alerta para este ponto em contraceptivos orais. Não mude o método sozinho: fale com quem prescreve. Gravidez sob este medicamento não é o cenário desejado.",
  },
  {
    id: "paragem",
    category: "vida",
    question: "O que acontece se eu parar?",
    answer:
      "O efeito vai-se e, em muitos estudos, parte do peso e do controlo do açúcar regride se nada mais mudar. Por isso o plano de alimentação, músculo e acompanhamento importa tanto quanto a caneta. Parar de súbito por falta de stock ou por conta própria merece uma conversa médica — especialmente em diabetes.",
  },
  {
    id: "tiroide",
    category: "seguranca",
    question: "É verdade que dá cancro da tiroide?",
    answer:
      "Em roedores, fármacos desta classe associaram-se a tumores das células C da tiroide. Não se sabe se isso se traduz no mesmo risco em humanos. Por precaução, quem tem carcinoma medular da tiroide (próprio ou na família) ou MEN2 em geral não deve usar. Nódulo da tiroide comum não é a mesma coisa — mas deve ser dito na consulta.",
  },
  {
    id: "gravidez",
    category: "seguranca",
    question: "E gravidez ou amamentação?",
    answer:
      "Em geral estes medicamentos não se usam na gravidez. Quem puder engravidar precisa de um plano contraceptivo claro. Se houver gravidez, contacte o médico; não ajuste doses pela internet. Amamentação também exige orientação individual — a bula local é o ponto de partida.",
  },
  {
    id: "outras-doencas",
    category: "seguranca",
    question: "Tenho problemas de estômago / rins / olhos. Posso usar?",
    answer:
      "Depende. Gastroparesia grave, doença da vesícula, pancreatite prévia, doença renal e retinopatia diabética são exemplos de temas que o médico precisa de conhecer. Uma resposta pronta em fóruns («eu usei e correu bem») não é a sua avaliação.",
  },
  {
    id: "comprar-online",
    category: "mitos",
    question: "Posso comprar mais barato na internet?",
    answer:
      "Canetas sem cadeia de frio, sem receita e sem farmácia identificada são um risco clássico: falsificações, doses erradas, infeção. Preço baixo não é critério clínico. Se o custo é o obstáculo, isso é assunto para o médico, o seguro ou o sistema de saúde — não para um anúncio.",
  },
  {
    id: "quanto-mais-melhor",
    category: "mitos",
    question: "Quanto mais dose, melhor?",
    answer:
      "Não. Dose mais alta costuma significar mais efeito e mais efeitos adversos. O objetivo não é chegar ao teto da caneta. É chegar a um equilíbrio que o médico e a pessoa considerem aceitável.",
  },
  {
    id: "resultado-rapido",
    category: "mitos",
    question: "Se não emagreço nas primeiras semanas, não está a funcionar?",
    answer:
      "As primeiras semanas são muitas vezes só adaptação (dose baixa). Em diabetes, o primeiro sucesso pode ser o açúcar, não a balança. Comparar o seu mês 1 com fotos de redes sociais de doses altas e filtros é uma forma fiável de se sentir mal — e uma forma fraca de julgar o tratamento.",
  },
  {
    id: "natural",
    category: "mitos",
    question: "Há um «GLP-1 natural» que faz o mesmo?",
    answer:
      "Comer fibra, proteína e movimento regular influencia hormonas da saciedade. Isso é saúde. Não é equivalente a um agonista farmacológico semanal. Suplementos vendidos como «GLP-1 natural» misturam marketing com ciência fraca. Desconfie de quem promete o mesmo efeito sem receita.",
  },
];
