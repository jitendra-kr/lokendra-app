"use client";
import { AsciiToTextType, asciiToText } from "ascii-text-converter";
import { useCallback, useEffect, useState } from "react";
import { ToolKeys } from "../../ToolsList/ToolKeys";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { SelectASCIIConversionType } from "../common";

function AsciiToString({ children }: { children: React.ReactNode }) {
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
      {children}
    </>
  );
}

export default AsciiToString;
