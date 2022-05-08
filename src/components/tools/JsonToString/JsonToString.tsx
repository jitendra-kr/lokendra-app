import { Input, Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AppHead from "../../Head/head";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../../hooks";
import { messageSuccess } from "../../../utils"
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
const { Content } = Layout;
const { TextArea } = Input

type onChangeProp = {
  target: {
    value: string
  }
}

function JsonToString() {
  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";

  const [isInputValid, setIsInputValid] = useState<boolean>(false)
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
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const onChange = (value: string) => {
    if (isInputValid) {
      setByte(JSON.stringify(value));
    } else {
      setByte("")
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
      <Content>
        <AppHead data={{
          title: "convert string to ascii | text to ASCII converter - online string tools",
          meta_description: "Useful, Simple and free online tool that converts string or plain text to ASCII codes in easy steps. Just type your text and it will convert to ASCII",
          url
        }} />

        <div className={`${styles.mainDiv} row`}>
          <h1 className={styles.bodyTitle}>
            JSON to JSON string converter
          </h1>
          <p className={styles.bodyContent}>
            Just load your JSON, System will automatically it to JSON string or text
          </p>
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter JSON!" }, {
              validator: async (_: any, value: any) => {
                if (!isJsonString(value)) {
                  setIsInputValid(false)
                  return Promise.reject('Please enter valid JSON!');
                } else {
                  setIsInputValid(true)
                  return Promise.resolve()
                }
              }
            }]} onChangeCb={onChange} placeholder={'Please enter JSON to convertt'} />
            {/* <div >
              Want to parse JSON ? use
              <Link href="/tools/json-parser" >&nbsp; JSON parser </Link>
            </div> */}
          </div>
          <div className="col-lg-6" >
            <ConvertedOutputByTools content={byte} copyToClipboardCb={copyToClipboard} copyToText={copyToText} />
          </div>
        </div>
      </Content>
    </>
  );
}

export default withRouter(JsonToString);
