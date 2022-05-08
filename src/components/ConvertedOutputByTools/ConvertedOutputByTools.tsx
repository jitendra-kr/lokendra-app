
import styles from "../../../styles/StringToAscii.module.css";

type ConvertedOutputByToolsProps = {
    content: string;
    copyToClipboardCb:() => void;
    copyToText: string
}
export const ConvertedOutputByTools = ({ content, copyToClipboardCb, copyToText }: ConvertedOutputByToolsProps) => {
    return <>
        <div style={{height: "50px"}}>
        {content.length > 0 && <p onClick={copyToClipboardCb} className={styles.CopyToClipboardTxt}>{copyToText}</p>}
        </div>
        {<div className={styles["ascii-div"]} >
            <h3 className={styles.asciiCode} >{content}</h3>
        </div>}
    </>
}