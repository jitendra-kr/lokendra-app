"use client";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { ToolKeys } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import ReplaceSpacesStyles from "./ReplaceSpaces.module.css";

function ReplaceSpaces() {
  const [byte, setByte] = useState("");
  const [input, setInput] = useState(" ");
  const [toReplace, setToReplace] = useState(" ");
  const [replaceWith, setReplaceWith] = useState("");

  function replaceWithUnderscore() {
    if (!input || input === " ") {
      setByte("");
      return;
    }
    var reg = new RegExp(toReplace ? toReplace : / /, "g");
    console.log("byte", input.length);
    setByte(input.replace(reg, replaceWith ? replaceWith : "_"));
  }

  useEffect(() => {
    replaceWithUnderscore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, toReplace, replaceWith]);

  return (
    <InputOutputViewer
      inputChild={
        <>
          <Input
            className={ReplaceSpacesStyles.Input}
            placeholder="Please enter the text you would like to replace"
            onChange={(v) => {
              setToReplace(v.target.value);
            }}
          />
          <InputToConvertByTools onChangeCb={(v) => setInput(v)} />
        </>
      }
      outputChild={
        <>
          <Input
            className={ReplaceSpacesStyles.Input}
            placeholder="Please enter the replacement"
            onChange={(v) => {
              setReplaceWith(v.target.value);
            }}
          />
          <ConvertedOutputByTools content={byte} />
        </>
      }
      toolId={ToolKeys.ReplaceSpaces}
      byte={byte}
    />
  );
}

export default ReplaceSpaces;
