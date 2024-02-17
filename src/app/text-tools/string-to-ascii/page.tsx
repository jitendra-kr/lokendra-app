import { StringToAscii } from "@ft/components";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.StringtoASCII);

function StringToAsciiPage() {
  return <StringToAscii />;
}

export default StringToAsciiPage;
