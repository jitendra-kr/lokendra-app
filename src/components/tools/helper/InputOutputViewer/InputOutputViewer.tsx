"use client";
import LoadingMonaco from "@ft/components/common/Ide/LoadingMonaco";
import dynamic from "next/dynamic";
import React from "react";
import { ToolInputProps } from "./ToolInput";

const ToolInput = dynamic(
  () => import("./ToolInput").then((mod) => mod.ToolInput),
  {
    ssr: false,
    loading: () => <LoadingMonaco />,
  },
);

const ToolOutput = dynamic(
  () => import("./ToolOutput").then((mod) => mod.ToolOutput),
  {
    ssr: false,
    loading: () => <LoadingMonaco />,
  },
);

type InputOutputViewerProps = {
  byte: string;
  outputChild?: React.ReactNode;
  children?: React.ReactNode;
  error?: string;
} & Omit<ToolInputProps, "toolData">;

export function InputOutputViewer({
  onChangeCb = () => {},
  byte,
  input,
  onClick,
  placeholder,
  inputNumber,
  children,
  inputChild,
  outputChild,
  options,
  error = undefined,
  inputEditorActionChild,
}: InputOutputViewerProps) {
  return (
    <div className={"row editorMinHeight"}>
      {children && children}
      {!children && (
        <ToolInput
          input={input}
          inputChild={inputChild}
          onChangeCb={onChangeCb}
          placeholder={placeholder}
          inputNumber={inputNumber}
          onClick={onClick}
          options={options}
          inputEditorActionChild={inputEditorActionChild}
        />
      )}
      {!children && (
        <ToolOutput byte={byte} outputChild={outputChild} error={error} />
      )}
    </div>
  );
}
