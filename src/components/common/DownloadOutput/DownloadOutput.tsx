import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { jsonParser } from "../../tools/ToolsList/toolsListingData";

export type DownloadOutputProps = {
  content: string;
};

export function DownloadOutput({ content }: DownloadOutputProps) {
  const baseFileName = `${STRING_CONSTANTS.global.appName}`;
  const { pathname } = useGetUrlPath();

  const onClick = () => {
    const fileName = pathname.match(jsonParser)
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
    <Button
      type="primary"
      onClick={onClick}
      icon={<DownloadOutlined />}
      style={{ marginRight: "5px" }}
    >
      <span style={{ color: "white" }}>Download</span>
    </Button>
  );
}
