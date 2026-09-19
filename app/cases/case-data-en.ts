import { funpayCase, relocCase, type PortfolioCase } from "./case-data";

export const relocCaseEn: PortfolioCase = {
  ...relocCase,
  eyebrow: "Telegram app / Motion & 3D",
  title: "Work for Reloc",
  summary:
    "Instructional and advertising videos for a service that helps users buy currency and games in the restricted PlayStation Store.",
  metaDescription:
    "Reloc: a case study by Artem Bazhutin: instructional videos, advertising, motion and 3D for a Telegram app.",
  coverAlt: "Reloc case study cover",
  period: "Freelance / 2024—2026",
  format: "Motion, 3D, editing",
  challenge:
    "The service needed step-by-step instructions that users could follow. The ads also needed to catch attention among other posts in Telegram channels.",
  solution:
    "I gave the instructions a slower pace so users could follow each step. The ads move faster, with a short opening to catch attention and a 3D scene to explain the service.",
  role: [
    "Motion design and animation",
    "3D graphics",
    "Editing and adaptation for Telegram",
  ],
  deliverables: [
    {
      number: "01",
      title: "Instructional videos",
      text: "The videos show each action in order, with interface details large enough to see and time to follow each step.",
    },
    {
      number: "02",
      title: "Advertising videos",
      text: "Short videos for Telegram channels that get straight to the offer and use recognisable graphics.",
    },
    {
      number: "03",
      title: "3D graphics",
      text: "3D objects and scenes help viewers picture what the digital service does.",
    },
  ],
  videoGroups: [
    {
      ...relocCase.videoGroups[0],
      title: "Instructions",
      description: "Three standalone videos explaining the main steps and how the Telegram bot works.",
      videos: [
        { ...relocCase.videoGroups[0].videos[0], caption: "Main step-by-step guide" },
        { ...relocCase.videoGroups[0].videos[1], caption: "Short guide to the Reloc bot" },
        { ...relocCase.videoGroups[0].videos[2], caption: "Using the service in Telegram" },
      ],
    },
    {
      ...relocCase.videoGroups[1],
      title: "Navigation",
      description: "Separate navigation guides for Safari, Chrome and Yandex Browser users.",
      videos: [
        { ...relocCase.videoGroups[1].videos[0], caption: "Navigation in Safari" },
        { ...relocCase.videoGroups[1].videos[1], caption: "Navigation in Chrome" },
        { ...relocCase.videoGroups[1].videos[2], title: "Yandex", caption: "Navigation in Yandex Browser" },
      ],
    },
    {
      ...relocCase.videoGroups[2],
      title: "3D videos",
      description: "Two short advertising videos built around a 3D scene and the product image.",
      videos: [
        { ...relocCase.videoGroups[2].videos[0], caption: "Main 3D video" },
        { ...relocCase.videoGroups[2].videos[1], caption: "3D video with a notification" },
      ],
    },
  ],
};

export const funpayCaseEn: PortfolioCase = {
  ...funpayCase,
  eyebrow: "YouTube / Motion graphics",
  title: "Work for FunPay",
  summary:
    "A set of motion graphics for YouTube, including titles, transitions, intros and outros.",
  metaDescription:
    "FunPay: a case study by Artem Bazhutin: titles, intros, outros, transitions and motion graphics for YouTube.",
  coverAlt: "FunPay case study cover",
  period: "Freelance / 2024—2026",
  format: "YouTube, motion",
  challenge:
    "The channel publishes different formats and series. It needed a consistent visual style that would bring the videos together without distracting from the content or cluttering the edit.",
  solution:
    "I created a set of reusable elements: an intro, outro, titles and graphics for different series. Each uses short, functional animation.",
  role: [
    "Motion concept",
    "Titles and on-screen graphics",
    "Intro, outro and transitions",
  ],
  deliverables: [
    {
      number: "01",
      title: "Intro & outro",
      text: "Short opening and closing animations for each video.",
    },
    {
      number: "02",
      title: "Titles",
      text: "On-screen graphics for names, explanations and key points without competing with the video.",
    },
    {
      number: "03",
      title: "Series transitions",
      text: "Reusable transitions with series titles to help viewers follow the video.",
    },
  ],
  videoGroups: [
    {
      ...funpayCase.videoGroups[0],
      title: "YouTube motion graphics",
      description: "An intro, outro, animated avatar and short advertising inserts for the channel.",
      videos: [
        { ...funpayCase.videoGroups[0].videos[0], caption: "Video intro" },
        { ...funpayCase.videoGroups[0].videos[1], caption: "Vertical video outro" },
        { ...funpayCase.videoGroups[0].videos[2], caption: "Animated avatar" },
        {
          ...funpayCase.videoGroups[0].videos[3],
          title: "Advertising insert 01",
          caption: "Animated insert for talking-head videos on YouTube and TikTok.",
        },
        {
          ...funpayCase.videoGroups[0].videos[4],
          title: "Advertising insert 02",
          caption: "A second advertising insert for talking-head videos.",
        },
      ],
    },
  ],
};
