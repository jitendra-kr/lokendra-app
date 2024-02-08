"use client";
import { Select, Space, Tooltip } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import { EncodeURLInJavascript } from "./EncodeURLInJavascript";

type SelectEncodingFn = "encodeURIComponent" | "encodeURI";

function SelectEncodeFn({
  selectEncodingFn,
}: {
  selectEncodingFn: Dispatch<SetStateAction<SelectEncodingFn>>;
}) {
  return (
    <Tooltip title="Change encoding function">
      <Space wrap style={{ marginRight: "5px", marginTop: "5px" }}>
        <Select
          defaultValue="encodeURIComponent"
          style={{ width: 190 }}
          onChange={(value: SelectEncodingFn) => selectEncodingFn(value)}
          options={[
            { value: "encodeURIComponent", label: "encodeURIComponent" },
            { value: "encodeURI", label: "encodeURI" },
          ]}
        />
      </Space>
    </Tooltip>
  );
}

function URLEncode() {
  const [input, setInput] = useState("");
  const [byte, setByte] = useState("");
  const [encodingFn, selectEncodingFn] =
    useState<SelectEncodingFn>("encodeURIComponent");

  const encodeURIComponentCb = (value: string) => {
    try {
      const decodedSysRole = encodeURIComponent(value);
      setByte(decodedSysRole);
    } catch (_error) {
      const error = _error as Error;
      setByte(
        `${error.message}- It appears that the text you submitted is not valid url-encoded text.`,
      );
    }
  };

  const encodeURICb = (value: string) => {
    try {
      const decodedSysRole = encodeURI(value);
      setByte(decodedSysRole);
    } catch (_error) {
      const error = _error as Error;
      setByte(
        `${error.message}- It appears that the text you submitted is not valid url-encoded text.`,
      );
    }
  };

  useEffect(() => {
    if (encodingFn === "encodeURIComponent") {
      encodeURIComponentCb(input);
      return;
    }
    encodeURICb(input);
  }, [encodingFn, input]);

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.URLEncode}
        byte={byte}
        onChangeCb={(value) => setInput(value)}
        inputEditorActionChild={
          <SelectEncodeFn selectEncodingFn={selectEncodingFn} />
        }
      />
      <EncodeURLInJavascript />
    </>
  );
}

export default URLEncode;
