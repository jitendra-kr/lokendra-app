import { Layout } from "antd";
import { get } from "lodash";
import { withRouter } from "next/router";
import { useState } from "react";
import { useToolListData } from "../../../common/hooks/useToolListData";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { jsonlint } from "../../../externalLib";
import Ide from "../../common/Ide/Ide";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { JsonViewer } from "../helper/JsonViewer";

const { Content } = Layout;

function JsonParser() {
  const { toolData } = useToolListData(ToolKeys.JSONParser);
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

    try {
      const parsedJSON = jsonlint.parse(str);
      if (typeof parsedJSON === "number") {
        throw STRING_CONSTANTS.tools.invalidJson;
      }
      setByte(JSON.stringify(parsedJSON, null, "\t"));
    } catch (error: unknown) {
      setError(`${get(error, "name") + " \n" + get(error, "message")}  `);
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
      toolId={ToolKeys.JSONParser}
      byte={byte}
    />
  );
}

export default withRouter(JsonParser);
