"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { xmlToJson } from "../../../../utils/xml/xmlToJson";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

const Ide = dynamic(() => import("@ft/components/common/Ide/Ide"));
const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

export function XMLToJSON() {
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
    const { data, msg } = (await xmlToJson(str)) as any;
    if (data) {
      delete data["?xml"];
      setByte(JSON.stringify(data, null, "\t"));
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
        <JsonViewer content={byte} error={error} editorError={editorError} />
      }
      byte={byte}
    />
  );
}
