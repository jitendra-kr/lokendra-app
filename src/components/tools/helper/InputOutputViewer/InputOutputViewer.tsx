import { Layout } from "antd";
import dynamic from "next/dynamic";
import styles from "../../../../../styles/StringToAscii.module.css";
import { useToolListData } from "../../../../common/hooks/useToolListData";
import { OfflineMetaTags } from "../../../common";
import { ToolsBody } from "../../ToolsBody";
import { ToolDescription } from "../ToolOverview";
import { ToolInput } from "./ToolInput";

const ToolsList = dynamic(() =>
  import("../../ToolsList").then((mod) => mod.ToolsList),
);
const ToolOutput = dynamic(() =>
  import("./ToolOutput").then((mod) => mod.ToolOutput),
);

const { Content } = Layout;

type InputOutputViewerProps = {
  toolId: any;
  onChangeCb?: (value: string) => void;
  byte: string;
  input?: boolean;
  placeholder?: string;
  onClick?: () => void;
  inputNumber?: boolean;
  inputChild?: React.ReactNode;
  outputChild?: React.ReactNode;
  children?: React.ReactNode;
};

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
}: InputOutputViewerProps) {
  const { toolData } = useToolListData(toolId);

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={toolData} />
        <div className={`${styles.mainDiv} row`}>
          {!input && <ToolsBody />}
          {children && children}
          <ToolInput
            input={input}
            inputChild={inputChild}
            onChangeCb={onChangeCb}
            placeholder={placeholder}
            inputNumber={inputNumber}
            onClick={onClick}
          />
          <ToolOutput byte={byte} outputChild={outputChild} />
        </div>
        <ToolDescription content={toolData.toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}
