import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { useGetUrlPath } from "../../../hooks";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, jsonStringifyPath, toolsListData } from "../ToolsList";
import { ToolsList } from "../ToolsList/ToolsList";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { JsonViewer } from "../helper/JsonViewer";
import { ToolDescription } from "../helper/ToolOverview";
const { Content } = Layout;

function JsonParser() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<unknown>();
  const [input, setInput] = useState("");

  const { pathname } = useGetUrlPath();

  function isJsonString(str: string) {
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
      str = str.replace(/\r?\n?\s/g, "");
      str = str.replaceAll(
        /\b(Object)\b/g,
        `"${STRING_CONSTANTS.tools.internalObject}"`,
      );
      str = str.replaceAll(
        /\b(Array)\b/g,
        `"${STRING_CONSTANTS.tools.internalArray}"`,
      );

      const data = JSON.parse(str);
      if (typeof data === "number") {
        throw "Invalid JSON";
      }
    } catch (error: unknown) {
      setError(error);
      setByte(`${STRING_CONSTANTS.tools.invalidJson}`);
      return false;
    }
    setByte(JSON.parse(str));
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
          <InputToConvertByTools
            rules={[
              { required: true, message: "Please enter" },
              {
                validator: async (_: any, value: any) => {
                  if (!isJsonString(value)) {
                    return Promise.reject("Please enter valid JSON!");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
            onChangeCb={isJsonString}
            row={26}
          />
        </div>
        <div className="col-lg-6">
          <JsonViewer content={byte} error={error} input={input} />
        </div>
      </div>
      <ToolDescription content={result[0].toolDescription} />

      <ToolsList />
    </Content>
  );
}

export default withRouter(JsonParser);
