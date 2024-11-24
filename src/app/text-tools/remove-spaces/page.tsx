import ToolRenderer from "@ft/components/ToolContentRenderer";
import { RemoveSpaces } from "@ft/components/tools/TextTools/RemoveSpaces/RemoveSpaces";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const toolKey = ToolKeys.REMOVE_SPACES;
export const metadata: Metadata = generateMetaTags(ToolKeys.REMOVE_SPACES);

function RemoveSpacesPage() {
  return (
    <ToolRenderer toolKey={toolKey}>
      <RemoveSpaces />
    </ToolRenderer>
  );
}

export default RemoveSpacesPage;
