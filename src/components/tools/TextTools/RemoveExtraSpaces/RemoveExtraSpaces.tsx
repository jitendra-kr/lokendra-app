"use client";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

export function RemoveExtraSpaces() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.replace(/^\s+|\s+$/g, "").replace(/[^\S\r\n]+/g, " "));
    } else {
      setByte("");
    }
  };

  return <InputOutputViewer byte={byte} onChangeCb={onChangeCb} />;
}
