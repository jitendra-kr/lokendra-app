import { ShareAltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useGetUrl, useGetUrlPath } from "../../../hooks";
import { copyToClipboard } from "../../../utils";
import { jsonParser } from "../ToolsList";

type ShareDataProps = {
  data: string;
};

export function ShareData({ data }: ShareDataProps) {
  const { pathname } = useGetUrlPath();

  const { originWithPath } = useGetUrl();

  const handleShareUrlClick = () => {
    if (pathname.includes(jsonParser)) {
      if (data) {
        try {
          data = JSON.stringify(JSON.parse(data));
        } catch (error) {
          console.log(error);
        }
      }
    }

    const title = "URL copied to clipboard";
    copyToClipboard(`${originWithPath}?data=${data}`, title);
  };

  return (
    <Button
      type="primary"
      onClick={handleShareUrlClick}
      icon={<ShareAltOutlined />}
      style={{ marginRight: "5px" }}
    >
      <span style={{ color: "white" }}>Share</span>
    </Button>
  );
}
