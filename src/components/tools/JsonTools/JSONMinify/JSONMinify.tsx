import { useState } from "react";
import { minifyJSON } from "../../../../utils";
import Ide from "../../../common/Ide/Ide";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { JsonViewer } from "../../helper/JsonViewer";

export function JSONMinify() {
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

  function isJsonString(str: string | undefined) {
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
    const { beautifiedData, msg } = minifyJSON(str);
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
        <div className="col-lg-6">
          <Ide cb={isJsonString} error={onError} />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          <JsonViewer content={byte} error={error} editorError={editorError} />
        </div>
      }
      toolId={ToolKeys.JSON_MINIFIER}
      byte={byte}
    />
  );
}
