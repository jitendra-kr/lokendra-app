"use client";
import { useState } from "react";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer";

function ToLowercase() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toLowerCase());
    } else {
      setByte("");
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.LowercaseTextconverter}
      byte={byte}
      onChangeCb={onChangeCb}
    />
  );
}

export default ToLowercase;
