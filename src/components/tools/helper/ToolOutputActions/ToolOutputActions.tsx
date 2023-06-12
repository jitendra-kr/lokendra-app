import { useGetToolsInput } from "../../../../hooks/useGetToolsInput";
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
      <CopyToClip content={content} />
      <ShareData data={value} />
    </div>
  );
};
