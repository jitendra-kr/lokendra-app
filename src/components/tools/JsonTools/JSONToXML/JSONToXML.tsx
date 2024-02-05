"use client";
import { useState } from "react";
import { convertJSONToXML } from "../../../../utils";
import Ide from "../../../common/Ide/Ide";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { JsonViewer } from "../../helper/JsonViewer";

export function JSONToXML() {
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

  function ideCb(str: string | undefined) {
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
    const { data, msg } = convertJSONToXML(str) as any;
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
        <div className="col-lg-6">
          <Ide
            language="json"
            cb={ideCb}
            error={onError}
            options={{ repair: true }}
          />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          <JsonViewer
            language="xml"
            content={byte}
            error={error}
            editorError={editorError}
          />
        </div>
      }
      toolId={ToolKeys.JSON_TO_XML}
      byte={byte}
    />
  );
}
