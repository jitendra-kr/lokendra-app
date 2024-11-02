"use client";
import { textToAscii } from "ascii-text-converter";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

function StringToAscii() {
  const [byte, setByte] = useState<string>();

  const onChangeCb = (value: string) => {
    const asciiCodes = textToAscii(value);
    setByte(asciiCodes.join(" "));
  };

  return (
    <>
      <InputOutputViewer byte={byte ?? ""} onChangeCb={onChangeCb} />
    </>
  );
}

export default StringToAscii;
