import { ToolKeys, XmlMinifier } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_MINIFIER);

function XmlMinifierPage() {
  return <XmlMinifier />;
}

export default XmlMinifierPage;
