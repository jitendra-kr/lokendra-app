import { Layout } from "antd";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link"
import AppHead from "../../Head/head";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../../hooks";
import { messageSuccess } from "../../../utils"
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsBody } from "../ToolsBody";
const { Content } = Layout;
import { ToolsList } from "../ToolsList";

function AsciiToString() {
  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";

  const [copyToText, setCopyTotext] = useState(copyToClip)
  const [byte, setByte] = useState("");
  const { url } = useGetUrl();

  const updateCopytext = () => {
    if (copyToText === copiedToClip) {
      setTimeout(() => {
        setCopyTotext(copyToClip)
      }, 3000);
    }
  }
  const onChange = (value) => {
    const string = asciiToSentence(value);
    setByte(string);
    setCopyTotext(copyToClip)
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

  function asciiToSentence(str) {
    let sentence = "";
    var num = 0;
    for (var i = 0; i < str.length; i++) {
      num = num * 10 + (str[i] - '0');
      if (num >= 32 && num <= 122) {
        var ch = String.fromCharCode(num);
        sentence += ch;
        num = 0;
      }
    }
    return sentence;
  }


  useEffect(() => {
    updateCopytext()
  }, [copyToText]);

  return (
    <>
      <Content >
        <AppHead data={{
          title: "convert ascii to string | ASCII to text converter - online string tools",
          meta_description: "Useful, Simple and free online tool that converts ASCII codes to string or plain text to in easy steps. Just type your text and it will convert to ASCII",
          url
        }} />

        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter ASCII codes to convert!" }]} onChangeCb={onChange} placeholder={'Please enter ASCII'} />
            <div>
              Want to convert Text to ASCII? use
              <Link href="/tools/string-to-ascii">&nbsp;Text to ASCII converter </Link>
            </div>

          </div>
          <div className="col-lg-6" >
            <ConvertedOutputByTools content={byte} copyToClipboardCb={copyToClipboard} copyToText={copyToText} />
          </div>
        </div>

        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(AsciiToString);
