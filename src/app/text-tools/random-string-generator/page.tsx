import Faq from "@ft/components/common/Faq";
import getToolListDataByToolID from "@ft/components/tools/helper/InputOutputViewer/getToolListDataByToolID";
import { RandomStringGenerator } from "@ft/components/tools/TextTools/RandomStringGenerator/RandomStringGenerator";
import randomStringGeneratorFaqData from "@ft/components/tools/TextTools/RandomStringGenerator/randomStringGeneratorFaqData";
import ToolsBody from "@ft/components/tools/ToolsBody/ToolsBody";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.GENERATE_RANDOM_STRING,
);

function RandomStringGeneratorPage() {
  const toolData = getToolListDataByToolID(ToolKeys.GENERATE_RANDOM_STRING);
  return (
    <>
      <ToolsBody toolData={toolData} />
      <RandomStringGenerator />
      <Faq data={randomStringGeneratorFaqData}></Faq>
    </>
  );
}

export default RandomStringGeneratorPage;
