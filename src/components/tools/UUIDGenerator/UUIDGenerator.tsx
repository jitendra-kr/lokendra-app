"use client";
import { Faq } from "@ft/components/common/Faq";
import { message } from "antd";
import { useEffect, useState } from "react";
import { messageError } from "../../../utils";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import UUIDGeneratorFaqData from "./UUIDGeneratorFaqData";

function UUIDGenerator() {
  const limit = 70000;
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

  const onClick = async () => {
    if (count > limit) {
      messageError({
        content: `Maximum of ${limit} UUIDs created at once.`,
      });
      return;
    }

    openMessage();
    setByte("");
    let uuidStr = "";
    const uuidv4 = (await import("uuid")).v4;
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

  useEffect(() => {
    onClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contextHolder}
      <InputOutputViewer
        toolId={ToolKeys.UUIDGenerator}
        byte={byte}
        onChangeCb={onChangeCb}
        input={{ showInput: true, buttonName: "Generate UUID" }}
        onClick={onClick}
        inputNumber={true}
        placeholder={`Enter the desired number of UUIDs.: Max limit ${limit}`}
      />
      <Faq data={UUIDGeneratorFaqData}></Faq>
    </>
  );
}

export default UUIDGenerator;
