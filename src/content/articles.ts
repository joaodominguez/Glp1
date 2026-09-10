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
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesSorted() {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
