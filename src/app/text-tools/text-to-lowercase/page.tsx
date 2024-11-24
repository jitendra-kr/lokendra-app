import ToolRenderer from "@ft/components/ToolContentRenderer";
import ToLowercase from "@ft/components/tools/ToLowercase";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const toolKey = ToolKeys.LowercaseTextconverter;
export const metadata: Metadata = generateMetaTags(toolKey);

function ToUppercasePage() {
  return (
    <ToolRenderer toolKey={toolKey}>
      <ToLowercase />
    </ToolRenderer>
  );
}

export default ToUppercasePage;
