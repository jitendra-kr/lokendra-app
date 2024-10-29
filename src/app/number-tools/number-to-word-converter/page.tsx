import Faq from "@ft/components/common/Faq";
import getToolListDataByToolID from "@ft/components/tools/helper/InputOutputViewer/getToolListDataByToolID";
import { NumbersToWords } from "@ft/components/tools/NumbersTools/NumbersToWords/NumbersToWords";
import numbersToWordsFaqData from "@ft/components/tools/NumbersTools/NumbersToWords/numbersToWordsFaqData";
import ToolsBody from "@ft/components/tools/ToolsBody/ToolsBody";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.NUMBER_TO_WORDS);

function NumbersToWordsPage() {
  const toolData = getToolListDataByToolID(ToolKeys.NUMBER_TO_WORDS);

  return (
    <>
      <ToolsBody toolData={toolData} />
      <NumbersToWords />;
      <Faq data={numbersToWordsFaqData} />
    </>
  );
}

export default NumbersToWordsPage;
