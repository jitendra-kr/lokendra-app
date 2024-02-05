import { JSONMinify, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_MINIFIER);

function JSONMinifyPage() {
  return <JSONMinify />;
}

export default JSONMinifyPage;
