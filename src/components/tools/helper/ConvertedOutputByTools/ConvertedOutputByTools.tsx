import { ToolOutputActions } from "../ToolOutputActions";
import ConvertedOutputByToolsStyles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
  error?: string;
};
export const ConvertedOutputByTools = ({
  content,
  error,
}: ConvertedOutputByToolsProps) => {
  return (
    <div>
      <ToolOutputActions content={content} />
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
