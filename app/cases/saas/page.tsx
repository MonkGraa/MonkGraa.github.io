import type { Metadata } from "next";
import { NewCasePage } from "../new-case-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "OMIndex — Артём Бажутин",
  description:
    "Продуктовый ролик для OMIndex: анимация интерфейса, данных и типографики.",
  alternates: {
    canonical: "/cases/saas/",
    languages: { "ru-RU": "/cases/saas/", "en-US": "/en/cases/saas/" },
  },
};
export default function Page() {
  return <NewCasePage kind="saas" locale="ru" />;
}
