import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { XmlFormatter } from "@ft/components/tools/XmlTools/XmlFormatter/XmlFormatter";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_FORMATTER);

function XmlFormatterPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.XML_FORMATTER}>
      <XmlFormatter />
    </ToolRenderer>
  );
}

export default XmlFormatterPage;
