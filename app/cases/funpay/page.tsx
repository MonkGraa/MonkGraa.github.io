import type { Metadata } from "next";
import { CasePage } from "../case-page";
import { funpayCase } from "../case-data";

export const metadata: Metadata = {
  title: `${funpayCase.client} — кейс Артёма Бажутина`,
  description: funpayCase.metaDescription,
  openGraph: {
    title: `${funpayCase.client} — кейс Артёма Бажутина`,
    description: funpayCase.metaDescription,
    images: [],
  },
  twitter: {
    title: `${funpayCase.client} — кейс Артёма Бажутина`,
    description: funpayCase.metaDescription,
    images: [],
  },
};

export default function FunPayCasePage() {
  return <CasePage project={funpayCase} />;
}
