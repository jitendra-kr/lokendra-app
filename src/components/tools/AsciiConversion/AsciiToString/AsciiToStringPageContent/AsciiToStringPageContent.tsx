import { AsciiToStringInJavascript } from "./AsciiToStringInJavascript";
import { BinaryAsciiToStringInJavascript } from "./BinaryAsciiToStringInJavascript";
import { HexadecimalAsciiToStringInJavascript } from "./HexadecimalAsciiToStringInJavascript";
import { OctalAsciiToStringInJavascript } from "./OctalAsciiToStringInJavascript";

export function AsciiToStringPageContent() {
  return (
    <>
      <AsciiToStringInJavascript />
      <OctalAsciiToStringInJavascript />
      <BinaryAsciiToStringInJavascript />
      <HexadecimalAsciiToStringInJavascript />
    </>
  );
}
