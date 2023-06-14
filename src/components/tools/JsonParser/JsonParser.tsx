import { Layout } from "antd";
import { get } from "lodash";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { jsonlint } from "../../../externalLib";
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

  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.JSONParser;
  });

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.JSONParser} />

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <div>
            <Ide cb={isJsonString} error={onError} />
          </div>
        </div>
        <div className="col-lg-6">
          <JsonViewer content={byte} error={error} editorError={editorError} />
        </div>
      </div>
      <ToolDescription content={result[0].toolDescription} />
      <ToolsList />
    </Content>
  );
}

export default withRouter(JsonParser);
