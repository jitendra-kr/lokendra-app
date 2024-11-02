import ToolRenderer from "@ft/components/ToolContentRenderer";
import JsonToString from "@ft/components/tools/JsonToString/JsonToString";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSONtostring);

function JsonToStringPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSONtostring}>
      <JsonToString />;
    </ToolRenderer>
  );
}

export default JsonToStringPage;
