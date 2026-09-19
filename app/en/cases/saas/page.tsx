import type { Metadata } from "next";
import { NewCasePage } from "../../../cases/new-case-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "OMIndex — Artem Bazhutin",
  description: "OMIndex product film with interface animation and typography.",
  alternates: {
    canonical: "/en/cases/saas/",
    languages: { "ru-RU": "/cases/saas/", "en-US": "/en/cases/saas/" },
  },
};
export default function Page() {
  return <NewCasePage kind="saas" locale="en" />;
}
