import { Input, Layout } from "antd";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList, toolsListData } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolDescription } from "../helper/ToolDescription";
import ReplaceSpacesStyles from "./ReplaceSpaces.module.css";
const { Content } = Layout;

function ReplaceSpaces() {
  const [byte, setByte] = useState("");
  const [input, setInput] = useState(" ");
  const [toReplace, setToReplace] = useState(" ");
  const [replaceWith, setReplaceWith] = useState("");

  function replaceWithUnderscore() {
    if (!input) {
      setByte("");
      return;
    }
    var reg = new RegExp(toReplace ? toReplace : / /, "g");
    setByte(input.replace(reg, replaceWith ? replaceWith : "_"));
  }

  useEffect(() => {
    replaceWithUnderscore();
  }, [input, toReplace, replaceWith]);

  const result = toolsListData.filter((obj) => {
    return obj.key === ToolKeys.ReplaceSpaces;
  });

  return (
    <>
      <Content>
        <OfflineMetaTags tagId={ToolKeys.ReplaceSpaces} />
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody className={ReplaceSpacesStyles.ToolsBody} />
          <div className="col-lg-6">
            <Input
              className={ReplaceSpacesStyles.Input}
              placeholder="Please enter the text you would like to replace"
              onChange={(v) => {
                setToReplace(v.target.value);
              }}
            />
            <InputToConvertByTools
              rules={[
                {
                  required: true,
                  message: "Please enter text!",
                },
              ]}
              onChangeCb={(v) => setInput(v)}
              row={20}
            />
          </div>
          <div className="col-lg-6">
            <Input
              className={ReplaceSpacesStyles.Input}
              placeholder="Please enter the replacement"
              onChange={(v) => {
                setReplaceWith(v.target.value);
              }}
            />
            <ConvertedOutputByTools content={byte} />
          </div>
        </div>
        <ToolDescription content={result[0].toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(ReplaceSpaces);
