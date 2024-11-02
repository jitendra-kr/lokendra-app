"use client";
import Ide from "@ft/components/common/Ide/Ide";
import beautifyJSON from "@ft/utils/json/beautifyJSON";
import { useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import JsonViewer from "../helper/JsonViewer/JsonViewer";

function JsonParser() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errorMsg: string | undefined) => {
    if (errorMsg) {
      setEditorError(errorMsg);
      return;
    }
    setEditorError("");
  };

  const resetStates = () => {
    setError("");
    setByte("");
  };

  async function isJsonString(str: string | undefined) {
    if (!str) {
      resetStates();
      return;
    }

    if (editorError) {
      setEditorError("");
    }
    if (error) {
      setError("");
    }
    const { beautifiedData, msg } = await beautifyJSON(str);
    if (beautifiedData) {
      setByte(beautifiedData);
    }
    if (msg) {
      setError(msg);
    }
  }

  return (
    <InputOutputViewer
      inputChild={
        <Ide cb={isJsonString} error={onError} options={{ repair: true }} />
      }
      outputChild={
        <JsonViewer content={byte} error={error} editorError={editorError} />
      }
      byte={byte}
    />
  );
}

export default JsonParser;
