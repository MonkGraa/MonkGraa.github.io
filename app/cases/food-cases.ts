export const foodCases = {
  teremok: {
    name: ["Теремок", "Teremok"],
    title: ["Новости бренда", "Brand news"],
    summary: ["Анимационный ролик для «Теремка»: новость о 36 кондитерских в зимнем оформлении бренда.", "An animated film for Teremok, announcing 36 pastry shops with the brand’s winter graphics."],
    detail: ["Красный фон, снежинки и крупные цифры собирают короткое сообщение в вертикальный ролик. Текст появляется последовательно, а логотип остаётся частью композиции.", "A red background, snowflakes and large numbers carry a short announcement in a vertical format. Text appears in sequence, with the logo integrated into the composition."],
    tags: "Motion · Social · 9:16",
    width: 1080, height: 1920, next: "blackbox",
  },
  blackbox: {
    name: ["Blackbox", "Blackbox"],
    title: ["Эдамаме для Blackbox", "Edamame for Blackbox"],
    summary: ["Ролик об эдамаме для доставки суши Blackbox: анимация, типографика и яркие зелёные акценты на чёрном фоне.", "An edamame film for sushi delivery brand Blackbox, combining animation, typography and vivid green accents against black."],
    detail: ["Ролик знакомит зрителя с продуктом через короткие факты и меняющиеся сцены. Контрастная графика и анимированные объекты поддерживают фирменное оформление Blackbox.", "The film introduces the product through short facts and changing scenes. High-contrast graphics and animated objects carry Blackbox’s visual style."],
    tags: "Motion · Food · 9:16",
    width: 1080, height: 1920, next: "mekong",
  },
  mekong: {
    name: ["Mekong", "Mekong"],
    title: ["Анонс для ресторана Mekong", "An event promo for Mekong"],
    summary: ["Проморолик к 23 февраля для ресторана Mekong в Санкт-Петербурге. Анимированный коллаж с крупной датой и праздничным предложением.", "A February 23 promotional film for Mekong restaurant in Saint Petersburg. An animated collage highlights the date and special offer."],
    detail: ["Архитектура, персонаж и предметы складываются в многослойную композицию. Красная типографика выделяет дату и предложение на светлом фоне.", "Architecture, a character and objects form a layered composition. Red typography brings the date and offer forward against a light background."],
    tags: "Motion · Promo · 4:5",
    width: 1080, height: 1350, next: "alanbase",
  },
} as const;
export type FoodCaseSlug = keyof typeof foodCases;
