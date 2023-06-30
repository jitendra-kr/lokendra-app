import { FaDownload } from "react-icons/fa";
import { COLOR_CONST, STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { jsonParser } from "../../tools/ToolsList/toolsListingData";
import { ButtonUsingReactIcon } from "../ButtonWithIcon/ButtonUsingReactIcon";

export type DownloadOutputProps = {
  content: string;
};

export function DownloadOutput({ content }: DownloadOutputProps) {
  const baseFileName = `${STRING_CONSTANTS.global.appName}`;
  const { pathname } = useGetUrlPath();

  const onClick = () => {
    const fileName =
      pathname && pathname.match(jsonParser)
        ? `${baseFileName}.json`
        : `${baseFileName}.txt`;
    const url = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <ButtonUsingReactIcon
      name="Download"
      onClick={onClick}
      mdIcon={<FaDownload color={COLOR_CONST.defaultIcon} />}
      tooltip="Download Output"
    />
  );
}
