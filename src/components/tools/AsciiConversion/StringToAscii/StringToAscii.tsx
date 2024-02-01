import { ToolKeys } from "@ft/components";
import { Faq } from "@ft/components/common";
import { textToAscii } from "ascii-text-converter";
import { withRouter } from "next/router";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { StringToAsciiInJavascript } from "./StringToAsciiInJavascript";
import stringToAsciiFaqData from "./stringToAsciiFaqData";

function StringToAscii() {
  const [byte, setByte] = useState<string>();

  const onChangeCb = (value: string) => {
    const asciiCodes = textToAscii(value);
    setByte(asciiCodes.join(" "));
  };

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.StringtoASCII}
        byte={byte ?? ""}
        onChangeCb={onChangeCb}
        pageContent={
          <>
            <StringToAsciiInJavascript />
            <Faq data={stringToAsciiFaqData}></Faq>
          </>
        }
      />
    </>
  );
}

export default withRouter(StringToAscii);
