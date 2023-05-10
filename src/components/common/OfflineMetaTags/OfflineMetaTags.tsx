import { useGetUrl, useGetUrlPath } from "../../../hooks";
import AppHead from "../../Head/head";
import { ToolKeys, toolsListData } from "../../tools/ToolsList";

type OfflineMetaTagsProps = {
    key?: ToolKeys
}
export function OfflineMetaTags({key}: OfflineMetaTagsProps) {
    const { url } = useGetUrl();

    const result = toolsListData.filter((obj) => {
        return obj.key === key;
    });

    return (
        <AppHead data={{
            title: result[0]?.metaTitle,
            meta_description: result[0]?.metaDescription,
            url
        }} />
    );
}
