import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";

function StringToAscii() {
  const [byte, setByte] = useState<string>();

  const textToASCIIConvert = (text: string) => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(text);
    console.log(byteArray);
    setByte(byteArray.join(" ") as any);
  };

  const onChangeCb = (value: string) => {
    textToASCIIConvert(value);
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.StringtoASCII}
      byte={byte ?? ""}
      onChangeCb={onChangeCb}
    />
  );
}

export default withRouter(StringToAscii);
