import type { Metadata } from "next";
import { NewCasePage } from "../../../cases/new-case-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Alanbase — Artem Bazhutin",
  description: "Advertising, social content and presentations for Alanbase.",
  alternates: {
    canonical: "/en/cases/alanbase/",
    languages: { "ru-RU": "/cases/alanbase/", "en-US": "/en/cases/alanbase/" },
  },
};
export default function Page() {
  return <NewCasePage kind="alanbase" locale="en" />;
}
