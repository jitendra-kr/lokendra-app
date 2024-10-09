"use client";
import { InputOutputActionButton } from "@ft/components/common/Buttons/InputOutputActionButton";
import { COLOR_CONST } from "@ft/constants/colorConstant";
import { copyToClipboard } from "@ft/utils/utils";
import { IoCopySharp } from "react-icons/io5";

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
      mdIcon={<IoCopySharp size={10} color={COLOR_CONST.defaultIcon} />}
      tooltip="Copy to Clipboard"
    />
  );
};
