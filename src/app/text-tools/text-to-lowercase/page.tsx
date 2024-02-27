import { ToLowercase } from "@ft/components";
import { Faq } from "@ft/components/common/Faq";
import ToLowercaseFaqData from "@ft/components/tools/ToLowercase/ToLowercaseFaqData";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.LowercaseTextconverter,
);

function ToUppercasePage() {
  return (
    <ToLowercase>
      <Faq data={ToLowercaseFaqData}></Faq>
    </ToLowercase>
  );
}

export default ToUppercasePage;
