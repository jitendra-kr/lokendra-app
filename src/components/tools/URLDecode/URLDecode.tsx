"use client";
import { useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import { DecodeURLInJavascript } from "./DecodeURLInJavascript";

function URLDecode() {
  const [byte, setByte] = useState("");

  const onChangeCb = (value: string) => {
    try {
      const decodedSysRole = decodeURIComponent(value.replace(/\+/g, ""));
      setByte(decodedSysRole);
    } catch (_error) {
      const error = _error as Error;
      setByte(
        `${error.message}- It appears that the text you submitted is not valid url-encoded text.`,
      );
    }
  };

  return (
    <>
      <InputOutputViewer byte={byte} onChangeCb={onChangeCb} />
      <DecodeURLInJavascript />
    </>
  );
}

export default URLDecode;
