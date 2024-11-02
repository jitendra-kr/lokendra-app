"use client";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

export function RemoveSpaces() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.replace(/ /g, ""));
    } else {
      setByte("");
    }
  };

  return <InputOutputViewer byte={byte} onChangeCb={onChangeCb} />;
}
