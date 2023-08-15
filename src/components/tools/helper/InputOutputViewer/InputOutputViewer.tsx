import { Layout } from "antd";
import dynamic from "next/dynamic";
import styles from "../../../../../styles/StringToAscii.module.css";
import { useToolListData } from "../../../../common/hooks/useToolListData";
import { OfflineMetaTags, SampleData } from "../../../common";
import { ToolsBody } from "../../ToolsBody";
import { ToolKeys } from "../../ToolsList";
import { ToolDescription } from "../ToolOverview";
import { ToolInput, ToolInputProps } from "./ToolInput";

const ToolsList = dynamic(() =>
  import("../../ToolsList").then((mod) => mod.ToolsList),
);
const ToolOutput = dynamic(() =>
  import("./ToolOutput").then((mod) => mod.ToolOutput),
);

const { Content } = Layout;

type InputOutputViewerProps = {
  toolId: ToolKeys;
  byte: string;
  outputChild?: React.ReactNode;
  children?: React.ReactNode;
  error?: string;
} & ToolInputProps;

export function InputOutputViewer({
  toolId,
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
}: InputOutputViewerProps) {
  const { toolData } = useToolListData(toolId);
  console.log("toolData", toolData);

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={toolData} />
        <div className={`${styles.mainDiv} row`}>
          {!input && <ToolsBody />}
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
            />
          )}
          {!children && (
            <ToolOutput byte={byte} outputChild={outputChild} error={error} />
          )}
        </div>
        <ToolDescription
          content={toolData.toolDescription}
          name={toolData.title}
          keyFeatures={toolData.keyFeatures}
        />
        <SampleData pathname={toolData.link} />
        <ToolsList />
      </Content>
    </>
  );
}
