import { RelevantTools } from "../../common";
import { ITools } from "../ToolsList/toolsListingData";
import styles from "./ToolsBody.module.css";

export function ToolsBody({ toolData }: { toolData: ITools }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 id="top" className={styles.bodyTitle}>
        <b>{toolData.heading}</b>
      </h1>
      <RelevantTools toolLink={toolData.link} />
    </div>
  );
}
