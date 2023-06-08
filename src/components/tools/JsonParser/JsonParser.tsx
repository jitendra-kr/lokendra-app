import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import InputToConvertByToolsStyles from "../../../components/tools/helper/InputToConvertByTools/InputToConvertByTools.module.css";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { OfflineMetaTags } from "../../common";
import Ide from "../../common/Ide/Ide";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, toolsListData } from "../ToolsList";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../helper/JsonViewer";
import { ToolDescription } from "../helper/ToolOverview";

const { Content } = Layout;

function JsonParser() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<unknown>();
  const [editorError, setEditorError] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onError = (errormsg: string | undefined) => {
    if (errormsg) {
      setEditorError(errormsg);
      return;
    }
    setEditorError("");
  };

  const resetStates = () => {
    setInput("");
    setError("");
    setByte("");
  };

  function isJsonString(str: string | undefined) {
    if (editorError) {
      setEditorError("");
    }

    let parsedJSON;
    if (!str) {
      resetStates();
      return;
    }
    setInput(str);
    try {
      parsedJSON = JSON.parse(str);
      if (typeof parsedJSON === "number") {
        throw "Invalid JSON";
      }
    } catch (error: unknown) {
      setError(error);
      setByte(`${STRING_CONSTANTS.tools.invalidJson}`);
      return false;
    }
    setByte(str);
    return true;
  }

  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.JSONParser;
  });

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.JSONParser} />

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <div className={InputToConvertByToolsStyles.container}>
            <Ide cb={isJsonString} error={onError} />
          </div>
        </div>
        <div className="col-lg-6">
          <JsonViewer
            content={byte}
            error={error}
            input={input}
            editorError={editorError}
          />
        </div>
      </div>
      <ToolDescription content={result[0].toolDescription} />
      <ToolsList />
    </Content>
  );
}

export default withRouter(JsonParser);
