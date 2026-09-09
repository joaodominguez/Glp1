export type ChecklistItem = {
  id: string;
  label: string;
  hint?: string;
};

export type ChecklistSection = {
  id: string;
  title: string;
  intro: string;
  items: ChecklistItem[];
};

export const checklistSections: ChecklistSection[] = [
  {
    id: "antes",
    title: "Antes de marcar ou ir",
    intro:
      "Uma consulta rende mais quando a pessoa chega com factos, não só com ansiedade ou com o que leu num grupo.",
    items: [
      {
        id: "motivo",
        label: "Escrevi em duas frases o motivo da consulta",
        hint: "Por exemplo: diabetes tipo 2 com HbA1c alta; ou excesso de peso com outra doença; ou dúvida sobre continuar.",
      },
      {
        id: "lista-meds",
        label: "Levo a lista de todos os medicamentos e suplementos",
        hint: "Inclua insulina, comprimidos para o açúcar, pílula, antidepressivos e «naturais».",
      },
      {
        id: "alergias",
        label: "Anoto alergias e reações graves anteriores",
      },
      {
        id: "analises",
        label: "Levo análises recentes, se as tiver",
        hint: "HbA1c, função renal, fígado, lípidos, função da tiroide — o que existir.",
      },
      {
        id: "peso",
        label: "Sei o peso, a altura e (se souber) o IMC atuais",
      },
    ],
  },
  {
    id: "historia",
    title: "História que o profissional precisa de ouvir",
    intro:
      "Coisas que parecem «de família» ou «já passou» mudam a decisão. Vale a pena dizer mesmo que ninguém tenha perguntado.",
    items: [
      {
        id: "tiroide-familia",
        label: "Sei se há carcinoma medular da tiroide ou MEN2 na família",
        hint: "Se não souber, diga isso mesmo: «não sei».",
      },
      {
        id: "pancreas",
        label: "Menciono pancreatite, pedras na vesícula ou cirurgias digestivas",
      },
      {
        id: "estomago",
        label: "Menciono refluxo grave, vómitos frequentes ou gastroparesia",
      },
      {
        id: "olhos-rins",
        label: "Menciono problemas nos olhos (retinopatia) ou nos rins",
      },
      {
        id: "gravidez",
        label: "Falo de gravidez, desejo de engravidar ou amamentação, se aplicar",
      },
      {
        id: "saude-mental",
        label: "Se fizer sentido, falo de relação com a comida ou de saúde mental",
        hint: "Não é fraqueza. Ajuda a não tratar só o número da balança.",
      },
    ],
  },
  {
    id: "perguntas",
    title: "Perguntas úteis para fazer",
    intro:
      "Se a consulta for curta, escolha três. É melhor sair com três respostas claras do que com dez meias ideias.",
    items: [
      {
        id: "indicacao",
        label: "Este medicamento está indicado para o meu caso neste país?",
      },
      {
        id: "alternativas",
        label: "Que alternativas existem — incluindo não começar agora?",
      },
      {
        id: "dose-plano",
        label: "Qual é o plano de dose e quando voltamos a falar?",
      },
      {
        id: "outros-meds",
        label: "Preciso de mudar insulina, comprimidos ou a pílula?",
      },
      {
        id: "sinais",
        label: "Que sintomas merecem mensagem, consulta extra ou urgência?",
      },
      {
        id: "nutricao",
        label: "Quem me ajuda com alimentação e proteína / músculo?",
      },
      {
        id: "custo",
        label: "Quanto custa, há comparticipação, e o que acontece se faltar stock?",
      },
      {
        id: "paragem",
        label: "Se eu parar, o que devemos esperar e como nos preparamos?",
      },
    ],
  },
  {
    id: "pratico",
    title: "Lado prático",
    intro: "A caneta só funciona se a pessoa souber usá-la, guardá-la e obtê-la de forma legal.",
    items: [
      {
        id: "demonstracao",
        label: "Peço uma demonstração da caneta na primeira prescrição",
      },
      {
        id: "farmacia",
        label: "Confirmo farmácia, receita e regras de frio",
      },
      {
        id: "dia-semana",
        label: "Escolho um dia fixo da semana que eu consiga manter",
      },
      {
        id: "contacto",
        label: "Sei a quem ligar se houver um efeito que me assuste",
      },
    ],
  },
];

export const CHECKLIST_STORAGE_KEY = "guia-glp1-checklist-v1";
