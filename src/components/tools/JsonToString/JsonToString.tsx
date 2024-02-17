"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { jsonlint } from "../../../externalLib";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer";

const Editor = dynamic(() => import("../../common/Ide/Ide"), {
  ssr: false,
});

function JsonToString() {
  const [byte, setByte] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errormsg: string | undefined) => {
    if (errormsg) {
      setEditorError(errormsg);
      return;
    }
    setEditorError("");
  };

  function isJsonString(str: string | undefined) {
    if (editorError) {
      setEditorError("");
    }
    if (!str) {
      setByte("");
      return;
    }
    let parsedData;
    try {
      parsedData = jsonlint.parse(str);
    } catch (e) {
      setByte("Invalid JSON ----> " + e);
    }
    const data = JSON.stringify(parsedData);
    if (parsedData && data) {
      setByte(data);
    }
  }

  return (
    <InputOutputViewer
      inputChild={
        <Editor
          cb={isJsonString}
          error={onError}
          options={{ format: true, repair: true }}
        />
      }
      toolId={ToolKeys.JSONtostring}
      byte={byte}
    />
  );
}

export default JsonToString;
