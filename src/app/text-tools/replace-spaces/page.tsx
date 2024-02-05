import { ReplaceSpaces, ToolKeys } from "@ft/components/tools";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.ReplaceSpaces);

function ReplaceSpacesPage() {
  return <ReplaceSpaces />;
}

export default ReplaceSpacesPage;
