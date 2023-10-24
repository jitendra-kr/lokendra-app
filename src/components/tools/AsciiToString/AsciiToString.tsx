import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { AsciiToStringInJavascript } from "./AsciiToStringInJavascript";

function AsciiToString() {
  const [byte, setByte] = useState("");

  function asciiToSentence(inputStr: string) {
    const asciiArray = inputStr
      .split(" ")
      .map((code) => parseInt(code.trim(), 10))
      .filter((item) => !isNaN(item));

    const sentence = asciiArray
      .map((asciiValue) => String.fromCharCode(asciiValue))
      .join("");

    return sentence;
  }

  const onChangeCb = (value: string) => {
    if (value) {
      const string = asciiToSentence(value);
      setByte(string);
    } else {
      setByte("");
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.ASCIItoString}
      byte={byte}
      onChangeCb={onChangeCb}
      pageContent={
        <>
          <AsciiToStringInJavascript />
        </>
      }
    />
  );
}

export default withRouter(AsciiToString);
