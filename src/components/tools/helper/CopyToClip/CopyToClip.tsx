import { IoCopySharp } from "react-icons/io5";
import { COLOR_CONST } from "../../../../constants";
import { copyToClipboard } from "../../../../utils";
import { ButtonUsingReactIcon } from "../../../common";

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
    <ButtonUsingReactIcon
      name="Copy"
      onClick={handleClick}
      mdIcon={<IoCopySharp color={COLOR_CONST.defaultIcon} />}
      tooltip="Copy to Clipboard"
    />
  );
};
