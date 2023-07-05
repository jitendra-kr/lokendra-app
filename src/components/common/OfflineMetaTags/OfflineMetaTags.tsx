import { useGetUrl } from "../../../hooks";
import { SeoTags } from "../../../seo/seo.interface";
import AppHead from "../../Head/head";

type OfflineMetaTagsProps = {
  tagData?: SeoTags;
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
