import { RemoveSpaces, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.REMOVE_SPACES);

function RemoveSpacesPage() {
  return <RemoveSpaces />;
}

export default RemoveSpacesPage;
