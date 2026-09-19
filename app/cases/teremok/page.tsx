import { FoodCasePage, foodCaseMetadata } from "../food-case-page";

export const dynamic = "force-static";
export const metadata = foodCaseMetadata("teremok", "ru");
export default function Page() { return <FoodCasePage slug="teremok" locale="ru" />; }
