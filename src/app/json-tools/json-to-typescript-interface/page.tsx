import ToolRenderer from "@ft/components/ToolContentRenderer";
import { JSONToTypescript } from "@ft/components/tools/JsonTools/JSONToTypescript/JSONToTypescript";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_TO_TYPESCRIPT);

function JsonTOTypescriptPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSON_TO_TYPESCRIPT}>
      <JSONToTypescript />;
    </ToolRenderer>
  );
}

export default JsonTOTypescriptPage;
