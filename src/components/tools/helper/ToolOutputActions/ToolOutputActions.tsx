import { useGetToolsInput } from "../../../../hooks/useGetToolsInput";
import { DownloadOutput, HandleFullScreen } from "../../../common";
import { ShareData } from "../../ShareData";
import { CopyToClip } from "../CopyToClip";
import styles from "./ToolOutputActions.module.css";

type JsonViewerProps = {
  content: string;
  fullscreenRef?: HTMLDivElement | null;
  fullscreen?: boolean;
};

export const ToolOutputActions = ({
  content,
  fullscreenRef,
  fullscreen = true,
}: JsonViewerProps) => {
  const { value } = useGetToolsInput();

  return (
    <div className={styles.container}>
      {(typeof content === "object" || content.length > 0) && (
        <>
          <DownloadOutput content={content} />
          <CopyToClip content={content} />
        </>
      )}
      <ShareData data={value} />
      {fullscreen && <HandleFullScreen fullscreenRef={fullscreenRef} />}
    </div>
  );
};
