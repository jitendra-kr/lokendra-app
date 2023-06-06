import { useGetUrl } from "../../../hooks";
import AppHead from "../../Head/head";
import { ITools, ToolKeys, toolsListData } from "../../tools/ToolsList";

type OfflineMetaTagsProps = {
  tagId?: ToolKeys;
  tagData?: ITools;
};
export function OfflineMetaTags({ tagId, tagData }: OfflineMetaTagsProps) {
  const { url } = useGetUrl();

  const result =
    tagData ??
    toolsListData.filter((obj) => {
      return obj.key === tagId;
    })[0];

  return (
    <AppHead
      data={{
        title: result?.metaTitle,
        meta_description: result?.metaDescription,
        url,
      }}
    />
  );
}
