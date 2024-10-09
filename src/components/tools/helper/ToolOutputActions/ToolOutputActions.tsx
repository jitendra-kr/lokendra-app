import { SCREENS } from "@ft/common/enums/screens";
import { DownloadOutput } from "@ft/components/common/DownloadOutput";
import HandleFullScreen from "@ft/components/common/HandleFullScreen";
import { useGetUrlPath } from "@ft/hooks/useGetUrl";
import { CopyToClip } from "../CopyToClip/CopyToClip";
import styles from "./ToolOutputActions.module.css";

type JsonViewerProps = {
  content: string;
};

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
  const { pathname } = useGetUrlPath();

  const hideDownloads = pathname && [SCREENS.WORD_COUNTER].includes(pathname);
  const hideFullScreen = pathname && [SCREENS.WORD_COUNTER].includes(pathname);

  if (typeof content === "object" || content.length > 0) {
    return (
      <div className={styles.container}>
        {!hideDownloads && <DownloadOutput content={content} />}
        <CopyToClip content={content} />
        {!hideFullScreen && <HandleFullScreen content={content} />}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div style={{ height: "32px" }}></div>
    </div>
  );
};
