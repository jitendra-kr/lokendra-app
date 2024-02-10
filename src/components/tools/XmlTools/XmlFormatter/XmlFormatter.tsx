"use client";
import { useState } from "react";
import { formatXml } from "../../../../utils";

import dynamic from "next/dynamic";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";

const Ide = dynamic(() => import("@ft/components/common/Ide/Ide"));
const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

export function XmlFormatter() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errormsg: string | undefined) => {
    if (errormsg) {
      setEditorError(errormsg);
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
      toolId={ToolKeys.XML_FORMATTER}
      byte={byte}
    />
  );
}
