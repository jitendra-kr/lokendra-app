import ToolRenderer from "@ft/components/ToolContentRenderer";
import { JSONMinify } from "@ft/components/tools/JsonTools/JSONMinify/JSONMinify";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

const toolKey = ToolKeys.JSON_MINIFIER;
export const metadata: Metadata = generateMetaTags(toolKey);

function JSONMinifyPage() {
  return (
    <ToolRenderer toolKey={toolKey}>
      <JSONMinify />;
    </ToolRenderer>
  );
}

export default JSONMinifyPage;
