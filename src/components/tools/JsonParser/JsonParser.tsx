"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { beautifyJSON } from "../../../utils";
import { Faq } from "../../common";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import jsonParserFaqData from "./jsonParserFaqData";
import jsonValidatorFaqData from "./jsonValidatorFaqData";

const Ide = dynamic(() => import("@ft/components/common/Ide/Ide"));
const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

type JsonParserProps = {
  toolKey: ToolKeys.JSONParser | ToolKeys.JSON_VALIDATOR;
};
function JsonParser({ toolKey }: JsonParserProps) {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errorMsg: string | undefined) => {
    if (errorMsg) {
      setEditorError(errorMsg);
      return;
    }
    setEditorError("");
  };

  const resetStates = () => {
    setError("");
    setByte("");
  };

  function isJsonString(str: string | undefined) {
    if (!str) {
      resetStates();
      return;
    }

    if (editorError) {
      setEditorError("");
    }
    if (error) {
      setError("");
    }
    const { beautifiedData, msg } = beautifyJSON(str);
    if (beautifiedData) {
      setByte(beautifiedData);
    }
    if (msg) {
      setError(msg);
    }
  }

  return (
    <>
      <InputOutputViewer
        inputChild={
          <Ide cb={isJsonString} error={onError} options={{ repair: true }} />
        }
        outputChild={
          <JsonViewer content={byte} error={error} editorError={editorError} />
        }
        toolId={toolKey}
        byte={byte}
      />
      <Faq
        data={
          toolKey === ToolKeys.JSONParser
            ? jsonParserFaqData
            : jsonValidatorFaqData
        }
      ></Faq>
    </>
  );
}

export default JsonParser;
