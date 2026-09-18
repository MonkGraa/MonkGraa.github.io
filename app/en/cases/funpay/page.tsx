import type { Metadata } from "next";
import { CasePage } from "../../../cases/case-page";
import { funpayCaseEn } from "../../../cases/case-data-en";

export const dynamic = "force-static";

const title = "FunPay — case study by Artem Bazhutin";

export const metadata: Metadata = {
  title,
  description: funpayCaseEn.metaDescription,
  alternates: {
    canonical: "/en/cases/funpay/",
    languages: { "ru-RU": "/cases/funpay/", "en-US": "/en/cases/funpay/" },
  },
  openGraph: {
    title,
    description: funpayCaseEn.metaDescription,
    locale: "en_US",
    images: [{ url: funpayCaseEn.coverImage, width: 1900, height: 1100, alt: funpayCaseEn.coverAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: funpayCaseEn.metaDescription,
    images: [funpayCaseEn.coverImage],
  },
};

export default function EnglishFunPayCasePage() {
  return <CasePage project={funpayCaseEn} locale="en" />;
}
