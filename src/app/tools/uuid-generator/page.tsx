import Faq from "@ft/components/common/Faq";
import getToolListDataByToolID from "@ft/components/tools/helper/InputOutputViewer/getToolListDataByToolID";
import ToolsBody from "@ft/components/tools/ToolsBody/ToolsBody";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import UUIDGenerator from "@ft/components/tools/UUIDGenerator/UUIDGenerator";
import UUIDGeneratorFaqData from "@ft/components/tools/UUIDGenerator/UUIDGeneratorFaqData";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.UUIDGenerator);

function UUIDGeneratorPage() {
  const toolData = getToolListDataByToolID(ToolKeys.UUIDGenerator);
  return (
    <>
      <ToolsBody toolData={toolData} />
      <UUIDGenerator />
      <Faq data={UUIDGeneratorFaqData}></Faq>
    </>
  );
}

export default UUIDGeneratorPage;
