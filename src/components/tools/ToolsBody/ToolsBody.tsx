import { useGetUrlPath } from "../../../hooks";
import { toolsListData } from "../ToolsList/toolsListingData";
import styles from "./ToolsBody.module.css";

type ToolsBodyProps = {
  className?: string;
};

export function ToolsBody({ className }: ToolsBodyProps) {
  const { pathname } = useGetUrlPath();

  const result = toolsListData.find((obj) => {
    return obj.link === pathname;
  });
  if (!result) {
    return <></>;
  }

  return (
    <span className={className}>
      <h1 className={styles.bodyTitle}>{result.heading}</h1>
      <h2 className={styles.bodyContent}>{result.content}</h2>
    </span>
  );
}
