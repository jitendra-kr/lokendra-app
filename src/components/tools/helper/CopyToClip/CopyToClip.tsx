import { IoCopySharp } from "react-icons/io5";
import { COLOR_CONST } from "../../../../constants";
import { copyToClipboard } from "../../../../utils";
import { InputOutputActionButton } from "../../../common";

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
