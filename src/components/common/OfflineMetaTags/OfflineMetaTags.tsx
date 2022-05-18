import { useGetUrl, useGetUrlPath } from "../../../hooks";
import AppHead from "../../Head/head";
import { toolsListData } from "../../tools/ToolsList";


export function OfflineMetaTags() {

    const { pathname } = useGetUrlPath();
    const { url } = useGetUrl();

    console.log(url)
    const result = toolsListData.filter((obj) => {
        return obj.link === pathname;
    });

    return (
        <AppHead data={{
            title: result[0]?.metaTitle,
            meta_description: result[0]?.metaDescription,
            url
        }} />
    );
}
