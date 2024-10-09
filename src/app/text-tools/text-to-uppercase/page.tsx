import Faq from "@ft/components/common/Faq";
import ToUppercase from "@ft/components/tools/ToUppercase";
import toUppercaseFaqData from "@ft/components/tools/ToUppercase/ToUppercaseFaqData";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.UppercaseTextConverter,
);

function ToUppercasePage() {
  return (
    <ToUppercase>
      <Faq data={toUppercaseFaqData}></Faq>
    </ToUppercase>
  );
}

export default ToUppercasePage;
