import { useMemo } from "react";
import { ToolKeys, toolsListData } from "../../components";

export function useToolListData(key: ToolKeys) {
  const toolData = useMemo(
    () =>
      toolsListData.filter((obj) => {
        return obj.key === ToolKeys[key];
      }),
    [key],
  );

  return { toolData: toolData[0] };
}
