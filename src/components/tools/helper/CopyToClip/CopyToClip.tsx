import { useState } from "react";
import { IoCopySharp } from "react-icons/io5";
import { COLOR_CONST } from "../../../../constants";
import { copyToClipboard } from "../../../../utils";
import { ButtonUsingReactIcon } from "../../../common";

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
    <ButtonUsingReactIcon
      name="Copy"
      onClick={handleClick}
      mdIcon={<IoCopySharp color={COLOR_CONST.defaultIcon} />}
      tooltip="Copy to Clipboard"
    />
  );
};
