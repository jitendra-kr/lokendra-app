import { SCREENS } from "../../../../common/enums";
import { useGetUrlPath } from "../../../../hooks";
import { useGetToolsInput } from "../../../../hooks/useGetToolsInput";
import { DownloadOutput, HandleFullScreen } from "../../../common";
import { ShareData } from "../../ShareData";
import { CopyToClip } from "../CopyToClip";
import styles from "./ToolOutputActions.module.css";

type JsonViewerProps = {
  content: string;
};

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
  const { value } = useGetToolsInput();
  const { pathname } = useGetUrlPath();

  const hideDownloads = pathname && [SCREENS.WORD_COUNTER].includes(pathname);
  const hideFullScreen = pathname && [SCREENS.WORD_COUNTER].includes(pathname);

  return (
    <div className={styles.container}>
      {(typeof content === "object" || content.length > 0) && (
        <>
          {!hideDownloads && <DownloadOutput content={content} />}
          <CopyToClip content={content} />
        </>
      )}
      <ShareData data={value ?? ""} />
      {!hideFullScreen && <HandleFullScreen content={content} />}
    </div>
  );
};
