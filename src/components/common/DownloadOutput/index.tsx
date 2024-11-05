import { SCREENS } from "@ft/common/enums/screens";
import { STRING_CONSTANTS } from "@ft/constants/stringConstants";
import { useGetUrlPath } from "@ft/hooks/useGetUrl";
import { InputOutputActionButton } from "../Buttons/InputOutputActionButton";

export type DownloadOutputProps = {
  content: string;
};

export function DownloadOutput({ content }: DownloadOutputProps) {
  const { pathname } = useGetUrlPath();
  const toolName = pathname?.split("/").pop();
  const baseFileName = `${STRING_CONSTANTS.global.appName}-${toolName}`;

  const fileExt: Record<string, string> = {
    [SCREENS.JSON_PARSER]: ".json",
    [SCREENS.JSON_MINIFIER]: ".json",
    [SCREENS.JSON_TO_TYPESCRIPT]: ".ts",
    [SCREENS.XML_FORMATTER]: ".xml",
    [SCREENS.XML_MINIFIER]: ".xml",
  };
  const onClick = () => {
    const ext = pathname && fileExt[pathname];
    const fileName = `${baseFileName}${ext ?? ".txt"}`;
    const url = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <InputOutputActionButton
      name="Download"
      onClick={onClick}
      tooltip="Download Output"
    />
  );
}
