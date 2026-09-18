import type { Metadata } from "next";
import { CasePage } from "../case-page";
import { funpayCase } from "../case-data";

export const dynamic = "force-static";

const title = `${funpayCase.client} — кейс Артёма Бажутина`;

export const metadata: Metadata = {
  title,
  description: funpayCase.metaDescription,
  alternates: {
    canonical: "/cases/funpay/",
    languages: { "ru-RU": "/cases/funpay/", "en-US": "/en/cases/funpay/" },
  },
  openGraph: {
    title,
    description: funpayCase.metaDescription,
    images: [
      { url: funpayCase.coverImage, width: 1900, height: 1100, alt: funpayCase.coverAlt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: funpayCase.metaDescription,
    images: [funpayCase.coverImage],
  },
};

export default function FunPayCasePage() {
  return <CasePage project={funpayCase} />;
}
