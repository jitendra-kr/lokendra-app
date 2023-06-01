import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";

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
