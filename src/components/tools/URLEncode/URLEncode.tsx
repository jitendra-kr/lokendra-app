"use client";
import CustomSelect from "@ft/common/components/UiComponent/CustomSelect";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import { EncodeURLInJavascript } from "./EncodeURLInJavascript";

type SelectEncodingFn = "encodeURIComponent" | "encodeURI";
const options: { value: SelectEncodingFn; label: SelectEncodingFn }[] = [
  { value: "encodeURIComponent", label: "encodeURIComponent" },
  { value: "encodeURI", label: "encodeURI" },
];

function SelectEncodeFn({
  selectEncodingFn,
}: {
  selectEncodingFn: Dispatch<SetStateAction<SelectEncodingFn>>;
}) {
  return (
    <CustomSelect
      onChange={(value: SelectEncodingFn) => {
        selectEncodingFn(value);
      }}
      label="Select format"
      options={options}
      defaultValue={options[0].value}
    />
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
