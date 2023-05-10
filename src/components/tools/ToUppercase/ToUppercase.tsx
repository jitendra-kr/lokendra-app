import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";

const { Content } = Layout;

function ToUppercase() {
  const { value } = useGetToolsInput()
  const [byte, setByte] = useState<string>("");

  useEffect(() => {
    if (value) {
      setByte(value.toUpperCase());
    } else {
      setByte("")
    }
  }, [value]);

  return (
    <Content >
            <OfflineMetaTags tagId={ToolKeys.UppercaseTextconverter}/>

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6" >
          <InputToConvertByTools rules={[{ required: true, message: "Please enter text !" }]} onChangeCb={() => {}} />
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
