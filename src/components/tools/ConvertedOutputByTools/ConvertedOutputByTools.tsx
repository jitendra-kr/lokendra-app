
import { CopyToClip } from "../CopyToClip";
import styles from "./ConvertedOutputByTools.module.css";

export type ConvertedOutputByToolsProps = {
    content: string;
    copyToClipboardCb:() => void;
    copyToText: string
}
export const ConvertedOutputByTools = ({ content, copyToClipboardCb, copyToText }: ConvertedOutputByToolsProps) => {
    return <>
         <CopyToClip content = {content} copyToClipboardCb={copyToClipboardCb} copyToText = {copyToText}/>
        {<div className={styles.asciiDiv} >
            <h3 className={styles.asciiCode} >{content}</h3>
        </div>}
    </>
}