import { Input, Layout, Button, Form } from "antd";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AppHead from "../Head/head";
const { Content } = Layout;

import styles from "../../../styles/StringToAscii.module.css";
import { useGetUrl } from "../../hooks";

function StringToAscii() {
  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";

  const [copyToText, setCopyTotext] = useState(copyToClip)
  const [input, setInput] = useState("");
  const [byte, setByte] = useState([]);
  const { url } = useGetUrl();

  const updateCopytext = () => {
    if(copyToText === copiedToClip) {
      setTimeout(() => {
        setCopyTotext(copyToClip)
      }, 3000);
    }
  }
  const onChange = ({ target: { value } }) => {
    setInput(value);
    updateCopytext()
  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(byte.join(" ")).then(() => {
        setCopyTotext(copiedToClip)
      })
    } catch (e) {
      alert("failed to copy")

    }

  }

  const onClick = () => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(input);
    console.log(byteArray);
    setByte(byteArray);
    setCopyTotext(copyToClip)

  };

  useEffect(() => {
    updateCopytext()
  }, [copyToText]);

  return (
    <>
      <Content style={{ padding: "50px 50px" }}>
        <AppHead data={{
          title: "convert string to ascii | text to ASCII converter - online string tools",
          meta_description: "Useful, Simple and free online tool that converts string or plain text to ASCII codes in easy steps. Just type your text and it will convert to ASCII",
          url
        }} />

        <div style={{
          display: "flex",
          "justify-content": "center",
        }}>
          <div className="row" style={{ width: "100%", justifyContent: "center" }} >

            <h1 style={{textAlign: "center", marginBottom: "30px"}}>
              String to ASCII converter
            </h1>
 
            <Form className={styles["input-width"]}>
            <div >
              <Form.Item
                name="title"
                label=""
                rules={[{ required: true, message: "Please enter text !" }]}
              >
                <Input className={styles["input"]} onChange={onChange} placeholder="Please enter" ></Input>
              </Form.Item>

            </div>
            <div className={styles['button-div']} >

              <Button
                onClick={onClick}
                type="primary"
                htmlType="submit"
                style={{
                  height: "50px",
                  marginTop: "10px",
                  textAlign: "center"
                }}
              >
                Convert
              </Button>
            </div>
            <div>
            {byte.length > 0 && <p onClick={copyToClipboard} className={styles.CopyToClipboardTxt}>{copyToText}</p>}
            {byte.length > 0 && <div className={styles["ascii-div"]} >
            <h3 className={styles.asciiCode} >[{byte.join(" ")}]</h3>
                </div>}
            </div>
          </Form>
          </div>

        </div>
      </Content>
    </>
  );
}

export default withRouter(StringToAscii);
