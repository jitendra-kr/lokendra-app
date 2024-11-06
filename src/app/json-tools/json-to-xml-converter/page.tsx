import ToolRenderer from "@ft/components/ToolContentRenderer";
import { JSONToXML } from "@ft/components/tools/JsonTools/JSONToXML/JSONToXML";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_TO_XML);

function JSONToXMLPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.JSON_TO_XML}>
      <JSONToXML />;
    </ToolRenderer>
  );
}

export default JSONToXMLPage;
