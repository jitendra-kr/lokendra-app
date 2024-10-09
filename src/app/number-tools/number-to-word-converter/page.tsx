import { NumbersToWords } from "@ft/components/tools/NumbersTools/NumbersToWords/NumbersToWords";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.NUMBER_TO_WORDS);

function NumbersToWordsPage() {
  return <NumbersToWords />;
}

export default NumbersToWordsPage;
