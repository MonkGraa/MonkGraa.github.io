import type { Metadata } from "next";
import { CasePage } from "../case-page";
import { relocCase } from "../case-data";

export const dynamic = "force-static";

const title = `${relocCase.client} — кейс Артёма Бажутина`;

export const metadata: Metadata = {
  title,
  description: relocCase.metaDescription,
  alternates: {
    canonical: "/cases/reloc/",
    languages: { "ru-RU": "/cases/reloc/", "en-US": "/en/cases/reloc/" },
  },
  openGraph: {
    title,
    description: relocCase.metaDescription,
    images: [
      { url: relocCase.coverImage, width: 1900, height: 1100, alt: relocCase.coverAlt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: relocCase.metaDescription,
    images: [relocCase.coverImage],
  },
};

export default function RelocCasePage() {
  return <CasePage project={relocCase} />;
}
