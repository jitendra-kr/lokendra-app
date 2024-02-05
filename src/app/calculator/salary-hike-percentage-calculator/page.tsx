import { ToolKeys } from "@ft/components";
import SalaryHikePercentageCalculator from "@ft/components/tools/SalaryHikePercentageCalculator/SalaryHikePercentageCalculator";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.SalaryHike);

function SalaryHikePercentageCalculatorPage() {
  return <SalaryHikePercentageCalculator />;
}

export default SalaryHikePercentageCalculatorPage;
