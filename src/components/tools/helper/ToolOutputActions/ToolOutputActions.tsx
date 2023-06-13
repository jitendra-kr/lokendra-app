import { useGetToolsInput } from "../../../../hooks/useGetToolsInput";
import { DownloadOutput } from "../../../common";
import { ShareData } from "../../ShareData";
import { CopyToClip } from "../CopyToClip";
import styles from "./ToolOutputActions.module.css";

type JsonViewerProps = {
  content: string;
};

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
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
    </div>
  );
};
