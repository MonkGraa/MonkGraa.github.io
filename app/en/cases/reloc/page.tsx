import type { Metadata } from "next";
import { CasePage } from "../../../cases/case-page";
import { relocCaseEn } from "../../../cases/case-data-en";

export const dynamic = "force-static";

const title = "Reloc — case study by Artem Bazhutin";

export const metadata: Metadata = {
  title,
  description: relocCaseEn.metaDescription,
  alternates: {
    canonical: "/en/cases/reloc/",
    languages: { "ru-RU": "/cases/reloc/", "en-US": "/en/cases/reloc/" },
  },
  openGraph: {
    title,
    description: relocCaseEn.metaDescription,
    locale: "en_US",
    images: [{ url: relocCaseEn.coverImage, width: 1900, height: 1100, alt: relocCaseEn.coverAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: relocCaseEn.metaDescription,
    images: [relocCaseEn.coverImage],
  },
};

export default function EnglishRelocCasePage() {
  return <CasePage project={relocCaseEn} locale="en" />;
}
