import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { toolsListData } from "@ft/components/tools/ToolsList/toolsListingData";
import { useMemo } from "react";

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
