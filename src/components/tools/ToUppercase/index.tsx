"use client";
import { useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function ToUppercase() {
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
      <InputOutputViewer byte={byte} onChangeCb={onChangeCb} />
    </>
  );
}

export default ToUppercase;
