import { Layout } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";

const { Content } = Layout;

function ToLowercase() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toLowerCase());
    } else {
      setByte("");
    }
  };

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.LowercaseTextconverter} />

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <InputToConvertByTools
            onChangeCb={onChangeCb}
            rules={[{ required: true, message: "Please enter text !" }]}
          />
          <div>
            Want to convert to Uppercase ? use
            <Link href="/tools/text-to-uppercase">
              &nbsp; Uppercase converter
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte} />
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(ToLowercase);
