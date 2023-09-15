import { BiSolidRightArrow } from "react-icons/bi";
import { RelevantTools } from "../../common";
import { ITools } from "../ToolsList/toolsListingData";
import styles from "./ToolsBody.module.css";

export function ToolsBody({ toolData }: { toolData: ITools }) {
  return (
    <span>
      <h1 id="top" className={styles.bodyTitle}>
        <b>{toolData.heading}</b>
      </h1>
      <div className={styles.container}>
        <h2 className={styles.howToUse}>
          <b>
            How to use {toolData.title} <BiSolidRightArrow />{" "}
          </b>
        </h2>
        <p className={styles.bodyContent}>{toolData.content}</p>
      </div>

      <RelevantTools toolLink={toolData.link} />
    </span>
  );
}
