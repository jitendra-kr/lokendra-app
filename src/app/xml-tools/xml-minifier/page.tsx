import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { XmlMinifier } from "@ft/components/tools/XmlTools/XmlMinifier/XmlMinifier";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_MINIFIER);

function XmlMinifierPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.XML_MINIFIER}>
      <XmlMinifier />
    </ToolRenderer>
  );
}

export default XmlMinifierPage;
