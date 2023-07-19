import { useGetUrlPath } from "../../../hooks";
import { RelevantTools } from "../../common";
import { toolsListData } from "../ToolsList/toolsListingData";
import styles from "./ToolsBody.module.css";

export function ToolsBody() {
  const { pathname } = useGetUrlPath();

  const result = toolsListData.find((obj) => {
    return obj.link === pathname;
  });
  if (!result) {
    return <></>;
  }

  return (
    <span>
      <h1 className={styles.bodyTitle}>
        <b>{result.heading}</b>
      </h1>
      <p className={styles.bodyContent}>{result.content}</p>
      {result && <RelevantTools toolLink={result.link} />}
    </span>
  );
}
