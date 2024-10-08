import { JSONDiff } from "@ft/components/tools/Diff/JSONDiff/JSONDiff";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_DIFF);

function JsonDiffPage() {
  return <JSONDiff />;
}

export default JsonDiffPage;
