import { RemoveExtraSpaces, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.REMOVE_EXTRA_SPACES,
);

function RemoveExtraSpacesPage() {
  return <RemoveExtraSpaces />;
}

export default RemoveExtraSpacesPage;
