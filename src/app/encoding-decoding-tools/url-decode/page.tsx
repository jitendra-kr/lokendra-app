import { ToolKeys } from "@ft/components";
import { URLDecode } from "@ft/components/tools/URLDecode";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.UrlDecode);

function URLDecodePage() {
  return <URLDecode />;
}

export default URLDecodePage;
