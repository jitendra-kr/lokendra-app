import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { useToolListData } from "../../../common/hooks/useToolListData";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolDescription } from "../helper/ToolOverview";

const { Content } = Layout;

function StringToAscii() {
  const { toolData } = useToolListData(ToolKeys.StringtoASCII);
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
      <OfflineMetaTags tagData={toolData} />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <InputToConvertByTools onChangeCb={onChangeCb} />
        </div>
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte.join(" ")} />
        </div>
      </div>
      <ToolDescription content={toolData.toolDescription} />

      <ToolsList />
    </Content>
  );
}

export default withRouter(StringToAscii);
