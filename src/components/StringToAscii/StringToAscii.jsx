import { Input, Layout, Button, Form } from "antd";
import { withRouter } from "next/router";
import React, { useState } from "react";
import AppHead from "../Head/head";
const { Content } = Layout;

import styles from "../../../styles/StringToAscii.module.css";

function StringToAscii() {
  const [input, setInput] = useState("");
  const [byte, setByte] = useState([]);

  const onChange = ({ target: { value } }) => {
    setInput(value);
  };
  const onClick = () => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(input);
    console.log(byteArray);
    setByte(byteArray);
  };
  return (
    <>
      <Content style={{ padding: "50px 50px" }}>
        <AppHead data={{ title: "String to ascii" }} />
        <div style={{
          display: "flex",
          "justify-content": "center",
        }}>

          <Form className={styles["input-width"]}>
            <div >
              <Input className={styles["input"]} onChange={onChange} placeholder="Please enter" ></Input>
            </div>
            <div className={styles['button-div']} >

              <Button
                onClick={onClick}
                type="primary"
                htmlType="submit"
                style={{
                  height: "50px",
                  marginTop: "30px",
                  textAlign: "center"
                }}
              >
                Convert
              </Button>
            </div>
            <div>

              {byte.length > 0 && <h3 style={{ textAlign: "center", marginTop: "30px", "word-wrap": "break-word" }} >[{byte.toString()}]</h3>}
            </div>
          </Form>
        </div>
      </Content>
    </>
  );
}

export default withRouter(StringToAscii);
