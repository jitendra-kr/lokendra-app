import ToolRenderer from "@ft/components/ToolContentRenderer";
import { JSONDiff } from "@ft/components/tools/Diff/JSONDiff/JSONDiff";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_DIFF);

function JsonDiffPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSON_DIFF}>
      <JSONDiff />;
    </ToolRenderer>
  );
}

export default JsonDiffPage;
