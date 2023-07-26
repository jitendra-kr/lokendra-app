import { withRouter } from "next/router";
import { useState } from "react";
import { beautifyJSON } from "../../../utils";
import Ide from "../../common/Ide/Ide";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { JsonViewer } from "../helper/JsonViewer";

function JsonParser() {
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
    const { beautifiedData, msg } = beautifyJSON(str);
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
          <Ide cb={isJsonString} error={onError} options={{ repair: true }} />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          <JsonViewer content={byte} error={error} editorError={editorError} />
        </div>
      }
      toolId={ToolKeys.JSONParser}
      byte={byte}
    />
  );
}

export default withRouter(JsonParser);
