export type Article = {
  slug: string;
  title: string;
  lede: string;
  summary: string;
  eyebrow: string;
  readMinutes: number;
  publishedAt: string;
  /** Pen shown in the article hero */
  illustration: {
    brandName: string;
    substance: string;
    mechanism: "glp1" | "gip-glp1" | "outro";
    slug: string;
  };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  whenToCall: string[];
  related: { href: string; label: string; blurb: string }[];
};

export const articles: Article[] = [
  {
    slug: "primeiras-semanas",
    title: "As primeiras 4 semanas com a caneta",
    lede:
      "A titulação inicial não é uma corrida. É o período em que o corpo se adapta — e em que muita gente julga o tratamento cedo demais.",
    summary:
      "O que esperar nas primeiras semanas de Mounjaro ou outro GLP-1: dia fixo, refeições, o que anotar e porque a balança quase não mexer ainda não significa falha.",
    eyebrow: "Na prática",
    readMinutes: 6,
    publishedAt: "2026-09-10",
    illustration: {
      brandName: "Mounjaro",
      substance: "tirzepatida",
      mechanism: "gip-glp1",
      slug: "mounjaro",
    },
    sections: [
      {
        heading: "O que estas semanas são (e não são)",
        paragraphs: [
          "Nas primeiras doses, o objectivo clínico costuma ser tolerância: o aparelho digestivo a habituar-se, a dose ainda baixa, o calendário a estabilizar. Em diabetes, o açúcar pode melhorar antes da balança. Em gestão de peso, comparar o seu mês 1 com fotos de redes sociais de doses altas é uma forma fiável de se sentir mal — e uma forma fraca de julgar o tratamento.",
          "«Não emagreci nas primeiras duas semanas» raramente é o veredicto certo. É, muitas vezes, só o início da titulação.",
        ],
      },
      {
        heading: "Boas práticas que valem a pena",
        paragraphs: [
          "Nada disto substitui o plano do seu médico. São hábitos que reduzem atrito e ajudam a consulta a ser útil.",
        ],
        bullets: [
          "Escolha um dia fixo da semana que consiga manter (viagens e fins de semana incluídos).",
          "Peça demonstração da caneta na primeira prescrição — técnica e rotação do local importam.",
          "Refeições mais pequenas, comer mais devagar, menos gordura e álcool nas primeiras subidas de dose.",
          "Garanta proteína e água mesmo quando a fome some — não é «jejum heroico».",
          "Anote 3 coisas: dia da dose, efeitos (náusea, prisão de ventre, hipoglicemia) e perguntas para a próxima consulta.",
          "Não salte para a dose máxima «para ir mais depressa». Acelera náuseas, não um resultado saudável.",
        ],
      },
      {
        heading: "O que levar à revisão",
        paragraphs: [
          "Uma lista curta rende mais do que um desabafo longo: efeitos que o preocupam, outros medicamentos, se esqueceu alguma dose, e se o custo ou o stock estão a condicionar o plano. Use a checklist na página de Médicos se quiser uma grelha completa.",
        ],
      },
    ],
    whenToCall: [
      "Vómitos intensos, desidratação ou incapacidade de beber líquidos.",
      "Dor forte e persistente na barriga.",
      "Sinais de reacção alérgica grave.",
      "Hipoglicemia preocupante (sobretudo se usa insulina ou comprimidos que baixam o açúcar).",
    ],
    related: [
      {
        href: "/medicamentos/mounjaro/",
        label: "Ficha Mounjaro",
        blurb: "Substância, dose e conservação.",
      },
      {
        href: "/medicos/#checklist",
        label: "Checklist para a consulta",
        blurb: "O que levar e o que perguntar.",
      },
      {
        href: "/artigos/nauseas-e-estomago/",
        label: "Náuseas e estômago",
        blurb: "O que costuma ajudar — e o que não.",
      },
    ],
  },
  {
    slug: "nauseas-e-estomago",
    title: "Náuseas e estômago: o que costuma ajudar",
    lede:
      "É o efeito mais falado desta classe. Há hábitos que muitas pessoas usam — e sinais de que já não é «só adaptação».",
    summary:
      "Náuseas com Mounjaro, Ozempic ou Wegovy: refeições, gordura, álcool, hidratação e quando contactar o médico.",
    eyebrow: "Na prática",
    readMinutes: 5,
    publishedAt: "2026-09-10",
    illustration: {
      brandName: "Ozempic",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "ozempic",
    },
    sections: [
      {
        heading: "Porque acontece",
        paragraphs: [
          "Estes medicamentos atrasam o esvaziamento do estômago e mudam o apetite. Náusea, enfartamento, azia, prisão de ventre ou diarreia são frequentes — sobretudo ao subir a dose. Costumam aliviar com o tempo, mas «frequente» não significa «ignore sempre».",
        ],
      },
      {
        heading: "Truques práticos (com o acordo do profissional)",
        paragraphs: [
          "Isto não é protocolo clínico nem lista de suplementos milagrosos. São ajustes do dia a dia que aparecem repetidamente em acompanhamento sério.",
        ],
        bullets: [
          "Refeições mais pequenas e mais vezes, em vez de um prato grande.",
          "Comer devagar; parar quando estiver confortável, não quando o prato acabar.",
          "Menos frituras, molhos pesados e álcool — irritam um estômago mais lento.",
          "Hidratação ao longo do dia; líquidos aos goles se a náusea for forte.",
          "Gengibre ou chás suaves ajudam algumas pessoas; não são tratamento.",
          "Se a náusea piora sempre no dia a seguir à injecção, diga isso na consulta — o timing e a titulação podem ajustar-se.",
        ],
      },
      {
        heading: "O que não fazer",
        paragraphs: [
          "Não «compense» com jejum extremo. Não suba a dose por conta própria. Não compre canetas paralelas porque «esta está a fazer-lhe mal». E não copie o protocolo de um grupo online sem o seu contexto clínico.",
        ],
      },
    ],
    whenToCall: [
      "Vómitos que não param ou sinais de desidratação.",
      "Dor abdominal intensa (com ou sem vómitos).",
      "Incapacidade de manter líquidos ou medicação essencial.",
      "Amarelar da pele, febre, ou sintomas que o assustam de forma nova.",
    ],
    related: [
      {
        href: "/artigos/primeiras-semanas/",
        label: "Primeiras 4 semanas",
        blurb: "O contexto da titulação.",
      },
      {
        href: "/perguntas/#nauseas",
        label: "FAQ: náuseas",
        blurb: "Resposta curta no FAQ.",
      },
      {
        href: "/medicos/",
        label: "Médicos",
        blurb: "Quando a consulta precisa de ajuste.",
      },
    ],
  },
  {
    slug: "dose-esquecida-viagem-frio",
    title: "Dose esquecida, viagem e frigorífico",
    lede:
      "A logística da caneta gera quase tanto stress como os efeitos. Aqui vai o essencial da bula — em português claro.",
    summary:
      "O que fazer se esquecer a dose de Mounjaro, como viajar com a caneta e regras práticas de frio — sem inventar doses extra.",
    eyebrow: "Na prática",
    readMinutes: 5,
    publishedAt: "2026-09-10",
    illustration: {
      brandName: "Wegovy",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "wegovy",
    },
    sections: [
      {
        heading: "Esqueci a dose — e agora?",
        paragraphs: [
          "Em traços gerais (RCM / bulas típicas da tirzepatida e de vários agonistas semanais): se passaram 4 dias ou menos, tome assim que lembrar e retome o calendário; se passaram mais de 4 dias, salte essa dose e espere pelo dia habitual. Deve haver pelo menos 3 dias entre duas injecções.",
          "Não invente uma dose extra «para compensar». Se tiver dúvidas no seu caso, pergunte a quem o acompanha — a bula da embalagem que comprou manda.",
        ],
      },
      {
        heading: "Frigorífico e calor",
        paragraphs: [
          "Guarde em geral entre cerca de 2 e 8 °C, sem congelar, na embalagem original. Muitas bulas permitem um período fora do frio (por exemplo até 21 dias, até 30 °C) — confirme o número exacto no folheto. Caneta congelada ou sobreaquecida não se usa.",
        ],
        bullets: [
          "Não encoste ao fundo do congelador nem deixe no carro ao sol.",
          "Na farmácia, confirme a cadeia de frio se a encomenda vier de longe.",
          "Anote a data em que tirou do frio, se a bula tiver limite de dias.",
        ],
      },
      {
        heading: "Viajar",
        paragraphs: [
          "Planeie o frio (mala térmica), o fuso horário (mantenha cerca de 7 dias entre doses) e a quantidade de canetas. Leve a receita ou uma declaração na bagagem de mão — controlos podem perguntar. Evite o porão se houver risco de congelar.",
        ],
      },
    ],
    whenToCall: [
      "Não sabe se a caneta esteve demasiado quente ou congelou.",
      "Perdeu o calendário de doses e usa também insulina ou outros antidiabéticos.",
      "Vai viajar para um país com regras pouco claras de transporte de injectáveis.",
    ],
    related: [
      {
        href: "/medicamentos/mounjaro/",
        label: "Ficha Mounjaro",
        blurb: "Conservação na ficha.",
      },
      {
        href: "/onde-comprar/",
        label: "Onde comprar",
        blurb: "Farmácia legal e cold chain.",
      },
      {
        href: "/perguntas/#esqueci",
        label: "FAQ: dose esquecida",
        blurb: "Resumo rápido.",
      },
    ],
  },
  {
    slug: "proteina-e-musculo",
    title: "Proteína, músculo e o que comer quando a fome some",
    lede:
      "O truque que mais falta nos grupos: não é comer o menos possível. É comer o suficiente do que importa.",
    summary:
      "Como pensar proteína e músculo com GLP-1 quando o apetite cai — sem dietas milagrosas nem protocolo DIY.",
    eyebrow: "Na prática",
    readMinutes: 6,
    publishedAt: "2026-09-10",
    illustration: {
      brandName: "Mounjaro",
      substance: "tirzepatida",
      mechanism: "gip-glp1",
      slug: "mounjaro",
    },
    sections: [
      {
        heading: "O problema escondido",
        paragraphs: [
          "Com menos fome, é fácil comer só «o que apetece e passa» — torradas, sumos, um iogurte tarde. O peso pode descer e, ao mesmo tempo, perder-se músculo, energia e margem para manter o resultado quando a caneta abranda ou para.",
          "O medicamento muda o apetite; não substitui um plano alimentar seguro nem o apoio a comportamentos.",
        ],
      },
      {
        heading: "Boas práticas simples",
        paragraphs: [
          "Isto é orientação geral educativa. Quantidades e restrições dependem da sua idade, rins, diabetes e do que o profissional definir.",
        ],
        bullets: [
          "Priorize proteína em cada refeição (ovos, peixe, carne magra, lacticínios, leguminosas, alternativas que tolere).",
          "Se o volume enjoa, escolha versões mais densas e porções pequenas — não «zero comida».",
          "Mantenha algum movimento de força (mesmo em casa): músculo responde a estímulo, não só a défice.",
          "Hidratação e fibra ajudam o trânsito — prisão de ventre é comum.",
          "Se a fome desaparecer por completo durante dias, diga na consulta; pode ser preciso ajustar dose ou plano.",
          "Peça referenciação a nutrição cedo, não só quando já estiver exausto.",
        ],
      },
      {
        heading: "Quando parar a caneta",
        paragraphs: [
          "Em muitos estudos, parte do peso e do controlo do açúcar regride se nada mais mudar. Por isso o plano de alimentação e músculo importa tanto quanto a injecção. Parar por falta de stock ou por conta própria merece conversa médica — especialmente em diabetes.",
        ],
      },
    ],
    whenToCall: [
      "Perda de peso muito rápida com fraqueza marcada ou queda de cabelo intensa.",
      "Incapacidade de comer proteína ou qualquer refeição completa.",
      "Sinais de desnutrição ou preocupação séria com a relação com a comida.",
    ],
    related: [
      {
        href: "/artigos/primeiras-semanas/",
        label: "Primeiras 4 semanas",
        blurb: "Hábitos no início.",
      },
      {
        href: "/medicos/",
        label: "Médicos e nutrição",
        blurb: "Quem pode ajudar no plano.",
      },
      {
        href: "/perguntas/#paragem",
        label: "FAQ: se eu parar",
        blurb: "O que costuma acontecer.",
      },
    ],
  },
  {
    slug: "rybelsus-portugal",
    title: "Rybelsus em Portugal: o que saber antes da receita",
    lede:
      "É semaglutida — mas em comprimido. Em Portugal a pergunta certa não é «é o Ozempic em pastilha?»; é «a rotina de toma e a indicação fazem sentido para mim?»",
    summary:
      "Rybelsus em Portugal: o que é, em que difere do Ozempic, regras de toma, preço/comparticipação e o que confirmar na Infomed e na farmácia.",
    eyebrow: "Portugal",
    readMinutes: 7,
    publishedAt: "2026-09-14",
    illustration: {
      brandName: "Rybelsus",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "rybelsus",
    },
    sections: [
      {
        heading: "O que é (e o que não é)",
        paragraphs: [
          "Rybelsus é semaglutida em comprimido oral, tipicamente para diabetes tipo 2. Partilha a substância com Ozempic e Wegovy, mas não a caneta, não a dose e não a rotina. Chamar-lhe «Ozempic em pastilha» é um atalho que gera erros de expectativa — e de toma.",
          "Em Portugal, confirme sempre a informação actual na Infomed (INFARMED) e no folheto da embalagem que comprou. Este guia explica o conceito; não decide se o medicamento é para si.",
        ],
      },
      {
        heading: "A rotina de toma importa mais do que a marca",
        paragraphs: [
          "A forma oral tem regras apertadas (jejum, volume de água, espera antes de comer ou de outros comprimidos). Se falharem, o efeito pode cair sem a pessoa perceber. Peça ao médico ou farmacêutico para rever consigo o horário da manhã — sobretudo se já toma vários medicamentos em jejum.",
        ],
        bullets: [
          "Siga o folheto à letra no timing e nos líquidos.",
          "Não «compense» uma toma falhada com dose dupla.",
          "Anote interações com outros comprimidos da manhã.",
          "Se a adesão for difícil, diga — pode haver alternativas injectáveis mais simples para o seu caso.",
        ],
      },
      {
        heading: "Preço, comparticipação e farmácia",
        paragraphs: [
          "Como nos outros da classe, o PVP muda e a comparticipação depende da indicação e das regras em vigor — não do que o vizinho pagou. Para obesidade/peso, muitos agonistas têm sido pagos a 100% pelo utente; em diabetes tipo 2 pode haver critérios diferentes. Confirme Infomed + ticket da farmácia.",
          "Compre só com receita em farmácia licenciada. Preço baixo online sem cold chain / sem farmácia identificada continua a ser um risco clássico — mesmo em comprimidos.",
        ],
      },
      {
        heading: "Quando faz sentido falar com o médico",
        paragraphs: [
          "Se está a comparar Rybelsus com Ozempic/Wegovy/Mounjaro, leve à consulta o diagnóstico (diabetes? peso? ambos?), a lista de medicação e a dificuldade real de cumprir jejum matinal. A «melhor» opção é a que consegue manter com segurança — não a que ganha debates em grupos.",
        ],
      },
    ],
    whenToCall: [
      "Efeitos digestivos intensos que impedem comer ou beber.",
      "Dúvida sobre toma falhada e outros antidiabéticos (insulina, sulfonilureias).",
      "Gravidez, desejo de engravidar ou amamentação.",
    ],
    related: [
      {
        href: "/artigos/rybelsus-vs-ozempic/",
        label: "Rybelsus vs Ozempic",
        blurb: "Oral vs caneta semanal.",
      },
      {
        href: "/precos/",
        label: "Preços em Portugal",
        blurb: "Ordens de grandeza e Infomed.",
      },
      {
        href: "/artigos/comparticipacao-sns/",
        label: "Comparticipação",
        blurb: "O que verificar no SNS.",
      },
    ],
  },
  {
    slug: "mounjaro-vs-ozempic",
    title: "Mounjaro vs Ozempic: o que muda de verdade",
    lede:
      "Não é a mesma caneta, nem a mesma substância. Comparar «qual emagrece mais» na internet não substitui a escolha clínica com o seu diagnóstico e a bula local.",
    summary:
      "Diferenças entre Mounjaro (tirzepatida) e Ozempic (semaglutida): mecanismo, indicações, titulação e erros comuns — em português claro.",
    eyebrow: "Comparar",
    readMinutes: 7,
    publishedAt: "2026-09-14",
    illustration: {
      brandName: "Mounjaro",
      substance: "tirzepatida",
      mechanism: "gip-glp1",
      slug: "mounjaro",
    },
    sections: [
      {
        heading: "Substância e mecanismo",
        paragraphs: [
          "Ozempic é semaglutida (agonista de GLP-1). Mounjaro é tirzepatida (agonista duplo GIP + GLP-1). Empresas, doses, canetas e evidência são diferentes. Trocar um pelo outro sem indicação médica é um erro comum e arriscado.",
        ],
      },
      {
        heading: "Indicação ≠ alcunha de grupo",
        paragraphs: [
          "Ozempic está tipicamente autorizado para diabetes tipo 2. Wegovy (também semaglutida) é a linha mais associada a gestão de peso. Mounjaro, conforme o país, pode estar autorizado sobretudo para diabetes tipo 2 e/ou peso. O que a bula do seu país autoriza manda — não o Instagram.",
        ],
        bullets: [
          "Mesma «família» de conversa ≠ mesmo fármaco.",
          "Dose e titulação não são intercambiáveis.",
          "Efeitos digestivos existem nos dois; a intensidade individual varia.",
          "Custo e stock em Portugal também diferem — veja Preços.",
        ],
      },
      {
        heading: "Como decidir sem ruído",
        paragraphs: [
          "Leve à consulta: diagnóstico, comorbilidades, outros medicamentos, tolerância digestiva, capacidade de pagar e de manter follow-up. Pergunte alternativas — incluindo não começar agora. Desconfie de quem garante «X kg» ou vende a caneta no mesmo sítio da «consulta» de cinco minutos.",
        ],
      },
    ],
    whenToCall: [
      "Está a pensar mudar de caneta por conta própria.",
      "Teve efeito grave com uma e quer saber se a outra é «mais segura» — isso é avaliação médica, não fórum.",
    ],
    related: [
      {
        href: "/medicamentos/mounjaro/",
        label: "Ficha Mounjaro",
        blurb: "Tirzepatida em detalhe.",
      },
      {
        href: "/medicamentos/ozempic/",
        label: "Ficha Ozempic",
        blurb: "Semaglutida injectável.",
      },
      {
        href: "/artigos/ozempic-vs-wegovy/",
        label: "Ozempic vs Wegovy",
        blurb: "Mesma substância, outra indicação.",
      },
    ],
  },
  {
    slug: "ozempic-vs-wegovy",
    title: "Ozempic vs Wegovy: a mesma substância, outro contexto",
    lede:
      "Ambos têm semaglutida. Não são a mesma caneta nem a mesma indicação. Confundir os dois é um dos erros mais repetidos em português.",
    summary:
      "Ozempic e Wegovy partilham semaglutida mas diferem em indicação, doses e critérios. O que isto significa em Portugal.",
    eyebrow: "Comparar",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    illustration: {
      brandName: "Wegovy",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "wegovy",
    },
    sections: [
      {
        heading: "O que é igual",
        paragraphs: [
          "A substância activa é a semaglutida. Ambos são injectáveis semanais da mesma família GLP-1. Muita da conversa sobre náuseas, titulação e estilo de vida aplica-se aos dois — com nuances de dose.",
        ],
      },
      {
        heading: "O que não é igual",
        paragraphs: [
          "A indicação autorizada, o esquema de doses e o «pacote» comercial são diferentes. Ozempic aparece tipicamente no contexto de diabetes tipo 2; Wegovy no de gestão de peso, com critérios próprios. Usar um «só porque o outro falhou no stock» sem reavaliação clínica é má prática.",
        ],
        bullets: [
          "Não partilhe canetas nem «divida» doses entre pessoas.",
          "Confirme na receita e na Infomed o medicamento exacto.",
          "Comparticipação e PVP não são automaticamente iguais.",
        ],
      },
      {
        heading: "Em Portugal",
        paragraphs: [
          "Verifique preço e estatuto na Infomed e na farmácia. Para peso, Wegovy e outros têm sido frequentemente pagos a 100% pelo utente; Ozempic pode ter regras distintas em diabetes. O ticket e a receita mandam.",
        ],
      },
    ],
    whenToCall: [
      "A farmácia propõe «trocar» Ozempic por Wegovy (ou o inverso) sem o médico.",
      "Está a usar um off-label e não tem plano de follow-up.",
    ],
    related: [
      {
        href: "/medicamentos/ozempic/",
        label: "Ficha Ozempic",
        blurb: "Diabetes tipo 2.",
      },
      {
        href: "/medicamentos/wegovy/",
        label: "Ficha Wegovy",
        blurb: "Gestão de peso.",
      },
      {
        href: "/precos/",
        label: "Preços",
        blurb: "Faixas em Portugal.",
      },
    ],
  },
  {
    slug: "stock-farmacia",
    title: "Quando a farmácia não tem stock",
    lede:
      "Falta de canetas é stress real. Há caminhos seguros — e atalhos que parecem práticos e são perigosos.",
    summary:
      "O que fazer se Mounjaro, Ozempic ou Wegovy faltarem na farmácia: encomenda legal, alternativas clínicas e sinais de alerta online.",
    eyebrow: "Na prática",
    readMinutes: 5,
    publishedAt: "2026-09-14",
    illustration: {
      brandName: "Ozempic",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "ozempic",
    },
    sections: [
      {
        heading: "Primeiro: o caminho legal",
        paragraphs: [
          "Peça à farmácia para encomendar e pergunte prazos. Experimente outra farmácia da rede ou do bairro — stock não é uniforme. Leve a receita válida. Se a espera for longa, contacte quem prescreveu: pode haver plano B clínico (outra dose, outro fármaco da classe, ou pausa supervisionada).",
        ],
      },
      {
        heading: "O que não fazer",
        paragraphs: [
          "Não compre canetas «mais baratas» sem farmácia identificada. Não peça emprestado o medicamento do vizinho. Não suba a dose «para render mais tempo». Não mude de marca só porque um anúncio promete entrega em 24 h.",
        ],
        bullets: [
          "Sem receita / receita por mensagem → red flag.",
          "Preço muito abaixo do PVP habitual → red flag.",
          "Remetente sem cold chain → red flag.",
          "Venda no mesmo sítio da «consulta» de 5 minutos → red flag.",
        ],
      },
      {
        heading: "Fale com o médico cedo",
        paragraphs: [
          "Em diabetes, falhas de tratamento importam. Em gestão de peso, parar de súbito também tem consequências. Uma mensagem clara («não há stock há X dias») permite ajustar o plano — melhor do que improvisar sozinho.",
        ],
      },
    ],
    whenToCall: [
      "É diabético e ficou sem medicação.",
      "Só encontra oferta online duvidosa e está sob pressão.",
    ],
    related: [
      {
        href: "/onde-comprar/",
        label: "Onde comprar",
        blurb: "Sinais de alerta.",
      },
      {
        href: "/precos/",
        label: "Preços",
        blurb: "Ordens de grandeza PVP.",
      },
      {
        href: "/medicos/",
        label: "Médicos",
        blurb: "Quem pode ajustar o plano.",
      },
    ],
  },
  {
    slug: "se-eu-parar",
    title: "Se eu parar o medicamento: o que esperar",
    lede:
      "O efeito não fica «gravado» para sempre. Perceber o que costuma acontecer ao parar ajuda a planear com o médico — não a improvisar sozinho.",
    summary:
      "O que acontece se parar Mounjaro, Ozempic, Wegovy ou outro GLP-1: fome, peso, açúcar, e porque a pausa merece conversa clínica.",
    eyebrow: "Na prática",
    readMinutes: 6,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Mounjaro",
      substance: "tirzepatida",
      mechanism: "gip-glp1",
      slug: "mounjaro",
    },
    sections: [
      {
        heading: "O medicamento não é um interruptor permanente",
        paragraphs: [
          "Enquanto usa a caneta ou o comprimido, a saciedade e o esvaziamento gástrico mudam. Quando para, esses efeitos diminuem. Em muitos estudos, parte do peso e do controlo glicémico regride se nada mais mudar — alimentação, músculo, sono, outros fármacos.",
          "Isso não é «falha de carácter». É farmacologia. Por isso o plano de fundo (proteína, força, acompanhamento) importa tanto quanto a dose.",
        ],
      },
      {
        heading: "Porque as pessoas param",
        paragraphs: [
          "Stock, preço, efeitos adversos, gravidez, cirurgia, viagem longa, ou decisão partilhada com o médico. Cada motivo pede um caminho diferente — não o mesmo conselho de grupo online.",
        ],
        bullets: [
          "Falta de stock → ver artigo sobre farmácia e falar cedo com quem prescreve.",
          "Náuseas intensas → pode ser ajuste de dose ou pausa supervisionada, não «aguentar calado».",
          "Desejo de engravidar → estes fármacos em geral não se usam na gravidez; planeie com o médico.",
          "Custo → conversa de comparticipação e alternativas, não sites duvidosos.",
        ],
      },
      {
        heading: "O que planear antes de parar",
        paragraphs: [
          "Não invente uma «descontinuação» com doses à la carte. Pergunte: preciso de descer a dose? Que sinais vigiar (açúcar, pressão, humor, fome rebound)? Que reforço alimentar e de treino faz sentido nas semanas seguintes? Em diabetes, parar sem rede é especialmente arriscado.",
        ],
      },
    ],
    whenToCall: [
      "É diabético e ficou sem medicação ou parou por conta própria.",
      "Sintomas novos intensos depois de interromper (desidratação, hiperglicemia, vómitos).",
      "Pensamentos de restringir comida de forma extrema para «segurar» o peso.",
    ],
    related: [
      {
        href: "/artigos/stock-farmacia/",
        label: "Stock na farmácia",
        blurb: "Quando a falta força a pausa.",
      },
      {
        href: "/artigos/proteina-e-musculo/",
        label: "Proteína e músculo",
        blurb: "O que sustenta o progresso.",
      },
      {
        href: "/perguntas/#paragem",
        label: "FAQ: se eu parar",
        blurb: "Resposta curta.",
      },
    ],
  },
  {
    slug: "rybelsus-vs-ozempic",
    title: "Rybelsus vs Ozempic: mesma substância, rotinas diferentes",
    lede:
      "Ambos são semaglutida. Um é comprimido diário; o outro é caneta semanal. A pergunta útil não é «qual é o mais forte» — é «qual consigo cumprir com segurança».",
    summary:
      "Diferenças entre Rybelsus e Ozempic em Portugal: via oral vs injectável, regras de toma, indicações típicas e o que confirmar na Infomed.",
    eyebrow: "Comparar",
    readMinutes: 6,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Rybelsus",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "rybelsus",
    },
    sections: [
      {
        heading: "O que partilham",
        paragraphs: [
          "A substância activa é semaglutida (Novo Nordisk). Ambos actuam sobretudo como agonistas de GLP-1. Em Portugal, confirme sempre autorização, PVP e estatuto na Infomed — este guia não substitui a bula da embalagem que comprou.",
        ],
      },
      {
        heading: "O que muda de verdade",
        paragraphs: [
          "Ozempic é injectável semanal; Rybelsus é comprimido diário com regras apertadas de jejum, água e espera antes de comer ou outros fármacos. Falhar a rotina oral pode reduzir o efeito sem a pessoa perceber. A caneta pede técnica e frio; o comprimido pede disciplina matinal.",
        ],
        bullets: [
          "Indicações e doses não são intercambiáveis «à vontade».",
          "Trocar um pelo outro só com indicação médica.",
          "Se o jejum matinal for impossível, diga — pode haver alternativa injectável mais simples para si.",
          "Preço e comparticipação podem diferir: ver página de preços e Infomed.",
        ],
      },
      {
        heading: "Como decidir na consulta",
        paragraphs: [
          "Leve o diagnóstico (diabetes tipo 2? outras metas?), a lista de comprimidos da manhã e a honestidade sobre adesão. «Rybelsus em Portugal» aprofunda o contexto local; a ficha de cada medicamento resume a substância e a via.",
        ],
      },
    ],
    whenToCall: [
      "Dúvida sobre toma falhada de Rybelsus com outros antidiabéticos.",
      "Efeitos digestivos que impedem comer ou beber.",
    ],
    related: [
      {
        href: "/artigos/rybelsus-portugal/",
        label: "Rybelsus em Portugal",
        blurb: "Contexto local e rotina.",
      },
      {
        href: "/medicamentos/rybelsus/",
        label: "Ficha Rybelsus",
        blurb: "Semaglutida oral.",
      },
      {
        href: "/medicamentos/ozempic/",
        label: "Ficha Ozempic",
        blurb: "Semaglutida semanal.",
      },
    ],
  },
  {
    slug: "mounjaro-vs-wegovy",
    title: "Mounjaro vs Wegovy: o que muda de verdade",
    lede:
      "Tirzepatida versus semaglutida para peso. Empresas, mecanismos e critérios são diferentes — comparações de redes sociais não são a sua bula.",
    summary:
      "Mounjaro (tirzepatida) e Wegovy (semaglutida): diferenças de mecanismo, indicação típica de peso e erros comuns ao comparar na internet.",
    eyebrow: "Comparar",
    readMinutes: 6,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Wegovy",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "wegovy",
    },
    sections: [
      {
        heading: "Substâncias diferentes",
        paragraphs: [
          "Wegovy é semaglutida (agonista de GLP-1), tipicamente posicionado para gestão de peso. Mounjaro é tirzepatida (agonista duplo GIP + GLP-1); a indicação exacta (diabetes, peso, ou ambos) depende do país e da bula local. Não são a mesma caneta nem a mesma evidência linha a linha.",
        ],
      },
      {
        heading: "O que a internet confunde",
        paragraphs: [
          "«Qual emagrece mais» em vídeos sem contexto clínico ignora contraindicações, outros fármacos, tolerância digestiva e acesso (stock, preço, comparticipação). Em Portugal, confirme Infomed e fale com endocrinologia ou consulta de obesidade — não com o anúncio.",
        ],
        bullets: [
          "Ozempic ≠ Wegovy (mesma substância, indicações/doses diferentes).",
          "Mounjaro ≠ Ozempic (substâncias diferentes).",
          "Falta de stock não autoriza compra online duvidosa.",
        ],
      },
      {
        heading: "Perguntas úteis para a consulta",
        paragraphs: [
          "Qual é o objectivo (açúcar, peso, ambos)? Que critérios oficiais se aplicam? Que efeitos já tive noutro da classe? Consigo manter o custo e a logística do frio? A resposta certa é a que consegue cumprir com segurança.",
        ],
      },
    ],
    whenToCall: [
      "Efeitos graves ou dúvida se a caneta que tem corresponde à receita.",
    ],
    related: [
      {
        href: "/artigos/mounjaro-vs-ozempic/",
        label: "Mounjaro vs Ozempic",
        blurb: "Outra comparação frequente.",
      },
      {
        href: "/medicamentos/mounjaro/",
        label: "Ficha Mounjaro",
        blurb: "Tirzepatida.",
      },
      {
        href: "/medicamentos/wegovy/",
        label: "Ficha Wegovy",
        blurb: "Semaglutida para peso.",
      },
    ],
  },
  {
    slug: "comparticipacao-sns",
    title: "Comparticipação e SNS: o que verificar",
    lede:
      "Ter receita não basta. Em Portugal, o que paga depende do medicamento, da indicação e das regras em vigor — não do que o vizinho pagou no mês passado.",
    summary:
      "Como pensar comparticipação SNS e PVP em agonistas GLP-1: Infomed, farmácia, indicação (diabetes vs peso) e perguntas para o médico.",
    eyebrow: "Portugal",
    readMinutes: 6,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Ozempic",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "ozempic",
    },
    sections: [
      {
        heading: "PVP ≠ o que sai do bolso",
        paragraphs: [
          "O PVP (preço de venda ao público) é a referência no ticket. A comparticipação — se existir — depende de regras oficiais e da indicação. Para vários agonistas usados em obesidade/peso, o utente tem pagado 100% em muitos cenários; em diabetes tipo 2 pode haver critérios diferentes. Confirme Infomed e o talão da farmácia.",
        ],
      },
      {
        heading: "Checklist prática",
        paragraphs: ["Antes de assumir um valor que viu num grupo:"],
        bullets: [
          "Qual é o medicamento e a dose exactos na receita?",
          "A indicação é diabetes, peso, ou ambos?",
          "O que diz a Infomed hoje para esse código?",
          "Há stock? Encomenda? Prazo?",
          "O médico conhece alternativas se o custo for bloqueio?",
        ],
      },
      {
        heading: "O que não resolver o preço",
        paragraphs: [
          "Sites sem farmácia identificada, canetas «da mala» e partilha de medicação são risco clínico e legal. Se o dinheiro é o obstáculo, isso é assunto para a consulta e para informação oficial — não para um anúncio.",
        ],
      },
    ],
    whenToCall: [
      "Discrepância grande entre o que lhe disseram e o ticket da farmácia.",
      "Pressão para comprar online «mais barato» sem receita clara.",
    ],
    related: [
      {
        href: "/precos/",
        label: "Preços em Portugal",
        blurb: "Ordens de grandeza.",
      },
      {
        href: "/fontes/",
        label: "Fontes",
        blurb: "Infomed e INFARMED.",
      },
      {
        href: "/artigos/stock-farmacia/",
        label: "Stock",
        blurb: "Quando não há medicamento.",
      },
    ],
  },
  {
    slug: "dor-abdominal-vesicula",
    title: "Dor de barriga forte: quando não é «só náusea»",
    lede:
      "Náuseas ligeiras são comuns ao subir a dose. Dor intensa e persistente — com ou sem vómitos — já é outro capítulo. Não diagnostique pela internet.",
    summary:
      "Sinais de alarme digestivos com GLP-1: vesícula, pancreatite e quando contactar SNS 24 ou urgência — em linguagem clara.",
    eyebrow: "Segurança",
    readMinutes: 5,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Wegovy",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "wegovy",
    },
    sections: [
      {
        heading: "O que muitas vezes é adaptação",
        paragraphs: [
          "Enfartamento, náusea leve, alterações do trânsito intestinal ao subir a dose. Estratégias gerais (refeições mais pequenas, menos gordura, hidratação) ajudam muita gente — sempre alinhadas com o médico.",
        ],
      },
      {
        heading: "Sinais que pedem avaliação urgente",
        paragraphs: [
          "Dor intensa e persistente na barriga (especialmente em cima à direita), vómitos que impedem beber, febre, amarelar da pele/olhos, ou dor que irradia para as costas. Estes padrões entram na conversa de vesícula, pancreatite e outras causas — só a equipa de saúde avalia o seu caso.",
        ],
        bullets: [
          "Não «aguente até à próxima dose» se a dor for forte.",
          "Não suba a dose para «compensar» dias maus.",
          "Diga todos os medicamentos e o dia da última injectável/comprimido.",
        ],
      },
      {
        heading: "O que este site não faz",
        paragraphs: [
          "Não diz se «é vesícula» ou «é pancreatite». Diz: há um limiar em que deixar de ser «efeito chato» e passar a ser motivo de contacto com SNS 24 / urgência / médico. O artigo de náuseas cobre o dia a dia; este cobre o alarme.",
        ],
      },
    ],
    whenToCall: [
      "Dor abdominal intensa ou que não passa.",
      "Vómitos com desidratação ou incapacidade de beber.",
      "Febre, icterícia, ou dor com irradiação para as costas.",
    ],
    related: [
      {
        href: "/artigos/nauseas-e-estomago/",
        label: "Náuseas no dia a dia",
        blurb: "Adaptação vs alarme.",
      },
      {
        href: "/perguntas/#quando-ligar",
        label: "FAQ: quando ligar",
        blurb: "Resposta curta.",
      },
      {
        href: "/fontes/",
        label: "Fontes",
        blurb: "SNS 24 e reguladores.",
      },
    ],
  },
  {
    slug: "hipoglicemia-quando-preocupar",
    title: "Hipoglicemia com GLP-1: quando preocupar",
    lede:
      "Soinhos, estes fármacos sozinhos raramente causam hipoglicemia grave. Com insulina ou certos comprimidos para o açúcar, o risco sobe — e a conversa com o médico muda.",
    summary:
      "Sinais de hipoglicemia, quem está mais em risco com agonistas GLP-1, e o que não improvisar sem orientação clínica.",
    eyebrow: "Segurança",
    readMinutes: 5,
    publishedAt: "2026-09-17",
    illustration: {
      brandName: "Ozempic",
      substance: "semaglutida",
      mechanism: "glp1",
      slug: "ozempic",
    },
    sections: [
      {
        heading: "Quem precisa de atenção redobrada",
        paragraphs: [
          "Pessoas com diabetes tipo 2 que usam insulina ou sulfonilureias (e classes semelhantes). O médico pode ajustar doses desses outros fármacos quando se inicia ou sobe um agonista de GLP-1. Não corte insulina «porque leu que emagrece».",
        ],
      },
      {
        heading: "Sinais a reconhecer",
        paragraphs: [
          "Tremores, suores, fome intensa, confusão, palpitações, visão turva — o padrão exacto varia. Se já tem glucómetro ou sensor, use o plano que o médico definiu. Se não tem diabetes e sente sintomas estranhos, isso também merece avaliação: não assuma que «é o GLP-1».",
        ],
        bullets: [
          "Leve a lista completa de antidiabéticos à consulta.",
          "Pergunte o que fazer se o açúcar baixar de noite ou após exercício.",
          "Não invente «pausas» de insulina por conta própria.",
        ],
      },
      {
        heading: "Urgência",
        paragraphs: [
          "Confusão grave, desmaio, convulsões ou incapacidade de engolir açúcar rápido: contacte emergência / SNS 24 conforme a gravidade. Este site não substitui o plano individual de hipoglicemia.",
        ],
      },
    ],
    whenToCall: [
      "Sintomas de hipoglicemia grave ou recorrente.",
      "Usa insulina/sulfonilureia e vai iniciar ou subir um GLP-1.",
    ],
    related: [
      {
        href: "/medicos/#checklist",
        label: "Checklist da consulta",
        blurb: "O que levar.",
      },
      {
        href: "/perguntas/#quando-ligar",
        label: "FAQ: quando ligar",
        blurb: "Alarmes gerais.",
      },
      {
        href: "/artigos/dor-abdominal-vesicula/",
        label: "Dor abdominal",
        blurb: "Outro alarme digestivo.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesSorted() {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
