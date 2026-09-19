import { FoodCasePage, foodCaseMetadata } from "../food-case-page";

export const dynamic = "force-static";
export const metadata = foodCaseMetadata("blackbox", "ru");
export default function Page() { return <FoodCasePage slug="blackbox" locale="ru" />; }
