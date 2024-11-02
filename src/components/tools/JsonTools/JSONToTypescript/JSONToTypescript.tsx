"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

import beautifyJSON from "@ft/utils/json/beautifyJSON";
import { EditorCallBackOptions } from "../../../common/Ide/Ide";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

const Ide = dynamic(() => import("@ft/components/common/Ide/Ide"));
const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

export function JSONToTypescript() {
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
    setEditorError("");
  };

  const isJsonString = async (
    str: string | undefined,
    options?: EditorCallBackOptions,
  ) => {
    if (!str) {
      resetStates();
      return;
    }
    const { beautifiedData, msg } = await beautifyJSON(str);

    if (beautifiedData) {
      const { run } = await import("json_typegen_wasm");
      const data = run(
        "Root",
        beautifiedData,
        JSON.stringify({
          output_mode: options?.monoType
            ? "typescript/typealias"
            : "typescript",
        }),
      );
      setError("");
      setByte(data);
    }

    if (msg) {
      setError(msg);
    }
  };

  return (
    <InputOutputViewer
      inputChild={
        <Ide
          cb={isJsonString}
          error={onError}
          options={{ monotype: true, format: true, repair: true }}
        />
      }
      outputChild={
        <JsonViewer
          content={byte}
          error={error}
          editorError={editorError}
          language={"typescript"}
        />
      }
      byte={byte}
    />
  );
}
