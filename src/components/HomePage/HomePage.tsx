import { useToolListData } from "../../common/hooks/useToolListData";
import { OfflineMetaTags } from "../common";
import { ToolKeys, ToolsList } from "../tools";

export function HomePage() {
  const { toolData } = useToolListData(ToolKeys.HOME);
  console.log("toolData", toolData);
  return (
    <>
      <OfflineMetaTags tagData={toolData} />
      <ToolsList />
    </>
  );
}
