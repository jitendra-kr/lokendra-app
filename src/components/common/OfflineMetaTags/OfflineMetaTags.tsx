import { STRING_CONSTANTS } from "../../../constants";
import { SeoTags } from "../../../seo/seo.interface";
import AppHead from "../../Head/head";

type OfflineMetaTagsProps = {
  tagData?: SeoTags;
};
export function OfflineMetaTags({ tagData }: OfflineMetaTagsProps) {
  const url = `${STRING_CONSTANTS.global.domain}${tagData?.link}`;
  return (
    <AppHead
      title={tagData?.metaTitle ?? ""}
      meta_description={tagData?.metaDescription ?? ""}
      url={url}
    />
  );
}
