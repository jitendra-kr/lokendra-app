import { useRef } from "react";
import OutputIde from "../../../common/Ide/OutputIde";
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./JsonViewer.module.css";

type JsonViewerProps = {
  content: string;
  error: string;
  editorError: string;
};

export const JsonViewer = ({
  content,
  error,
  editorError,
}: JsonViewerProps) => {
  const fullscreenRef = useRef<HTMLDivElement>(null);

  if (error) {
    return (
      <div className={styles.container}>
        <span className={styles.invalidJson}>{error}</span>
        <span className={styles.invalidJson}>{editorError}</span>
      </div>
    );
  }

  return (
    <div ref={fullscreenRef}>
      <ToolOutputActions
        fullscreenRef={fullscreenRef.current}
        content={content}
      />
      <OutputIde value={content} minimapEnabled={false} />
    </div>
  );
};
