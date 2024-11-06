import ToolRenderer from "@ft/components/ToolContentRenderer";
import { RandomStringGenerator } from "@ft/components/tools/TextTools/RandomStringGenerator/RandomStringGenerator";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.GENERATE_RANDOM_STRING,
);

function RandomStringGeneratorPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.GENERATE_RANDOM_STRING}>
      <RandomStringGenerator />
    </ToolRenderer>
  );
}

export default RandomStringGeneratorPage;
