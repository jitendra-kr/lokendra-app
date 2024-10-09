import { RemoveExtraSpaces } from "@ft/components/tools/TextTools/RemoveExtraSpaces/RemoveExtraSpaces";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.REMOVE_EXTRA_SPACES,
);

function RemoveExtraSpacesPage() {
  return <RemoveExtraSpaces />;
}

export default RemoveExtraSpacesPage;
