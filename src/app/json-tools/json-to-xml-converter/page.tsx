import { JSONToXML, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_TO_XML);

function JSONToXMLPage() {
  return <JSONToXML />;
}

export default JSONToXMLPage;
