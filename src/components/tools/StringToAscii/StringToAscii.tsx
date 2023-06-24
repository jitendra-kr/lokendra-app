import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList, toolsListData } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolDescription } from "../helper/ToolOverview";

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
  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.StringtoASCII;
  });

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.StringtoASCII} />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <InputToConvertByTools
            onChangeCb={onChangeCb}
          />
        </div>
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte.join(" ")} />
        </div>
      </div>
      <ToolDescription content={result[0].toolDescription} />

      <ToolsList />
    </Content>
  );
}

export default withRouter(StringToAscii);
