import { useRef } from "react";
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
  const fullscreenRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={fullscreenRef}>
      <ToolOutputActions
        content={content}
        fullscreenRef={fullscreenRef.current}
      />
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
