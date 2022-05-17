import { Input, Layout, Button, Form, notification } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AppHead from "../../Head/head";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../../hooks";
import { messageSuccess } from "../../../utils"
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";

const { Content } = Layout;


function ToLowercase() {
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
  
  const onChange = (value: string) => {
    if(value) {
      setByte(value.toLowerCase());
    }
  };

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
      <Content >
      <AppHead data={{
          title: "Text to Lowercase converter - online string tools",
          meta_description: "Useful, Simple and free online tool that converts text to lowercase in easy steps. Just type your text and it will convert to lowercase",
          url
        }} />

        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter text !" }]} onChangeCb={onChange} placeholder = {'Please enter text  to convert'} />
            <div>
              Want to convert to Uppercase ? use
              <Link href="/tools/text-to-uppercase" >&nbsp; Uppercase converter </Link>
            </div>
          </div>
          <div className="col-lg-6" >
          <ConvertedOutputByTools content = {byte} copyToClipboardCb = {copyToClipboard} copyToText = {copyToText}/>
          
          </div>
        </div>
        <ToolsList />

      </Content>
    </>
  );
}

export default withRouter(ToLowercase);
