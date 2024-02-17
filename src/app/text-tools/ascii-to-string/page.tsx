import { Faq } from "@ft/components/common/Faq/Faq";
import AsciiToString from "@ft/components/tools/AsciiConversion/AsciiToString/AsciiToString";
import { AsciiToStringPageContent } from "@ft/components/tools/AsciiConversion/AsciiToString/AsciiToStringPageContent";
import asciiToStringFaqData from "@ft/components/tools/AsciiConversion/AsciiToString/asciiToStringFaqData";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.ASCIItoString);

function AsciiToStringPage() {
  return (
    <AsciiToString>
      <AsciiToStringPageContent />
      <Faq data={asciiToStringFaqData}></Faq>
    </AsciiToString>
  );
}

export default AsciiToStringPage;
