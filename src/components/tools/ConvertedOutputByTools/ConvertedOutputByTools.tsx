
import { CopyToClip } from "../CopyToClip";
import styles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
    content: string;
}
export const ConvertedOutputByTools = ({ content }: ConvertedOutputByToolsProps) => {
    return <>
         <CopyToClip content = {content} />
        {<div className={styles.asciiDiv} >
            <h3 className={styles.asciiCode} >{content}</h3>
        </div>}
    </>
}