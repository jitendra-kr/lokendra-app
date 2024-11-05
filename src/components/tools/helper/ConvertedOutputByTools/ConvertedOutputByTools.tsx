import { ToolOutputActions } from "../ToolOutputActions/ToolOutputActions";
import ConvertedOutputByToolsStyles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
  error?: string;
  hideOutputActions?: boolean;
};
export const ConvertedOutputByTools = ({
  content,
  error,
  hideOutputActions,
}: ConvertedOutputByToolsProps) => {
  return (
    <div>
      {!hideOutputActions && <ToolOutputActions content={content} />}
      <div className={ConvertedOutputByToolsStyles.container}>
        {!error && content && (
          <p className={ConvertedOutputByToolsStyles.content}>{content}</p>
        )}
        {error && (
          <p className={ConvertedOutputByToolsStyles["error-content"]}>
            {content + "" + error}
          </p>
        )}
      </div>
    </div>
  );
};
