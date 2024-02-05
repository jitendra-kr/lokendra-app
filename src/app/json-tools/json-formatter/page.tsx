import { JsonParser, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSONParser);

function JsonParserPage() {
  return <JsonParser toolKey={ToolKeys.JSONParser} />;
}

export default JsonParserPage;
