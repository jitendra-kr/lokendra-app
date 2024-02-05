import { ToolKeys, XmlFormatter } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_FORMATTER);

function XmlFormatterPage() {
  return <XmlFormatter />;
}

export default XmlFormatterPage;
