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
  title: "Покупка игр — без лишних вопросов.",
  summary:
    "Система инструкционных и рекламных роликов для сервиса, который помогает покупать валюту и игры в заблокированном PS Store.",
  metaDescription:
    "Reloc — кейс Артёма Бажутина: инструкционные видео, рекламные креативы, motion и 3D для Telegram-приложения.",
  period: "Фриланс / 2024—2026",
  format: "Motion, 3D, монтаж",
  challenge:
    "У продукта непростой пользовательский сценарий: человеку нужно быстро понять, как купить валюту или игру и не потеряться между этапами. При этом рекламные ролики должны были работать в быстром потоке Telegram-каналов.",
  solution:
    "Я разделил коммуникацию на два темпа. Инструкции спокойно ведут пользователя от шага к шагу, а рекламные креативы работают через короткий хук, выразительную 3D-сцену и быстрое раскрытие пользы сервиса.",
  role: [
    "Концепция и сценарная структура",
    "Motion-дизайн и анимация",
    "3D-графика",
    "Монтаж и адаптация под Telegram",
  ],
  deliverables: [
    {
      number: "01",
      title: "Инструкционные ролики",
      text: "Пошаговая подача действий, крупные интерфейсные акценты и ритм, в котором пользователь успевает считать каждый этап.",
    },
    {
      number: "02",
      title: "Рекламные креативы",
      text: "Короткие ролики для Telegram-посевов: быстрый вход, понятный оффер и визуальный образ, который удерживает внимание.",
    },
    {
      number: "03",
      title: "3D-графика",
      text: "Объёмные объекты и сцены, которые переводят цифровую услугу в более материальный, заметный визуальный язык.",
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
      title: "Navigation",
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
        "Два коротких рекламных ролика, построенных вокруг объёмной сцены и продуктового образа.",
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
  eyebrow: "YouTube / Motion system & 3D",
  title: "Один канал. Узнаваемая система движения.",
  summary:
    "3D-ролики и комплект моушен-графики для YouTube: от титров и перебивок до заставки и финала каждого выпуска.",
  metaDescription:
    "FunPay — кейс Артёма Бажутина: 3D-ролики, титры, заставки, перебивки и единая motion-система для YouTube.",
  period: "Фриланс / 2024—2026",
  format: "YouTube, Motion, 3D",
  challenge:
    "На канале выходят разные форматы и рубрики. Им нужен был общий визуальный язык, который собирает выпуски в одну систему, но не мешает содержанию и не перегружает монтаж.",
  solution:
    "Я собрал набор повторяемых элементов: вступление, окончание, титры и рубрикаторы. В основе — короткая, функциональная анимация и 3D-акценты, которые помогают зрителю считывать структуру выпуска.",
  role: [
    "Motion-концепция",
    "3D-ролики",
    "Титры и экранная графика",
    "Заставка, окончание и перебивки",
  ],
  deliverables: [
    {
      number: "01",
      title: "Intro & outro",
      text: "Короткие заставка и финал, которые фиксируют бренд в начале и аккуратно закрывают каждый выпуск.",
    },
    {
      number: "02",
      title: "Титры",
      text: "Функциональная экранная графика для имён, пояснений и смысловых акцентов без конкуренции с основным видео.",
    },
    {
      number: "03",
      title: "Перебивки рубрик",
      text: "Модульные переходы с названиями рубрик, благодаря которым зритель легче ориентируется внутри ролика.",
    },
  ],
  videoGroups: [
    {
      number: "01",
      title: "YouTube motion system",
      description:
        "Заставка, финал, аватар и короткие рекламные вставки собраны в единую систему для канала.",
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
            "Анимированная рекламная вставка для роликов с говорящей головой — для YouTube и TikTok.",
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
