import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OfflineMetaTags } from "../../common";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsBody } from "../ToolsBody";
import { ToolsList } from "../ToolsList";
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";

const { Content } = Layout;

function StringToAscii() {
  
  const { value } = useGetToolsInput()
  const [byte, setByte] = useState<Array<string>>([]);

  const textToASCIIConvert = (text: string) => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(text);
    setByte(byteArray as any);
  }


  useEffect(() => {
    textToASCIIConvert(value)
  }, [value]);

  return (
    <Content >
      <OfflineMetaTags />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6" >
          <InputToConvertByTools rules={[{ required: true, message: "Please enter text !" }]} onChangeCb={() => { }} />
          <div>
            Want to convert ASCII to text ? use
            <Link href="/tools/ascii-to-string" >&nbsp; ASCII to text converter </Link>
          </div>
        </div>
        <div className="col-lg-6" >
          <ConvertedOutputByTools content={byte.join(" ")} />
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(StringToAscii);
