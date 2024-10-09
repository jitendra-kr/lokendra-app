import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { XmlMinifier } from "@ft/components/tools/XmlTools/XmlMinifier/XmlMinifier";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_MINIFIER);

function XmlMinifierPage() {
  return <XmlMinifier />;
}

export default XmlMinifierPage;
