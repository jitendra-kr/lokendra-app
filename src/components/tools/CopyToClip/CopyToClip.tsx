
import styles from "./CopyToClip.module.css";

export type CopyToClipProps = {
    content: string;
    copyToClipboardCb: () => void;
    copyToText: string
}
export const CopyToClip = ({ content, copyToClipboardCb, copyToText }: CopyToClipProps) => {
    return <>
        <div className={styles.container}>
            {(typeof content === "object" || content.length > 0) && <p onClick={copyToClipboardCb} className={styles.CopyToClipboardTxt}>{copyToText}</p>}
        </div>
    </>
}