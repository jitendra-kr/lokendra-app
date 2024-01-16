import React from "react";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";

type ToolOutputProps = {
  byte: string;
  outputChild: React.ReactNode;
  error?: string;
};

export function ToolOutput({ byte, outputChild, error }: ToolOutputProps) {
  return (
    <>
      {outputChild ? (
        outputChild
      ) : (
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte} error={error} />
        </div>
      )}
    </>
  );
}
