import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import UUIDGenerator from "@ft/components/tools/UUIDGenerator/UUIDGenerator";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.UUIDGenerator);

function UUIDGeneratorPage() {
  return <UUIDGenerator />;
}

export default UUIDGeneratorPage;
