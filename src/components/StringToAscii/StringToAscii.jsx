import { Input, Layout, Button, Divider } from "antd";
import { withRouter } from "next/router";
import React, { useState } from "react";
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
      <Content
        style={{
          display: "flex",
          "justify-content": "center",
        }}
      >
        <div className={styles["input-width"]}>
          <Input style={{height: "50px"}} onChange={onChange}></Input>
          {byte.length > 0 && <h3 style={{textAlign: "center", marginTop: "30px"}} >[{byte.toString()}]</h3>}
        </div>
        <Button
            onClick={onClick}
            type="primary"
            style={{              
              height: "50px",
              marginLeft: "10px"
            }}
          >
            Convert
          </Button>
      </Content>
    </>
  );
}

export default withRouter(StringToAscii);
