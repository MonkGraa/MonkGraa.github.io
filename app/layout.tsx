import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Артём Бажутин — графический и моушен-дизайнер";
const siteDescription =
  "Портфолио Артёма Бажутина: айдентика, графический дизайн, motion и 3D.";

export const metadata: Metadata = {
  metadataBase: new URL("https://monkgraa.github.io"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Артём Бажутин — графический и моушен-дизайнер",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
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
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
