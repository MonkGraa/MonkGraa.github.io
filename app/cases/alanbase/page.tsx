import type { Metadata } from "next";
import { NewCasePage } from "../new-case-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Alanbase — Артём Бажутин",
  description: "Рекламные креативы, контент и презентации для Alanbase.",
  alternates: {
    canonical: "/cases/alanbase/",
    languages: { "ru-RU": "/cases/alanbase/", "en-US": "/en/cases/alanbase/" },
  },
};
export default function Page() {
  return <NewCasePage kind="alanbase" locale="ru" />;
}
