"use client";
import { useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function ToLowercase() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toLowerCase());
    } else {
      setByte("");
    }
  };

  return <InputOutputViewer byte={byte} onChangeCb={onChangeCb} />;
}

export default ToLowercase;
