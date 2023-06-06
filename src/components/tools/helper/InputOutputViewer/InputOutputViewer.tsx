import { Layout } from "antd";
import styles from "../../../../../styles/StringToAscii.module.css";
import { OfflineMetaTags } from "../../../common";
import { ToolsBody } from "../../ToolsBody";
import { ToolsList, toolsListData } from "../../ToolsList";
import { ConvertedOutputByTools } from "../ConvertedOutputByTools";
import { InputToConvertByTools } from "../InputToConvertByTools";
import { ToolDescription } from "../ToolOverview";

const { Content } = Layout;

type InputOutputViewerProps = {
  toolId: any;
  onChangeCb: (value: string) => void;
  byte: string;
};

type RenderDescriptionAndHowWorksProps = {
  toolDescription: string;
  showHowWorks?: boolean;
};

export function InputOutputViewer({
  toolId,
  onChangeCb,
  byte,
}: InputOutputViewerProps) {
  const result = toolsListData.filter((obj) => {
    return obj.key === toolId;
  })[0];

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={result} />
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6">
            <InputToConvertByTools
              rules={[
                {
                  required: true,
                  message: "Please enter text!",
                },
              ]}
              onChangeCb={onChangeCb}
            />
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
