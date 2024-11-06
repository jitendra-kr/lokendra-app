import ToolRenderer from "@ft/components/ToolContentRenderer";
import JsonParser from "@ft/components/tools/JsonParser/JsonParser";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSONParser);

function JsonParserPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSONParser}>
      <JsonParser />;
    </ToolRenderer>
  );
}

export default JsonParserPage;
