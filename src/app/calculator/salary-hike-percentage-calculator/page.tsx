import SalaryHikePercentageCalculator from "@ft/components/tools/SalaryHikePercentageCalculator/SalaryHikePercentageCalculator";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.SalaryHike);

function SalaryHikePercentageCalculatorPage() {
  return <SalaryHikePercentageCalculator />;
}

export default SalaryHikePercentageCalculatorPage;
