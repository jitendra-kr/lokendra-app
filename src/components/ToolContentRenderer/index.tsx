import React from "react";
import Faq from "../common/Faq";
import { SampleData } from "../common/SampleData";
import getToolListDataByToolID from "../tools/helper/InputOutputViewer/getToolListDataByToolID";
import { ToolDescription } from "../tools/helper/ToolOverview/ToolDescription";
import ToolsBody from "../tools/ToolsBody/ToolsBody";
import { ToolKeys } from "../tools/ToolsList/ToolKeys";
import ToolsList from "../tools/ToolsList/ToolsList";

type ToolRendererType = {
  toolKey: ToolKeys;
  children: React.ReactNode;
};

export default function ToolRenderer({ toolKey, children }: ToolRendererType) {
  const toolData = getToolListDataByToolID(toolKey);

  if (!toolData) {
    return <></>;
  }

  return (
    <>
      <ToolsBody toolData={toolData} />
      {children}
      <ToolDescription
        content={toolData.toolDescription}
        name={toolData.title}
        keyFeatures={toolData.keyFeatures}
      />
      <SampleData pathname={toolData.link} />
      <ToolsList />
      <Faq data={toolData.faq} />
    </>
  );
}
