"use client";
import { InputOutputActionButton } from "@ft/components/common/Buttons/InputOutputActionButton";
import { copyToClipboard } from "@ft/utils/utils";

export type CopyToClipProps = {
  content: (() => string) | string;
};
export const CopyToClip = ({ content }: CopyToClipProps) => {
  const handleClick = () => {
    if (typeof content !== "string") {
      content = content();
    }

    try {
      copyToClipboard(content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputOutputActionButton
      name="Copy"
      onClick={handleClick}
      tooltip="Copy to Clipboard"
    />
  );
};
