import { RandomStringGenerator } from "@ft/components";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.GENERATE_RANDOM_STRING,
);

function RandomStringGeneratorPage() {
  return <RandomStringGenerator />;
}

export default RandomStringGeneratorPage;
