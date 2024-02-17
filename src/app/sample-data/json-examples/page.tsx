import { SCREENS } from "@ft/common/enums";
import SampleJSON from "@ft/components/common/SampleData/JSON/SampleJSON/SampleJSON";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.JSON_EXAMPLES, {
  title: "JSON Examples: Explore Minified and Formatted JSON Samples.",
  description:
    "Discover the power of JSON with our extensive collection of JSON examples. You can go through a variety of sample JSON, including Minified, and Formatted JSON.",
  link: SCREENS.JSON_EXAMPLES,
});

function SampleJSONPage() {
  return <SampleJSON />;
}

export default SampleJSONPage;
