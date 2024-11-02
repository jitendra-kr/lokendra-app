"use client";
import { AsciiToTextType, asciiToText } from "ascii-text-converter";
import { useCallback, useEffect, useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import { SelectASCIIConversionType } from "../common";

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
    <InputOutputViewer
      byte={byte}
      onChangeCb={onChangeCb}
      inputEditorActionChild={
        <SelectASCIIConversionType setInputType={setInputType} />
      }
    />
  );
}

export default AsciiToString;
