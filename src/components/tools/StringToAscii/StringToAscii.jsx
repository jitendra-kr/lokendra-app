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

const { Content } = Layout;


function StringToAscii() {
  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";

  const [copyToText, setCopyTotext] = useState(copyToClip)
  const [byte, setByte] = useState([]);
  const { url } = useGetUrl();

  const updateCopytext = () => {
    if (copyToText === copiedToClip) {
      setTimeout(() => {
        setCopyTotext(copyToClip)
      }, 3000);
    }
  }

  const textToASCIIConvert = (text) => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(text);
    setByte(byteArray);
  }

  const onChange = (value) => {
    textToASCIIConvert(value)
  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(byte.join(" ")).then(() => {
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
          title: "convert string to ascii | text to ASCII converter - online string tools",
          meta_description: "Useful, Simple and free online tool that converts string or plain text to ASCII codes in easy steps. Just type your text and it will convert to ASCII",
          url
        }} />

        <div className={`${styles.mainDiv} row`}>
          <h1 className={styles.bodyTitle}>
            String to ASCII converter
          </h1>
          <p className={styles.bodyContent}>
            Just load your text, System will automatically convert it to ASCII codes
          </p>
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter text !" }]} onChangeCb={onChange} placeholder = {'Please enter text  to convert'} />
            <div>
              Want to convert ASCII to text ? use
              <Link href="/tools/ascii-to-string" >&nbsp; ASCII to text converter </Link>
            </div>
          </div>
          <div className="col-lg-6" >
          <ConvertedOutputByTools content = {byte.join(" ")} copyToClipboardCb = {copyToClipboard} copyToText = {copyToText}/>
          
          </div>
        </div>
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(StringToAscii);
