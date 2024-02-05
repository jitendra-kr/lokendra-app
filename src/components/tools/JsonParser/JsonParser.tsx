"use client";
import { useState } from "react";
import { beautifyJSON } from "../../../utils";
import { Faq } from "../../common";
import Ide from "../../common/Ide/Ide";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { JsonViewer } from "../helper/JsonViewer";
import jsonParserFaqData from "./jsonParserFaqData";
import jsonValidatorFaqData from "./jsonValidatorFaqData";

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
    <InputOutputViewer
      inputChild={
        <div className="col-lg-6">
          <Ide cb={isJsonString} error={onError} options={{ repair: true }} />
        </div>
      }
      outputChild={
        <div className="col-lg-6">
          <JsonViewer content={byte} error={error} editorError={editorError} />
        </div>
      }
      toolId={toolKey}
      byte={byte}
      pageContent={
        <>
          <Faq
            data={
              toolKey === ToolKeys.JSONParser
                ? jsonParserFaqData
                : jsonValidatorFaqData
            }
          ></Faq>
        </>
      }
    />
  );
}

export default JsonParser;
