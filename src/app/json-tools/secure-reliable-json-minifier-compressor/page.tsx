import { JSONMinify } from "@ft/components/tools/JsonTools/JSONMinify/JSONMinify";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_MINIFIER);

function JSONMinifyPage() {
  return <JSONMinify />;
}

export default JSONMinifyPage;
