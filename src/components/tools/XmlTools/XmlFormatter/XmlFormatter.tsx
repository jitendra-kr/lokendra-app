import { useState } from "react";
import { formatXml } from "../../../../utils";
import Ide from "../../../common/Ide/Ide";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { JsonViewer } from "../../helper/JsonViewer";

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
    const { data, msg } = formatXml(str);
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
            language="xml"
            cb={ideCb}
            error={onError}
            options={{ repair: false }}
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
      toolId={ToolKeys.XML_FORMATTER}
      byte={byte}
    />
  );
}
