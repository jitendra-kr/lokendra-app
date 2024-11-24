import ToolRenderer from "@ft/components/ToolContentRenderer";
import JsonParser from "@ft/components/tools/JsonParser/JsonParser";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_VALIDATOR);

function JsonValidatorPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSON_VALIDATOR}>
      <JsonParser />
    </ToolRenderer>
  );
}

export default JsonValidatorPage;
