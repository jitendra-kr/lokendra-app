import { RandomStringGenerator, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.GENERATE_RANDOM_STRING,
);

function RandomStringGeneratorPage() {
  return <RandomStringGenerator />;
}

export default RandomStringGeneratorPage;
