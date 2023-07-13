import OutputIde, { OutputIdeProps } from "../../../common/Ide/OutputIde";
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./JsonViewer.module.css";

type JsonViewerProps = {
  content: string;
  error: string;
  editorError: string;
} & OutputIdeProps;

export const JsonViewer = ({
  content,
  error,
  editorError,
  theme,
  language,
}: JsonViewerProps) => {
  if (error) {
    return (
      <div className={styles.container}>
        <span className={styles.invalidJson}>{error}</span>
        <span className={styles.invalidJson}>{editorError}</span>
      </div>
    );
  }

  return (
    <div>
      <ToolOutputActions content={content} />
      <OutputIde
        value={content}
        minimapEnabled={false}
        theme={theme}
        language={language}
      />
    </div>
  );
};
