import { message } from "antd";
import { withRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { messageError } from "../../../utils";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function UUIDGenerator() {
  const limit = 50000;
  const [count, setCount] = useState(1);
  const [byte, setByte] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = "GeneratingUUID";

  const onChangeCb = (value: string) => {
    setCount(Number(value));
  };
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Generating UUID...",
    });
  };

  const onClick = () => {
    if (count > limit) {
      messageError({
        content: `Maximum of ${limit} UUIDs created at once.`,
      });
      return;
    }
    openMessage();
    setByte("");
    let uuidStr = "";

    for (let index = 0; index < count; index++) {
      const uuid = uuidv4();
      uuidStr += uuid + "\n";
    }
    setByte(uuidStr);
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: `${count} UUID generated!`,
        duration: 2,
      });
    }, 500);
  };

  return (
    <>
      {contextHolder}
      <InputOutputViewer
        toolId={ToolKeys.UUIDGenerator}
        byte={byte}
        onChangeCb={onChangeCb}
        input={true}
        onClick={onClick}
        inputNumber={true}
        placeholder={`Enter the desired number of UUIDs.: Max limit ${limit}`}
      />
    </>
  );
}

export default withRouter(UUIDGenerator);
