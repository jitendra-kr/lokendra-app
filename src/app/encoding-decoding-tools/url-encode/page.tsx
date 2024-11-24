import ToolRenderer from "@ft/components/ToolContentRenderer";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import URLEncode from "@ft/components/tools/URLEncode/URLEncode";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.URLEncode);

function URLEncodePage() {
  return (
    <ToolRenderer toolKey={ToolKeys.URLEncode}>
      <URLEncode />
    </ToolRenderer>
  );
}

export default URLEncodePage;
