"use client";
import Ide from "@ft/components/common/Ide/Ide";
import beautifyJSON from "@ft/utils/json/beautifyJSON";
import { useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import JsonViewer from "../helper/JsonViewer/JsonViewer";

const defaultOutput = {
  data: "",
  error: "",
  editorError: "",
};

function JsonParser() {
  const [output, setOutput] = useState(defaultOutput);

  const clearErrors = () => {
    setOutput((prev) => ({ ...prev, error: "", editorError: "" }));
  };

  const resetState = () => {
    setOutput({ data: "", error: "", editorError: "" });
  };

  const handleEditorError = (errorMsg: string | undefined) => {
    setOutput((prev) => ({ ...prev, editorError: errorMsg || "" }));
  };

  async function parseJson(input: string | undefined) {
    if (!input) {
      resetState();
      return;
    }

    clearErrors();

    try {
      const { beautifiedData, msg } = await beautifyJSON(input);
      setOutput((prev) => ({
        ...prev,
        data: beautifiedData || "",
        error: msg || "",
      }));
    } catch (e) {
      setOutput((prev) => ({
        ...prev,
        data: "",
        error: "Failed to parse JSON",
      }));
    }
  }

  return (
    <InputOutputViewer
      inputChild={
        <Ide
          cb={parseJson}
          error={handleEditorError}
          options={{ repair: true }}
        />
      }
      outputChild={
        <JsonViewer
          content={output.data}
          error={output.error}
          editorError={output.editorError}
        />
      }
      byte={""}
    />
  );
}

export default JsonParser;
