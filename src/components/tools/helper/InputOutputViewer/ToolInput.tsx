import { Button } from "antd";
import React from "react";
import { ToolsBody } from "../../ToolsBody";
import { ITools } from "../../ToolsList";
import { InputToConvertByTools, inputType } from "../InputToConvertByTools";
import InputOutputViewerStyles from "./InputOutputViewer.module.css";

type InputOutputVieweoptions = {
  options?: {
    disable: boolean;
  };
};

type Input = {
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
  return (
    <>
      {inputChild && inputChild}
      {!inputChild && (
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
              <InputToConvertByTools
                onChangeCb={onChangeCb}
                type={input ? inputType.input : inputType.textarea}
                placeholder={placeholder}
                inputNumber={inputNumber}
                inputEditorActionChild={inputEditorActionChild}
              />
            </div>
            {input && (
              <>
                {input.buttonName && (
                  <Button
                    type="primary"
                    className={InputOutputViewerStyles["input-button"]}
                    onClick={onClick}
                    disabled={options?.disable}
                  >
                    <span className={InputOutputViewerStyles.buttonText}>
                      {input.buttonName}
                    </span>
                  </Button>
                )}
                <div style={{ marginTop: "20px" }}>
                  {input.options && input.options}
                </div>
              </>
            )}
          </span>
        </div>
      )}
    </>
  );
}
