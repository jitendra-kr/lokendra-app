import React from "react";
import { ToolsBody } from "../../ToolsBody";
import { ITools } from "../../ToolsList";
import { InputToConvertByTools, inputType } from "../InputToConvertByTools";
import InputOutputViewerStyles from "./InputOutputViewer.module.css";
import { RenderActionButton } from "./RenderActionButton";
import { RenderInputOptions } from "./RenderInputOptions";

type InputOutputVieweoptions = {
  options?: {
    disable?: boolean;
    hideInput?: boolean;
    buttonAfterOption?: boolean;
  };
};

export type Input = {
  showInput: boolean;
  buttonName: string;
  options?: React.ReactNode;
};

export type ToolInputProps = {
  input?: Input;
  inputChild?: React.ReactNode;
  onChangeCb?: (value: string) => void;
  placeholder?: string;
  inputNumber?: boolean;
  onClick?: () => void;
  inputEditorActionChild?: React.ReactNode;
  toolData: ITools;
} & InputOutputVieweoptions;

export function ToolInput({
  input,
  inputChild,
  onChangeCb = () => {},
  placeholder,
  inputNumber,
  onClick,
  options,
  inputEditorActionChild,
  toolData,
}: ToolInputProps) {
  if (inputChild) {
    return <div className="col-lg-6">{inputChild}</div>;
  }
  return (
    <div className="col-lg-6">
      {input && <ToolsBody toolData={toolData} />}
      <span className={InputOutputViewerStyles["input-parent"]}>
        <div
          className={`${
            input
              ? InputOutputViewerStyles["input-true-w"]
              : InputOutputViewerStyles["input-false-w"]
          }`}
        >
          {!options?.hideInput && (
            <InputToConvertByTools
              onChangeCb={onChangeCb}
              type={input ? inputType.input : inputType.textarea}
              placeholder={placeholder}
              inputNumber={inputNumber}
              inputEditorActionChild={inputEditorActionChild}
            />
          )}
        </div>
        {input && (
          <div
            style={{
              display: "flex",
              flexDirection: options?.buttonAfterOption
                ? "column-reverse"
                : "column",
            }}
          >
            <RenderActionButton
              onClick={onClick}
              options={options}
              input={input}
            />
            <RenderInputOptions input={input} />
          </div>
        )}
      </span>
    </div>
  );
}
