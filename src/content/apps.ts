export type AppPlatform = "ios" | "android" | "ambos";

export type AppCategory =
  | "glp1-tracker"
  | "peso"
  | "nutricao"
  | "diabetes"
  | "habitos";

export type RecommendedApp = {
  id: string;
  name: string;
  category: AppCategory;
  categoryLabel: string;
  platforms: AppPlatform;
  summary: string;
  goodFor: string[];
  watchOut: string[];
  href?: string;
  hrefIos?: string;
  hrefAndroid?: string;
};

export const appCategories: { id: AppCategory; label: string; blurb: string }[] = [
  {
    id: "glp1-tracker",
    label: "Tracker de dose / caneta",
    blurb: "Lembretes semanais, histórico de injeções, locais e efeitos.",
  },
  {
    id: "peso",
    label: "Peso e tendência",
    blurb: "Curvas de peso sem obsessão diária — útil para levar à consulta.",
  },
  {
    id: "nutricao",
    label: "Proteína, água e refeições",
    blurb: "Com menos fome, o risco é comer de menos de forma desequilibrada.",
  },
  {
    id: "diabetes",
    label: "Glicemia (se aplicável)",
    blurb: "Para quem tem diabetes tipo 2 e já mede açúcar com orientação médica.",
  },
  {
    id: "habitos",
    label: "Hábitos e movimento",
    blurb: "Passos, sono e rotina — o medicamento não substitui isto.",
  },
];

/**
 * Orientation list — not paid placement, not a medical device endorsement.
 * Links point to public store/marketing pages; availability varies by country.
 */
export const recommendedApps: RecommendedApp[] = [
  {
    id: "shotsy",
    name: "Shotsy",
    category: "glp1-tracker",
    categoryLabel: "Tracker GLP-1",
    platforms: "ambos",
    summary:
      "App focado em agonistas GLP-1: doses, lembretes, locais de injeção, peso e efeitos. Muito citado por quem usa caneta semanal.",
    goodFor: [
      "Registar a dose no dia certo",
      "Histórico para mostrar ao médico",
      "Acompanhar náuseas e outros efeitos ao longo das semanas",
    ],
    watchOut: [
      "Não é dispositivo médico nem substitui a bula",
      "Gráficos de «nível estimado» do fármaco são modelos — não análises de sangue",
      "Reveja permissões de dados e o que fica na cloud",
    ],
    href: "https://shotsyapp.com/",
    hrefIos: "https://apps.apple.com/app/glp1-tracker-shotsy/id6499510249",
    hrefAndroid: "https://play.google.com/store/apps/details?id=com.shotsy.app",
  },
  {
    id: "titra",
    name: "Titra",
    category: "glp1-tracker",
    categoryLabel: "Tracker GLP-1",
    platforms: "ambos",
    summary:
      "Tracker de medicação GLP-1 com histórico, rotação de locais e relatórios que muita gente exporta para a consulta.",
    goodFor: [
      "Várias marcas (Ozempic, Wegovy, Mounjaro…)",
      "Notas de efeitos secundários",
      "PDF / resumo para o profissional de saúde",
    ],
    watchOut: [
      "Qualquer «nível sérico estimado» é aproximação educativa",
      "Não copie a dose de outra pessoa a partir da app",
    ],
    href: "https://titrapp.com/",
  },
  {
    id: "pep",
    name: "Pep (Rastreador GLP-1)",
    category: "glp1-tracker",
    categoryLabel: "Tracker GLP-1",
    platforms: "ios",
    summary:
      "Rastreador com lembretes, peso e nutrição básica; interface em português na App Store PT.",
    goodFor: [
      "Quem prefere app em português",
      "Lembretes de injeção / comprimido",
      "Fotos e medidas de progresso (se quiser)",
    ],
    watchOut: [
      "Pode ter subscrição para funções extra",
      "Scanner de comida com IA é estimativa — não verdade laboratorial",
    ],
    hrefIos: "https://apps.apple.com/pt/app/rastreador-glp-1-pep/id6504788281",
  },
  {
    id: "apple-health-google-fit",
    name: "Apple Saúde / Health Connect (Google)",
    category: "peso",
    categoryLabel: "Peso e saúde",
    platforms: "ambos",
    summary:
      "Hub nativo do telemóvel: peso, passos, sono. Bom «armazém» se várias apps sincronizarem para o mesmo sítio.",
    goodFor: [
      "Uma fonte única para o médico ver tendências",
      "Menos folhas de Excel",
      "Controlo de que apps têm acesso aos dados",
    ],
    watchOut: [
      "Não registra doses de Mounjaro/Ozempic sozinho — combine com um tracker",
      "Pesar todos os dias pode aumentar ansiedade; 1–2×/semana basta para muita gente",
    ],
  },
  {
    id: "myfitnesspal",
    name: "MyFitnessPal",
    category: "nutricao",
    categoryLabel: "Nutrição",
    platforms: "ambos",
    summary:
      "Diário alimentar clássico. Com GLP-1, o foco útil costuma ser proteína e regularidade — não só «calorias baixas».",
    goodFor: [
      "Ver se está a comer proteína de mais a menos",
      "Água e refeições quando o apetite some",
      "Partilhar padrões (não obsessão) na consulta de nutrição",
    ],
    watchOut: [
      "Bases de dados de comida têm erros",
      "Metas agressivas de défice sem nutricionista podem ser nocivas",
    ],
    href: "https://www.myfitnesspal.com/",
  },
  {
    id: "cronometer",
    name: "Cronometer",
    category: "nutricao",
    categoryLabel: "Nutrição",
    platforms: "ambos",
    summary:
      "Tracking nutricional mais detalhado (micronutrientes). Útil se o médico/nutricionista pediu atenção a proteína e vitaminas.",
    goodFor: [
      "Quem já tracka comida com rigor",
      "Relatórios mais granulares que apps «só calorias»",
    ],
    watchOut: [
      "Pode ser excessivo no início do tratamento",
      "Não substitui análises clínicas",
    ],
    href: "https://cronometer.com/",
  },
  {
    id: "glucose-buddy-librelink",
    name: "Apps do seu sensor / glicosímetro (ex.: LibreLink)",
    category: "diabetes",
    categoryLabel: "Diabetes",
    platforms: "ambos",
    summary:
      "Se tem diabetes tipo 2 e usa sensor ou glicosímetro, use a app oficial do dispositivo — não uma app genérica de «emagrecimento».",
    goodFor: [
      "Registos que o endocrinologista já conhece",
      "Alertas de hipoglicemia quando aplicável",
    ],
    watchOut: [
      "Só sob indicação e educação terapêutica",
      "Misturar vários trackers de glicemia cria confusão",
    ],
  },
  {
    id: "streaks-habit",
    name: "Streaks / Habit Tracker (qualquer simples)",
    category: "habitos",
    categoryLabel: "Hábitos",
    platforms: "ambos",
    summary:
      "App mínima para «dia da caneta», água, caminhada e proteína — sem gamificação tóxica.",
    goodFor: [
      "Lembrete do dia semanal da injeção",
      "Hábitos que o médico pediu para manter",
    ],
    watchOut: [
      "Não precisa de cinco apps: escolha uma e mantenha",
    ],
  },
];

export const appSelectionCriteria = [
  "Serve para o que precisa (dose, peso, comida) — não para tudo ao mesmo tempo.",
  "Os dados ficam no telemóvel ou numa cloud com política clara; evite apps que pedem contactos e fotos sem necessidade.",
  "Não promete «emagreça X kg» nem vende canetas dentro da app.",
  "Permite exportar ou mostrar o histórico na consulta.",
  "Funciona no seu telemóvel (iOS/Android) sem forçar subscrição opaca no primeiro minuto.",
];

export const appRedFlags = [
  {
    title: "App que vende o medicamento",
    detail: "Tracker misturado com checkout de caneta ou «kit completo» — conflituoso e arriscado.",
  },
  {
    title: "Conselhos de dose automática",
    detail: "Se a app «sobe a dose» sozinha ou copia a do vizinho, desinstale.",
  },
  {
    title: "Comunidade tóxica embutida",
    detail: "Fóruns dentro da app a pressionar para doses máximas ou compra irregular.",
  },
  {
    title: "Permissões absurdas",
    detail: "Acesso a microfone, contactos e galeria sem relação com peso ou dose.",
  },
];

export const appsPageDisclaimer =
  "Esta lista é orientativa e educativa. O Guia GLP-1 não tem parcerias pagas com estas apps, não recebe comissão por downloads e não certifica qualidade clínica. Nenhuma app substitui bula, médico ou farmácia.";
