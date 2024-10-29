import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { toolsListData } from "@ft/components/tools/ToolsList/toolsListingData";

export default function getToolListDataByToolID(key: ToolKeys) {
  return toolsListData.find((obj) => {
    return obj.key === ToolKeys[key];
  });
}
