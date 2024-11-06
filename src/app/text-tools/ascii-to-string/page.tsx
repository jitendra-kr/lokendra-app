import ToolRenderer from "@ft/components/ToolContentRenderer";
import AsciiToString from "@ft/components/tools/AsciiConversion/AsciiToString/AsciiToString";
import { AsciiToStringPageContent } from "@ft/components/tools/AsciiConversion/AsciiToString/AsciiToStringPageContent/AsciiToStringPageContent";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.ASCIItoString);

function AsciiToStringPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.ASCIItoString}>
      <AsciiToString />
      <AsciiToStringPageContent />
    </ToolRenderer>
  );
}

export default AsciiToStringPage;
