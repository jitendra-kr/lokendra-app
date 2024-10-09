import { SCREENS } from "@ft/common/enums/screens";
import { DownloadOutput } from "@ft/components/common/DownloadOutput";
import HandleFullScreen from "@ft/components/common/HandleFullScreen";
import { useGetUrlPath } from "@ft/hooks/useGetUrl";
import { CopyToClip } from "../CopyToClip/CopyToClip";

type JsonViewerProps = {
  content: string;
};

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
  const { pathname } = useGetUrlPath();

  const hideDownloads = pathname && [SCREENS.WORD_COUNTER].includes(pathname);
  const hideFullScreen = pathname && [SCREENS.WORD_COUNTER].includes(pathname);

  if (typeof content === "object" || content.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          marginBottom: "5px",
          marginTop: "5px",
        }}
      >
        {!hideDownloads && <DownloadOutput content={content} />}
        <CopyToClip content={content} />
        {!hideFullScreen && <HandleFullScreen content={content} />}
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        marginBottom: "5px",
        marginTop: "5px",
      }}
    >
      <div style={{ height: "32px" }}></div>
    </div>
  );
};
