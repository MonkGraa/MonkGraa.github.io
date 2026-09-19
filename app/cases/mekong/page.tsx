import { FoodCasePage, foodCaseMetadata } from "../food-case-page";

export const dynamic = "force-static";
export const metadata = foodCaseMetadata("mekong", "ru");
export default function Page() { return <FoodCasePage slug="mekong" locale="ru" />; }
