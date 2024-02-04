"use client"
import { Faq } from "@ft/components/common";
import { textToAscii } from "ascii-text-converter";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { StringToAsciiInJavascript } from "./StringToAsciiInJavascript";
import stringToAsciiFaqData from "./stringToAsciiFaqData";
import { ToolKeys } from "../../ToolsList/toolsListingData";

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

export default StringToAscii;
