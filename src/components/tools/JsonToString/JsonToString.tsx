import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
const { Content } = Layout;

function JsonToString() {

  const [byte, setByte] = useState<string>("");

  function isJsonString(str: string) {
    try {
      JSON.parse(str);  
    } catch (e) {
      setByte("Invalid JSON")
      return false;
    }
    setByte(JSON.stringify(str.replace(/\n/g, "")));    
    return true;
  }

  const onChange = (value: string) => {  };


  return (
    <>
      <Content>
      <OfflineMetaTags tagId={ToolKeys.JSONtostring}/>
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter JSON!" }, {
              validator: async (_: any, value: any) => {
                if (!isJsonString(value)) {                  
                  return Promise.reject('Please enter valid JSON!');
                } else {
                  return Promise.resolve()
                }
              }
            }]} onChangeCb={isJsonString} />
            <div >
              Want to parse JSON ? use
              <Link href="/tools/json-parser" >&nbsp; JSON parser </Link>
            </div>
          </div>
          <div className="col-lg-6" >
            <ConvertedOutputByTools content={byte} />
          </div>
        </div>
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(JsonToString);
