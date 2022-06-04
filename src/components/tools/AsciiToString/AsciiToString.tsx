import { Layout } from "antd";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link"
import { OfflineMetaTags } from "../../common";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolsBody } from "../ToolsBody";
const { Content } = Layout;
import { ToolsList } from "../ToolsList";
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";


function AsciiToString() {

  const { value } = useGetToolsInput()
  const [byte, setByte] = useState("");

  function asciiToSentence(str: any) {
    let sentence = "";
    var num = 0;
    let zero: any = '0';
    for (var i = 0; i < str.length; i++) {
      num = num * 10 + (str[i] - zero);
      if (num >= 32 && num <= 122) {
        var ch = String.fromCharCode(num);
        sentence += ch;
        num = 0;
      }
    }
    return sentence;
  }

  useEffect(() => {
    if (value) {
      const string = asciiToSentence(value);
      setByte(string);
    } else {
      setByte("")
    }
  }, [value]);


  return (
    <>
      <Content >
        <OfflineMetaTags />

        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6" >
            <InputToConvertByTools rules={[{ required: true, message: "Please enter ASCII codes to convert!" }]} onChangeCb={() => {}} />
            <div>
              Want to convert Text to ASCII? use
              <Link href="/tools/string-to-ascii">&nbsp;Text to ASCII converter </Link>
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

export default withRouter(AsciiToString);
