"use client";
import { useState } from "react";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function ToUppercase({ children }: { children: React.ReactNode }) {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toUpperCase());
    } else {
      setByte("");
    }
  };

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.UppercaseTextConverter}
        byte={byte}
        onChangeCb={onChangeCb}
      />
      {children}
    </>
  );
}

export default ToUppercase;
