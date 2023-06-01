import { ToolOutputActions } from "../ToolOutputActions";
import ConvertedOutputByToolsStyles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
};
export const ConvertedOutputByTools = ({
  content,
}: ConvertedOutputByToolsProps) => {
  return (
    <>
      <ToolOutputActions content={content} />
      {
        <div className={ConvertedOutputByToolsStyles.container}>
          <h3 className={ConvertedOutputByToolsStyles.content}>{content}</h3>
        </div>
      }
    </>
  );
};
