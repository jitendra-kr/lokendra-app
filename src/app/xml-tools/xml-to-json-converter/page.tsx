import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { XMLToJSON } from "@ft/components/tools/XmlTools/XMLToJSON/XMLToJSON";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_TO_JSON);

function XmlToJSONPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.XML_TO_JSON}>
      <XMLToJSON />;
    </ToolRenderer>
  );
}

export default XmlToJSONPage;
