import React from "react";
import Faq from "../common/Faq";
import getToolListDataByToolID from "../tools/helper/InputOutputViewer/getToolListDataByToolID";
import numbersToWordsFaqData from "../tools/NumbersTools/NumbersToWords/numbersToWordsFaqData";
import ToolsBody from "../tools/ToolsBody/ToolsBody";
import { ToolKeys } from "../tools/ToolsList/ToolKeys";

export default function ToolRenderer({
  toolKey,
  children,
}: {
  toolKey: ToolKeys;
  children: React.ReactNode;
}) {
  const toolData = getToolListDataByToolID(toolKey);

  if (!toolData) {
    return <></>;
  }

  return (
    <>
      <ToolsBody toolData={toolData} />
      {children}
      <Faq data={numbersToWordsFaqData} />
    </>
  );
}
