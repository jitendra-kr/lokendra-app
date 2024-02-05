"use client"
import { useState } from "react";
import { xmlToJson } from "../../../../utils/xml/xmlToJson";
import Ide from "../../../common/Ide/Ide";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { JsonViewer } from "../../helper/JsonViewer";

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
    const { data, msg } = xmlToJson(str) as any;
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
        <div className="col-lg-6">
          <Ide
            language="xml"
            cb={ideCb}
            error={onError}
            options={{ repair: false }}
          />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          {true && (
            <JsonViewer
              content={byte}
              error={error}
              editorError={editorError}
            />
          )}
        </div>
      }
      toolId={ToolKeys.XML_TO_JSON}
      byte={byte}
    />
  );
}
