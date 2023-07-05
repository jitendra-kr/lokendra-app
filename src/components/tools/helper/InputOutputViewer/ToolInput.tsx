import React from "react";
import InputOutputViewerStyles from "./InputOutputViewer.module.css";

import { Button } from "antd";
import { ToolsBody } from "../../ToolsBody";
import { InputToConvertByTools, inputType } from "../InputToConvertByTools";

export function ToolInput({
  input,
  inputChild,
  onChangeCb = () => {},
  placeholder,
  inputNumber,
  onClick,
}: {
  input?: boolean;
  inputChild?: React.ReactNode;
  onChangeCb?: (value: string) => void;
  placeholder?: string;
  inputNumber?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      {inputChild && inputChild}
      {!inputChild && (
        <div className="col-lg-6">
          {input && <ToolsBody />}
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
              />
            </div>
            {input && (
              <Button
                type="primary"
                className={InputOutputViewerStyles["input-button"]}
                onClick={onClick}
              >
                <span className={InputOutputViewerStyles.buttonText}>
                  Generate UUID
                </span>
              </Button>
            )}
          </span>
        </div>
      )}
    </>
  );
}
