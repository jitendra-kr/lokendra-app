import { useGetUrl } from "../../../hooks";
import AppHead from "../../Head/head";
import { ToolKeys, toolsListData } from "../../tools/ToolsList";

type OfflineMetaTagsProps = {
  tagId?: ToolKeys;
};
export function OfflineMetaTags({ tagId }: OfflineMetaTagsProps) {
  const { url } = useGetUrl();

  const result = toolsListData.filter((obj) => {
    return obj.key === tagId;
  });

  return (
    <AppHead
      data={{
        title: result[0]?.metaTitle,
        meta_description: result[0]?.metaDescription,
        url,
      }}
    />
  );
}
