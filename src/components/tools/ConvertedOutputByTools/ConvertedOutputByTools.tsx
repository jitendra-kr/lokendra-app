
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
    content: string;
}
export const ConvertedOutputByTools = ({ content }: ConvertedOutputByToolsProps) => {

    return <>
        <ToolOutputActions content={content} />
        {<div className={styles.asciiDiv} >
            <h3 className={styles.asciiCode} >{content}</h3>
        </div>}
    </>
}