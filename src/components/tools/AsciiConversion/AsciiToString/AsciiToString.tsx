import { AsciiToTextType, asciiToText } from "ascii-text-converter";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { Faq } from "../../../common";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { SelectASCIIConversionType } from "../common";
import { AsciiToStringPageContent } from "./AsciiToStringPageContent";
import asciiToStringFaqData from "./asciiToStringFaqData";

function AsciiToString() {
  const [byte, setByte] = useState("");
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState<AsciiToTextType>("decimal");

  const onChangeCb = (value: string) => {
    setInput(value);
    if (!value) {
      setByte("");
      return;
    }
    const text = asciiToText(value, {
      type: inputType,
    });
    console.log("text", text);
    setByte(text);
  };

  useEffect(() => {
    onChangeCb(input);
  }, [input, inputType]);

  return (
    <InputOutputViewer
      toolId={ToolKeys.ASCIItoString}
      byte={byte}
      onChangeCb={onChangeCb}
      inputEditorActionChild={
        <SelectASCIIConversionType setInputType={setInputType} />
      }
      pageContent={
        <>
          <AsciiToStringPageContent />
          <Faq data={asciiToStringFaqData}></Faq>
        </>
      }
    />
  );
}

export default withRouter(AsciiToString);
