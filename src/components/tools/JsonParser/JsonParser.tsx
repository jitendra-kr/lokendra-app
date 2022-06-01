import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../JsonViewer";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
import { ShareData } from "../ShareData";
const { Content } = Layout;

function JsonParser() {
  const [byte, setByte] = useState<string>("");


  function isJsonString(str: string) {

    try {
      str = str.replace(/\r?\n?\s/g, '');
      str = str.replaceAll(/\b(Object)\b/g, `"${STRING_CONSTANTS.tools.internalObject}"`);
      str = str.replaceAll(/\b(Array)\b/g, `"${STRING_CONSTANTS.tools.internalArray}"`);

      const data = JSON.parse(str);
      if (typeof data === "number") {
        throw "Invalid JSON"
      }
      
    } catch (e) {
      setByte(STRING_CONSTANTS.tools.invalidJson)
      return false;
    }
    setByte(JSON.parse(str));
    return true;
  }

  const onChange = () => { };

  return (
    <Content>
      <OfflineMetaTags />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        {/* <ShareData data={byte} /> */}
        <div className="col-lg-6" >
          <InputToConvertByTools rules={[{ required: true, message: "Please enter" }, {
            validator: async (_: any, value: any) => {
              if (!isJsonString(value)) {
                return Promise.reject('Please enter valid JSON!');
              } else {
                return Promise.resolve()
              }
            }
          }]} onChangeCb={onChange} placeholder={'Please enter'} />
          <div >
            Want to stringify JSON ? use
            <Link href="/tools/json-to-string" >&nbsp; stringify JSON </Link>
          </div>
        </div>
        <div className="col-lg-6" >
          <JsonViewer content={byte} />
        </div>
      </div>
      <ToolsList />

    </Content>
  );
}

export default withRouter(JsonParser);
