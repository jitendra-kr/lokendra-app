import { withRouter } from "next/router";
import { useGetUrlPath } from "../../../hooks";
import { toolsListData } from "../ToolsList/toolsListingData";
import styles from "./ToolsBody.module.css";


export function ToolsBody() {
    const { pathname } = useGetUrlPath();

    const result = toolsListData.filter((obj) => {
        return obj.link === pathname;
    });

    return (
        <span>
            <h1 className={styles.bodyTitle}>
                {result[0]?.heading}
            </h1>
            <p className={styles.bodyContent}>
            {result[0]?.content}
            </p>
        </span>
    );
}
