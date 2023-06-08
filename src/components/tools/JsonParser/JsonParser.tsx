import { Layout } from "antd";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import InputToConvertByToolsStyles from "../../../components/tools/helper/InputToConvertByTools/InputToConvertByTools.module.css";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { useGetUrlPath } from "../../../hooks";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, jsonStringifyPath, toolsListData } from "../ToolsList";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../helper/JsonViewer";
import { ToolDescription } from "../helper/ToolOverview";

const Editor = dynamic(() => import("../../common/Ide/Ide"), {
  ssr: false,
});

const { Content } = Layout;

function JsonParser() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<unknown>();
  const [editorError, setEditorError] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const { pathname } = useGetUrlPath();
  const onError = (errormsg: string | undefined) => {
    console.log("onError");
    console.log(errormsg);
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
    console.log("change");
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
      if (pathname.includes(jsonStringifyPath)) {
        if (str.includes(`\": `)) {
          str = JSON.parse(str);
        } else {
          str = str.trim();
          str = str.substring(1, str.length - 1);
        }
      }
      if (!str) {
        resetStates();
        return;
      }
      str = str.replace(/\r?\n?\s/g, "");
      str = str.replaceAll(
        /\b(Object)\b/g,
        `"${STRING_CONSTANTS.tools.internalObject}"`,
      );
      str = str.replaceAll(
        /\b(Array)\b/g,
        `"${STRING_CONSTANTS.tools.internalArray}"`,
      );

      parsedJSON = JSON.parse(str);
      if (typeof parsedJSON === "number") {
        throw "Invalid JSON";
      }
    } catch (error: unknown) {
      setError(error);
      setByte(`${STRING_CONSTANTS.tools.invalidJson}`);
      return false;
    }
    setByte(parsedJSON);
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
            <Editor cb={isJsonString} error={onError} />
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
