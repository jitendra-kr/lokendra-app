import { OutputIdeProps } from "@ft/components/common/Ide/ide.types";
import OutputIde from "../../../common/Ide/OutputIde";
import { ToolOutputActions } from "../ToolOutputActions/ToolOutputActions";
import styles from "./JsonViewer.module.css";

type JsonViewerProps = {
  content: string;
  error: string;
  editorError: string;
  hideOutputActions?: boolean;
} & OutputIdeProps;

const JsonViewer = ({
  content,
  error,
  editorError,
  theme,
  language,
  hideOutputActions,
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
      {!hideOutputActions && <ToolOutputActions content={content} />}
      <OutputIde value={content} theme={theme} language={language} />
    </div>
  );
};

export default JsonViewer;
