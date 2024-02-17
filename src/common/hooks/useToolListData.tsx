import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { useMemo } from "react";
import { toolsListData } from "../../components";

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
