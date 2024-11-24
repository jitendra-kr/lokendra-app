import ToolRenderer from "@ft/components/ToolContentRenderer";
import ReplaceSpaces from "@ft/components/tools/ReplaceSpaces/ReplaceSpaces";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.ReplaceSpaces);

function ReplaceSpacesPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.ReplaceSpaces}>
      <ReplaceSpaces />
    </ToolRenderer>
  );
}

export default ReplaceSpacesPage;
