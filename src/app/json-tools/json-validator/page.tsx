import { JsonParser, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_VALIDATOR);

function JsonValidatorPage() {
  return <JsonParser toolKey={ToolKeys.JSON_VALIDATOR} />;
}

export default JsonValidatorPage;
