"use client";
import Faq from "@ft/components/common/Faq";
import { formatXml } from "@ft/utils/xml/formatXml";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ToolKeys } from "../../ToolsList/ToolKeys";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import XmlFormatterFaqData from "./XmlFormatterFaqData";

const Ide = dynamic(() => import("@ft/components/common/Ide/Ide"));
const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

export function XmlFormatter() {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errormsg: string | undefined) => {
    if (errormsg) {
      setEditorError(errormsg);
      return;
    }
    setEditorError("");
  };

  const resetStates = () => {
    setError("");
    setByte("");
  };

  async function ideCb(str: string | undefined) {
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
    const { data, msg } = await formatXml(str);
    if (data) {
      setByte(data);
    }
    if (msg) {
      setError(msg);
    }
  }

  return (
    <>
      <InputOutputViewer
        inputChild={
          <Ide
            language="xml"
            cb={ideCb}
            error={onError}
            options={{ repair: false }}
          />
        }
        outputChild={
          <JsonViewer
            language="xml"
            content={byte}
            error={error}
            editorError={editorError}
          />
        }
        toolId={ToolKeys.XML_FORMATTER}
        byte={byte}
      />
      <Faq data={XmlFormatterFaqData}></Faq>
    </>
  );
}
