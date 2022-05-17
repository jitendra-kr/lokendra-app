import { Input, Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
// import JSONBig from 'json-bigint';
import React, { useState, useEffect } from "react";
import AppHead from "../../Head/head";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../../hooks";
import { messageSuccess } from "../../../utils"
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../JsonViewer";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { ToolsBody } from "../ToolsBody";
const { Content } = Layout;

function JsonParser() {

  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";
  const [copyToText, setCopyTotext] = useState(copyToClip)
  const [byte, setByte] = useState<string>("");
  const { url } = useGetUrl();

  const updateCopytext = () => {
    if (copyToText === copiedToClip) {
      setTimeout(() => {
        setCopyTotext(copyToClip)
      }, 3000);
    }
  }

  function isJsonString(str: string) {
    try {
      const data = JSON.parse(str) 
      if (typeof data === "number") {
        throw "Invalid JSO"
      }
    } catch (e) {
      setByte(STRING_CONSTANTS.tools.invalidJson)
      return false;
    }
    setByte(JSON.parse(str));  
    return true;
  }

  const onChange = (value: string) => {  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(byte).then(() => {
        setCopyTotext(copiedToClip)
        messageSuccess({ content: "Copied to clipboard", key: "Copiedtoclipboard", duration: 4 });
      })
    } catch (e) {
      alert("failed to copy")
    }
  }

  useEffect(() => {
    updateCopytext()
  }, [copyToText]);

  return (
    <>
      <Content>
        <AppHead data={{
          title: "JSON parser online",
          meta_description: "Useful, Simple, free and secure online JSON Parser. Processing is being done locally without sending any data to the server. Our tool can convert multiline content with full accuracy. Just type your JSON and it will convert to string",
          url
        }} />

        <div className={`${styles.mainDiv} row`}>
          <ToolsBody/>
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
            <JsonViewer content={byte} copyToClipboardCb={copyToClipboard} copyToText={copyToText} />
          </div>
        </div>
        <ToolsList />

      </Content>
    </>
  );
}

export default withRouter(JsonParser);
