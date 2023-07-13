"use client";
import { useState } from "react";
import { beautifyJSON } from "../../../../utils";
import Ide, { EditorCallBackOptions } from "../../../common/Ide/Ide";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { JsonViewer } from "../../helper/JsonViewer";

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
  };

  const isJsonString = async (
    str: string | undefined,
    options?: EditorCallBackOptions,
  ) => {
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

    const { beautifiedData, msg } = beautifyJSON(str);

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
      setByte(data);
    }
    if (msg) {
      setError(msg);
    }
  };

  return (
    <InputOutputViewer
      inputChild={
        <div className="col-lg-6">
          <Ide cb={isJsonString} error={onError} options={{ monotype: true }} />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          <JsonViewer
            content={byte}
            error={error}
            editorError={editorError}
            language={"typescript"}
          />
        </div>
      }
      toolId={ToolKeys.JSON_TO_TYPESCRIPT}
      byte={byte}
    />
  );
}
