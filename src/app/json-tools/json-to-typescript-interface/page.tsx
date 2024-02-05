import { JSONToTypescript, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_TO_TYPESCRIPT);

function JsonTOTypescriptPage() {
  return <JSONToTypescript />;
}

export default JsonTOTypescriptPage;
