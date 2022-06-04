import { Layout } from "antd";
import Link from "next/link"
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";

const { Content } = Layout;


function ToLowercase() {

  const { value } = useGetToolsInput()
  const [byte, setByte] = useState<string>("");

  useEffect(() => {
    if (value) {
      setByte(value.toLowerCase());
    } else {
      setByte("")
    }
  }, [value]);


  return (
    <Content >
      <OfflineMetaTags />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6" >
          <InputToConvertByTools onChangeCb={() => { }} rules={[{ required: true, message: "Please enter text !" }]} />
          <div>
            Want to convert to Uppercase ? use
            <Link href="/tools/text-to-uppercase" >&nbsp; Uppercase converter </Link>
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

export default withRouter(ToLowercase);
