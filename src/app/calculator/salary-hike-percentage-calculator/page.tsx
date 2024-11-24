import ToolRenderer from "@ft/components/ToolContentRenderer";
import SalaryHikePercentageCalculator from "@ft/components/tools/SalaryHikePercentageCalculator/SalaryHikePercentageCalculator";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.SalaryHike);

function SalaryHikePercentageCalculatorPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.SalaryHike}>
      <SalaryHikePercentageCalculator />
    </ToolRenderer>
  );
}

export default SalaryHikePercentageCalculatorPage;
