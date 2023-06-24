import { Button, Layout } from "antd";
import React from "react";
import styles from "../../../../../styles/StringToAscii.module.css";
import { OfflineMetaTags } from "../../../common";
import { ToolsBody } from "../../ToolsBody";
import { ToolsList, toolsListData } from "../../ToolsList";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools, inputType } from "../InputToConvertByTools";
import { ToolDescription } from "../ToolOverview";
import InputOutputViewerStyles from "./InputOutputViewer.module.css";

const { Content } = Layout;

type InputOutputViewerProps = {
  toolId: any;
  onChangeCb: (value: string) => void;
  byte: string;
  input?: boolean;
  placeholder?: string;
  onClick?: () => void;
  inputNumber?: boolean;
};

export function InputOutputViewer({
  toolId,
  onChangeCb,
  byte,
  input,
  onClick,
  placeholder,
  inputNumber,
}: InputOutputViewerProps) {
  const result = toolsListData.filter((obj) => {
    return obj.key === toolId;
  })[0];

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={result} />
        <div className={`${styles.mainDiv} row`}>
          {!input && <ToolsBody />}
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
          <div className="col-lg-6">
            <ConvertedOutputByTools content={byte} />
          </div>
        </div>
        <ToolDescription content={result?.toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}
