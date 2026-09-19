import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Артём Бажутин — графический и моушен-дизайнер";
const siteDescription =
  "Графика и анимация для соцсетей, рекламы и контента. Кейсы OMIndex, Alanbase, Reloc и FunPay, продуктовые видео и презентации.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://monkgraa.github.io"),
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
    languages: { "ru-RU": "/", "en-US": "/en/" },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og.png?v=20260919",
        width: 1730,
        height: 909,
        alt: "Артём Бажутин — графический и моушен-дизайнер",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png?v=20260919"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Onest:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
