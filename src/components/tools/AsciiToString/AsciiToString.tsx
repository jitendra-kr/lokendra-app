import { Layout } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList, toolsListData } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolDescription } from "../helper/ToolDescription";
const { Content } = Layout;

function AsciiToString() {
  const { value } = useGetToolsInput();
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
  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.ASCIItoString;
  });

  return (
    <>
      <Content>
        <OfflineMetaTags tagId={ToolKeys.ASCIItoString} />
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6">
            <InputToConvertByTools
              rules={[
                {
                  required: true,
                  message: "Please enter ASCII codes to convert!",
                },
                { validator: () => {} },
              ]}
              onChangeCb={onChangeCb}
            />
          </div>
          <div className="col-lg-6">
            <ConvertedOutputByTools content={byte} />
          </div>
        </div>

        <ToolDescription content={result[0].toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(AsciiToString);
