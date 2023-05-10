import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../helper/JsonViewer";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
import { useGetUrlPath } from "../../../hooks";
import { ToolKeys, jsonUnstringifyPath } from "../ToolsList";
const { Content } = Layout;

function JsonParser() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<unknown>();

  const { pathname } = useGetUrlPath();

  function isJsonString(str: string) {

    try {
      if (pathname.includes(jsonUnstringifyPath)) {
        if (str.includes(`\": `)) {
          str = JSON.parse(str);
        } else {
          str = str.trim();
          str = str.substring(1, str.length - 1);
        }
      }
      str = str.replace(/\r?\n?\s/g, '');
      str = str.replaceAll(/\b(Object)\b/g, `"${STRING_CONSTANTS.tools.internalObject}"`);
      str = str.replaceAll(/\b(Array)\b/g, `"${STRING_CONSTANTS.tools.internalArray}"`);

      const data = JSON.parse(str);
      if (typeof data === "number") {
        throw "Invalid JSON"
      }

    } catch (error: unknown) {
      setError(error)
      setByte(`${STRING_CONSTANTS.tools.invalidJson}`)
      return false;
    }
    setByte(JSON.parse(str));
    return true;
  }

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.JSONParser}/>

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6" >
          <InputToConvertByTools rules={[{ required: true, message: "Please enter" }, {
            validator: async (_: any, value: any) => {
              if (!isJsonString(value)) {
                return Promise.reject('Please enter valid JSON!');
              } else {
                return Promise.resolve()
              }
            }
          }]} onChangeCb={isJsonString} />
          <div >
            Want to stringify JSON ? use
            <Link href="/tools/json-to-string" >&nbsp; stringify JSON </Link>
          </div>
        </div>
        <div className="col-lg-6" >
          <JsonViewer content={byte} error={error} />
        </div>
      </div>
      <ToolsList />

    </Content>
  );
}

export default withRouter(JsonParser);
