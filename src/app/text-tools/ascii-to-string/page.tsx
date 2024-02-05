import { AsciiToString, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.ASCIItoString);

function AsciiToStringPage() {
  return <AsciiToString />;
}

export default AsciiToStringPage;
