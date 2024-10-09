"use client";
import { useState } from "react";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function ToLowercase({ children }: { children: React.ReactNode }) {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toLowerCase());
    } else {
      setByte("");
    }
  };

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.LowercaseTextconverter}
        byte={byte}
        onChangeCb={onChangeCb}
      />
      {children}
    </>
  );
}

export default ToLowercase;
