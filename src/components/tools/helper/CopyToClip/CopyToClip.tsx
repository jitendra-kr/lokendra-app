import { CopyOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { copyToClipboard } from "../../../../utils";

export type CopyToClipProps = {
  content: string;
};
export const CopyToClip = ({ content }: CopyToClipProps) => {
  const copyToClip = "Copy to clipboard";
  const copiedToClip = "Copied to clipboard";

  const [text, setText] = useState(copyToClip);

  const timerToChangeText = () => {
    setTimeout(() => {
      setText(copyToClip);
    }, 3000);
  };

  const handleClick = () => {
    try {
      content =
        typeof content === "object"
          ? JSON.stringify(content, null, 4)
          : content;
      copyToClipboard(content);
      setText(copiedToClip);
      timerToChangeText();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="primary"
      onClick={handleClick}
      icon={<CopyOutlined />}
      style={{ marginRight: "5px" }}
    >
      <span style={{ color: "white" }}>Copy</span>
    </Button>
  );
};
