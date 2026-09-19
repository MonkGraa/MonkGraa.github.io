export type CaseVideo = {
  id: string;
  title: string;
  caption: string;
  ratio: "landscape" | "square" | "portrait";
};

export type CaseVideoGroup = {
  number: string;
  title: string;
  description: string;
  layout?: "featured" | "columns-3";
  videos: CaseVideo[];
};

export type PortfolioCase = {
  number: string;
  slug: "reloc" | "funpay";
  client: string;
  eyebrow: string;
  title: string;
  summary: string;
  metaDescription: string;
  coverImage: string;
  coverAlt: string;
  period: string;
  format: string;
  challenge: string;
  solution: string;
  role: string[];
  deliverables: Array<{
    number: string;
    title: string;
    text: string;
  }>;
  videoGroups: CaseVideoGroup[];
  nextSlug: "reloc" | "funpay";
  nextClient: string;
};

export const relocCase: PortfolioCase = {
  number: "01",
  slug: "reloc",
  client: "Reloc",
  eyebrow: "Telegram-приложение / Motion & 3D",
  title: "Работа для Reloc",
  summary:
    "Инструкции и рекламные ролики для сервиса, который помогает покупать валюту и игры в заблокированном PS Store.",
  metaDescription:
    "Reloc: кейс Артёма Бажутина: инструкционные видео, рекламные креативы, motion и 3D для Telegram-приложения.",
  coverImage: "/cases/reloc-cover.png",
  coverAlt: "Обложка кейса Reloc",
  period: "Фриланс / 2024—2026",
  format: "Motion, 3D, монтаж",
  challenge:
    "Нужны были пошаговые инструкции, по которым пользователь мог разобраться в сервисе. Реклама должна была привлекать внимание среди других публикаций в Telegram-каналах.",
  solution:
    "Для инструкций я выбрал спокойный темп, чтобы пользователь успевал следить за каждым шагом. Рекламу сделал быстрее: короткое начало привлекает внимание, затем 3D-сцена помогает показать, чем полезен сервис.",
  role: [
    "Motion-дизайн и анимация",
    "3D-графика",
    "Монтаж и адаптация под Telegram",
  ],
  deliverables: [
    {
      number: "01",
      title: "Инструкционные ролики",
      text: "Показываю действия по порядку и крупно выделяю нужные детали интерфейса. Темп оставляет время разобраться в каждом шаге.",
    },
    {
      number: "02",
      title: "Рекламные креативы",
      text: "Короткие ролики для размещения в Telegram-каналах. Сразу переходят к предложению, а графика помогает удержать внимание.",
    },
    {
      number: "03",
      title: "3D-графика",
      text: "3D-объекты и сцены помогают наглядно представить цифровую услугу и привлечь к ней внимание.",
    },
  ],
  videoGroups: [
    {
      number: "01",
      title: "Инструкции",
      description:
        "Три самостоятельных ролика, которые объясняют основной сценарий и работу Telegram-бота.",
      videos: [
        {
          id: "1219851137",
          title: "Instruction",
          caption: "Основная пошаговая инструкция",
          ratio: "landscape",
        },
        {
          id: "1219851124",
          title: "Reloc Bot",
          caption: "Короткая инструкция по боту Reloc",
          ratio: "square",
        },
        {
          id: "1219851056",
          title: "Telegram Bot",
          caption: "Сценарий работы внутри Telegram",
          ratio: "landscape",
        },
      ],
    },
    {
      number: "02",
      title: "Навигация",
      description:
        "Отдельные инструкции по навигации в сервисе для пользователей Safari, Chrome и Яндекс Браузера.",
      layout: "columns-3",
      videos: [
        {
          id: "1219851092",
          title: "Safari",
          caption: "Навигация для пользователей Safari",
          ratio: "landscape",
        },
        {
          id: "1219851060",
          title: "Chrome",
          caption: "Навигация для пользователей Chrome",
          ratio: "landscape",
        },
        {
          id: "1219851107",
          title: "Яндекс",
          caption: "Навигация для пользователей Яндекс Браузера",
          ratio: "landscape",
        },
      ],
    },
    {
      number: "03",
      title: "3D-публикации",
      description:
        "Два коротких рекламных ролика,\nпостроенные вокруг объёмной сцены и продуктового образа.",
      videos: [
        {
          id: "1219849796",
          title: "Reloc 3D",
          caption: "Основной 3D-креатив",
          ratio: "square",
        },
        {
          id: "1219850163",
          title: "Reloc Notification",
          caption: "3D-публикация с уведомлением",
          ratio: "square",
        },
      ],
    },
  ],
  nextSlug: "funpay",
  nextClient: "FunPay",
};

export const funpayCase: PortfolioCase = {
  number: "02",
  slug: "funpay",
  client: "FunPay",
  eyebrow: "YouTube / Motion system",
  title: "Работа для FunPay",
  summary:
    "Комплект моушен-графики для YouTube: от титров и перебивок до заставки и финала каждого выпуска.",
  metaDescription:
    "FunPay: кейс Артёма Бажутина: титры, заставки, перебивки и motion-графика для YouTube.",
  coverImage: "/cases/funpay-cover.png",
  coverAlt: "Обложка кейса FunPay",
  period: "Фриланс / 2024—2026",
  format: "YouTube, Motion",
  challenge:
    "На канале выходят разные форматы и рубрики. Нужно было оформить их в одном стиле, чтобы графика не отвлекала от содержания и не перегружала монтаж.",
  solution:
    "Я сделал вступление, окончание, титры и перебивки рубрик, которые можно использовать в разных выпусках. Для каждого элемента выбрал короткую анимацию.",
  role: [
    "Motion-концепция",
    "Титры и экранная графика",
    "Заставка, окончание и перебивки",
  ],
  deliverables: [
    {
      number: "01",
      title: "Intro & outro",
      text: "Короткая заставка представляет бренд в начале выпуска, а финальная анимация завершает ролик.",
    },
    {
      number: "02",
      title: "Титры",
      text: "Титры с именами и пояснениями выделяют важные моменты, не отвлекая от основного видео.",
    },
    {
      number: "03",
      title: "Перебивки рубрик",
      text: "Перебивки с названиями рубрик помогают зрителю следить за роликом. Их можно повторно использовать в других выпусках.",
    },
  ],
  videoGroups: [
    {
      number: "01",
      title: "YouTube motion system",
      description:
        "Заставка, финал, аватар и короткие рекламные вставки\nсобраны в единую систему для канала.",
      videos: [
        {
          id: "1219856666",
          title: "Funblog Opener",
          caption: "Открывающая заставка выпуска",
          ratio: "landscape",
        },
        {
          id: "1219857205",
          title: "Outro",
          caption: "Вертикальный финал ролика",
          ratio: "portrait",
        },
        {
          id: "1219856664",
          title: "FunPay Avatar",
          caption: "Анимация для аватара",
          ratio: "square",
        },
        {
          id: "1219856665",
          title: "Рекламная вставка 01",
          caption:
            "Анимированная рекламная вставка для роликов с говорящей головой для YouTube и TikTok.",
          ratio: "square",
        },
        {
          id: "1219856667",
          title: "Рекламная вставка 02",
          caption:
            "Второй вариант рекламной вставки для интеграций в ролики с говорящей головой.",
          ratio: "square",
        },
      ],
    },
  ],
  nextSlug: "reloc",
  nextClient: "Reloc",
};
