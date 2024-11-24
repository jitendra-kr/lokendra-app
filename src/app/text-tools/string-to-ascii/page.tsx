import ToolRenderer from "@ft/components/ToolContentRenderer";
import StringToAscii from "@ft/components/tools/AsciiConversion/StringToAscii";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(ToolKeys.StringToASCII);

function StringToAsciiPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.StringToASCII}>
      <StringToAscii />;
    </ToolRenderer>
  );
}

export default StringToAsciiPage;
