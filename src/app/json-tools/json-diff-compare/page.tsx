import { JSONDiff, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_DIFF);

function JsonDiffPage() {
  return <JSONDiff />;
}

export default JsonDiffPage;
