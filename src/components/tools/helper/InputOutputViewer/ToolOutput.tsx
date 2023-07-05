import React from "react";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";

export function ToolOutput({
  byte,
  outputChild,
}: {
  byte: string;
  outputChild: React.ReactNode;
}) {
  return (
    <>
      {outputChild ? (
        outputChild
      ) : (
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte} />
        </div>
      )}
    </>
  );
}
