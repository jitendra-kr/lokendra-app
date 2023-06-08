import { get } from "lodash";
import { STRING_CONSTANTS } from "../../../../constants";
import Ide from "../../../common/Ide/Ide";
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./JsonViewer.module.css";

type JsonViewerProps = {
  content: any;
  input: string;
  error: any;
  editorError: string;
};

export const JsonViewer = ({
  content,
  error,
  input,
  editorError,
}: JsonViewerProps) => {
  const prepareJSON =
    content && JSON.stringify(JSON.parse(content), null, "\t");

  if (!input) {
    return <></>;
  }

  if (content && content === STRING_CONSTANTS.tools.invalidJson) {
    return (
      <div className={styles.container}>
        <span className={styles.invalidJson}>
          {content} ----&gt;
          {get(error, "name") + " \n" + get(error, "message")}
        </span>
        <span className={styles.invalidJson}>{editorError}</span>
      </div>
    );
  }

  return (
    <>
      <ToolOutputActions content={prepareJSON} />
      <Ide value={prepareJSON} minimapEnabled={false} />
    </>
  );
};
