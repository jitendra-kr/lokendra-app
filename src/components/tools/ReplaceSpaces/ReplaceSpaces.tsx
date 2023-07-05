import { Input, Layout } from "antd";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToolKeys } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
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

  return (
    <InputOutputViewer
      inputChild={
        <div className="col-lg-6">
          <Input
            className={ReplaceSpacesStyles.Input}
            placeholder="Please enter the text you would like to replace"
            onChange={(v) => {
              setToReplace(v.target.value);
            }}
          />
          <InputToConvertByTools onChangeCb={(v) => setInput(v)} />
        </div>
      }
      outputChild={
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
      }
      toolId={ToolKeys.ReplaceSpaces}
      byte={byte}
    />
  );
}

export default withRouter(ReplaceSpaces);
