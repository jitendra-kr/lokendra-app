import ToolRenderer from "@ft/components/ToolContentRenderer";
import StringToAscii from "@ft/components/tools/AsciiConversion/StringToAscii";
import { StringToAsciiInJavascript } from "@ft/components/tools/AsciiConversion/StringToAscii/StringToAsciiInJavascript";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.StringtoASCII);

function StringToAsciiPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.StringtoASCII}>
      <StringToAscii />;
      <StringToAsciiInJavascript />
    </ToolRenderer>
  );
}

export default StringToAsciiPage;
