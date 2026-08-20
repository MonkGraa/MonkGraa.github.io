import type { Metadata } from "next";
import { CasePage } from "../case-page";
import { relocCase } from "../case-data";

export const metadata: Metadata = {
  title: `${relocCase.client} — кейс Артёма Бажутина`,
  description: relocCase.metaDescription,
  openGraph: {
    title: `${relocCase.client} — кейс Артёма Бажутина`,
    description: relocCase.metaDescription,
    images: [],
  },
  twitter: {
    title: `${relocCase.client} — кейс Артёма Бажутина`,
    description: relocCase.metaDescription,
    images: [],
  },
};

export default function RelocCasePage() {
  return <CasePage project={relocCase} />;
}
