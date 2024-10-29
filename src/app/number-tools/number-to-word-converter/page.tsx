import ToolRenderer from "@ft/components/ToolContentRenderer";
import { NumbersToWords } from "@ft/components/tools/NumbersTools/NumbersToWords/NumbersToWords";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.NUMBER_TO_WORDS);

function NumbersToWordsPage() {
  console.log("{ToolKeys.NUMBER_TO_WORDS", ToolKeys.NUMBER_TO_WORDS);
  return (
    <ToolRenderer toolKey={ToolKeys.NUMBER_TO_WORDS}>
      <NumbersToWords />;
    </ToolRenderer>
  );
}

function RenderNumbersToWordsPage() {}

export default NumbersToWordsPage;
