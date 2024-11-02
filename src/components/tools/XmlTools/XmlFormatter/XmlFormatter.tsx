"use client";
import Ide from "@ft/components/common/Ide/Ide";
import { formatXml } from "@ft/utils/xml/formatXml";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import JsonViewer from "../../helper/JsonViewer/JsonViewer";

export function XmlFormatter() {
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

  async function ideCb(str: string | undefined) {
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
    const { data, msg } = await formatXml(str);
    if (data) {
      setByte(data);
    }
    if (msg) {
      setError(msg);
    }
  }

  return (
    <>
      <InputOutputViewer
        inputChild={
          <Ide
            language="xml"
            cb={ideCb}
            error={onError}
            options={{ repair: false }}
          />
        }
        outputChild={
          <JsonViewer
            language="xml"
            content={byte}
            error={error}
            editorError={editorError}
          />
        }
        byte={byte}
      />
    </>
  );
}
