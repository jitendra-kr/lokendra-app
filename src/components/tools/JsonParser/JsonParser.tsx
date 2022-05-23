import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../../hooks";
import { messageSuccess } from "../../../utils"
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsList } from "../ToolsList/ToolsList";
import { JsonViewer } from "../JsonViewer";
import { STRING_CONSTANTS } from "../../../constants/stringConstants";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
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
    console.log(str);
    try {
      str = str.replaceAll(": [Object]", `: "Object"`);
      str =  str.replace(/: [Object]/g, '"Object"');
      str = str.replace(/'/g, '"');

    console.log(str);

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

  const onChange = (value: string) => { };

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
    <Content>
      <OfflineMetaTags />
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
  );
}

export default withRouter(JsonParser);
