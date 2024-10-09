import React from "react";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools/ConvertedOutputByTools";

type ToolOutputProps = {
  byte: string;
  outputChild: React.ReactNode;
  error?: string;
};

export function ToolOutput({ byte, outputChild, error }: ToolOutputProps) {
  if (outputChild) {
    return <div className="col-lg-6">{outputChild}</div>;
  }
  return (
    <div className="col-lg-6">
      <ConvertedOutputByTools content={byte} error={error} />
    </div>
  );
}
