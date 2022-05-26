import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";

const { Content } = Layout;

function ToUppercase() {

  const [byte, setByte] = useState<string>("");

  const onChange = (value: string) => {
    if (value) {
      setByte(value.toUpperCase());
    }
  };

  return (
    <Content >
      <OfflineMetaTags />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6" >
          <InputToConvertByTools rules={[{ required: true, message: "Please enter text !" }]} onChangeCb={onChange} placeholder={'Please enter text  to convert'} />
          <div>
            Want to convert to Lowercase ? use
            <Link href="/tools/text-to-lowercase" >&nbsp; Lowercase converter </Link>
          </div>
        </div>
        <div className="col-lg-6" >
          <ConvertedOutputByTools content={byte} />

        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(ToUppercase);
