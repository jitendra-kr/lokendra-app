import { ReactNode } from "react";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools/ConvertedOutputByTools";

type ToolOutputProps = {
  byte: string;
  outputChild: ReactNode;
  error?: string;
};

export function ToolOutput({ byte, outputChild, error }: ToolOutputProps) {
  return (
    <div className="col-lg-6">
      {outputChild || <ConvertedOutputByTools content={byte} error={error} />}
    </div>
  );
}
