import { FoodCasePage, foodCaseMetadata } from "../../../cases/food-case-page";

export const dynamic = "force-static";
export const metadata = foodCaseMetadata("teremok", "en");
export default function Page() { return <FoodCasePage slug="teremok" locale="en" />; }
