import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import URLDecode from "@ft/components/tools/URLDecode/URLDecode";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.UrlDecode);

function URLDecodePage() {
  return (
    <ToolRenderer toolKey={ToolKeys.UrlDecode}>
      <URLDecode />;
    </ToolRenderer>
  );
}

export default URLDecodePage;
