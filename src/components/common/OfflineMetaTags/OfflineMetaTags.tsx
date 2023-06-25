import { useGetUrl } from "../../../hooks";
import AppHead from "../../Head/head";
import { ITools } from "../../tools/ToolsList";

type OfflineMetaTagsProps = {
  tagData?: ITools;
};
export function OfflineMetaTags({ tagData }: OfflineMetaTagsProps) {
  const { url } = useGetUrl();

  return (
    <AppHead
      data={{
        title: tagData?.metaTitle,
        meta_description: tagData?.metaDescription,
        url,
      }}
    />
  );
}
