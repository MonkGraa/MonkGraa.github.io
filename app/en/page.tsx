import type { Metadata } from "next";
import { HomePage } from "../home-page";

const title = "Artem Bazhutin — graphic and motion designer";
const description = "Portfolio of Artem Bazhutin: visual identity, graphic design, motion, 3D and video.";

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
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Artem Bazhutin — graphic and motion designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
