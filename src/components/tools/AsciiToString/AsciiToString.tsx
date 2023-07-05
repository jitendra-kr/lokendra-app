import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";

function AsciiToString() {
  const [byte, setByte] = useState("");

  function asciiToSentence(str: any) {
    let sentence = "";
    var num = 0;
    let zero: any = "0";
    for (var i = 0; i < str.length; i++) {
      num = num * 10 + (str[i] - zero);
      if (num >= 32 && num <= 122) {
        var ch = String.fromCharCode(num);
        sentence += ch;
        num = 0;
      }
    }
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
    />
  );
}

export default withRouter(AsciiToString);
