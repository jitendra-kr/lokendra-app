import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { XmlFormatter } from "@ft/components/tools/XmlTools/XmlFormatter/XmlFormatter";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_FORMATTER);

function XmlFormatterPage() {
  return <XmlFormatter />;
}

export default XmlFormatterPage;
