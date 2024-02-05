import { StringToAscii, ToolKeys } from "@ft/components";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.StringtoASCII);

function StringToAsciiPage() {
  return <StringToAscii />;
}

export default StringToAsciiPage;
