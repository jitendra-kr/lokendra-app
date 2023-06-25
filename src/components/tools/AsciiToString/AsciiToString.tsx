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

function AsciiToString() {
  const { toolData } = useToolListData(ToolKeys.ASCIItoString);
  const [byte, setByte] = useState("");

  function asciiToSentence(str: any) {
    let sentence = "";
    var num = 0;
    let zero: any = "0";
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

  const onChangeCb = (value: string) => {
    if (value) {
      const string = asciiToSentence(value);
      setByte(string);
    } else {
      setByte("");
    }
  };

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={toolData} />
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6">
            <InputToConvertByTools onChangeCb={onChangeCb} />
          </div>
          <div className="col-lg-6">
            <ConvertedOutputByTools content={byte} />
          </div>
        </div>

        <ToolDescription content={toolData.toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(AsciiToString);
