"use client";
import Ide from "@ft/components/common/Ide/Ide";
import { useState } from "react";
import { jsonlint } from "../../../externalLib/jsonLint";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

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
        <Ide
          cb={isJsonString}
          error={onError}
          options={{ format: true, repair: true }}
        />
      }
      byte={byte}
    />
  );
}

export default JsonToString;
