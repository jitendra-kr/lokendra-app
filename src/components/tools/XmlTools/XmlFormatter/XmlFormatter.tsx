"use client";
import Ide from "@ft/components/common/Ide/Ide";
import { formatXml } from "@ft/utils/xml/formatXml";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import JsonViewer from "../../helper/JsonViewer/JsonViewer";

export function XmlFormatter() {
  const [byte, setByte] = useState<string>("");
  const [errors, setErrors] = useState<{ error: string; editorError: string }>({
    error: "",
    editorError: "",
  });

  const onError = (errorMsg: string | undefined) => {
    setErrors((prev) => ({ ...prev, editorError: errorMsg || "" }));
  };

  const resetStates = () => {
    setErrors({ error: "", editorError: "" });
    setByte("");
  };

  const onChange = async (str: string | undefined) => {
    if (!str) {
      resetStates();
      return;
    }

    if (errors.editorError) {
      setErrors((prev) => ({ ...prev, editorError: "" }));
    }
    if (errors.error) {
      setErrors((prev) => ({ ...prev, error: "" }));
    }
    const { data, msg } = await formatXml(str);
    if (data) {
      setByte(data);
    }
    if (msg) {
      setErrors((prev) => ({ ...prev, error: msg }));
    }
  };

  return (
    <InputOutputViewer
      inputChild={
        <Ide
          language="xml"
          cb={onChange}
          error={onError}
          options={{ repair: false }}
        />
      }
      outputChild={
        <JsonViewer
          language="xml"
          content={byte}
          error={errors.error}
          editorError={errors.editorError}
        />
      }
      byte={""}
    />
  );
}
