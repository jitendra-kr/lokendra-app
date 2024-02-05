import { JsonToString, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSONtostring);

function JsonToStringPage() {
  return <JsonToString />;
}

export default JsonToStringPage;
