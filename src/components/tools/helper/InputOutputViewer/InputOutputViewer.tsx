import { Button, Layout } from "antd";
import styles from "../../../../../styles/StringToAscii.module.css";
import { useToolListData } from "../../../../common/hooks/useToolListData";
import { OfflineMetaTags } from "../../../common";
import { ToolsBody } from "../../ToolsBody";
import { ToolsList } from "../../ToolsList";
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
  const { toolData } = useToolListData(toolId);

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={toolData} />
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
        <ToolDescription content={toolData.toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}
