import ToolRenderer from "@ft/components/ToolContentRenderer";
import ToUppercase from "@ft/components/tools/ToUppercase";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.UppercaseTextConverter,
);

function ToUppercasePage() {
  return (
    <ToolRenderer toolKey={ToolKeys.UppercaseTextConverter}>
      <ToUppercase />;
    </ToolRenderer>
  );
}

export default ToUppercasePage;
