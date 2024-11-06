import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import WordCounter from "@ft/components/tools/WordCounter";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const toolKey = ToolKeys.wordCounter;
export const metadata: Metadata = generateMetaTags(toolKey);

function WordsCounterPage() {
  return (
    <ToolRenderer toolKey={toolKey}>
      <WordCounter />;
    </ToolRenderer>
  );
}

export default WordsCounterPage;
