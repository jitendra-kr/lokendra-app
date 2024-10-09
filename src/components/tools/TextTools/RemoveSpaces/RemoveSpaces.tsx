"use client";
import { useState } from "react";
import { ToolKeys } from "../../ToolsList/ToolKeys";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

export function RemoveSpaces() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.replace(/ /g, ""));
    } else {
      setByte("");
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.REMOVE_SPACES}
      byte={byte}
      onChangeCb={onChangeCb}
    />
  );
}
