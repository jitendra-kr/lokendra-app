import { useMemo } from "react";
import { ToolKeys, toolsListData } from "../../components";

export function useToolListData(key: ToolKeys) {
  const searchByKey = () => {
    return toolsListData.filter((obj) => {
      return obj.key === ToolKeys[key];
    });
  };
  const toolData = useMemo(() => searchByKey(), [key]);

  return { toolData: toolData[0] };
}
