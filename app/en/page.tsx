import type { Metadata } from "next";
import { HomePage } from "../home-page";

const title = "Artem Bazhutin — graphic and motion designer";
const description = "Graphic and motion design for social, advertising and content teams. OMIndex, Alanbase, Reloc and FunPay cases, product films and presentations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/",
    languages: { "ru-RU": "/", "en-US": "/en/" },
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    images: [{ url: "/og.png?v=20260919", width: 1730, height: 909, alt: "Artem Bazhutin — graphic and motion designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png?v=20260919"],
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
