"use client";
import { AsciiToTextType, asciiToText } from "ascii-text-converter";
import { useCallback, useEffect, useState } from "react";
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

  const onChangeCb = useCallback(
    (value: string) => {
      setInput(value);
      if (!value) {
        setByte("");
        return;
      }
      const text = asciiToText(value, {
        type: inputType,
      });
      setByte(text);
    },
    [inputType],
  );

  useEffect(() => {
    onChangeCb(input);
  }, [input, inputType, onChangeCb]);

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.ASCIItoString}
        byte={byte}
        onChangeCb={onChangeCb}
        inputEditorActionChild={
          <SelectASCIIConversionType setInputType={setInputType} />
        }
      />
      <AsciiToStringPageContent />
      <Faq data={asciiToStringFaqData}></Faq>
    </>
  );
}

export default AsciiToString;
