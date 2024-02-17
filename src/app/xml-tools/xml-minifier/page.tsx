import { XmlMinifier } from "@ft/components";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_MINIFIER);

function XmlMinifierPage() {
  return <XmlMinifier />;
}

export default XmlMinifierPage;
