import { Layout } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { OfflineMetaTags } from "../../common";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList } from "../ToolsList";

const { Content } = Layout;

function StringToAscii() {
  const [byte, setByte] = useState<Array<string>>([]);

  const textToASCIIConvert = (text: string) => {
    const utf8Encode = new TextEncoder();
    const byteArray = utf8Encode.encode(text);
    setByte(byteArray as any);
  };

  const onChangeCb = (value: string) => {
    textToASCIIConvert(value);
  };

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.StringtoASCII} />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <InputToConvertByTools
            rules={[{ required: true, message: "Please enter text !" }]}
            onChangeCb={onChangeCb}
          />
          <div>
            Want to convert ASCII to text ? use
            <Link href="/tools/ascii-to-string">
              &nbsp; ASCII to text converter
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte.join(" ")} />
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(StringToAscii);
