
import { useState } from "react";
import { messageSuccess } from "../../../utils";
import styles from "./CopyToClip.module.css";

export type CopyToClipProps = {
    content: string;
    copyToClipboardCb?: () => void;
    copyToText?: string
}
export const CopyToClip = ({ content, copyToClipboardCb }: CopyToClipProps) => {
    const copyToClip = "Copy to clipboard";
    const copiedToClip = "Copied to clipboard";

    const [text, setText] = useState(copyToClip)

    const timerToChangeText = () => {
        setTimeout(() => {
            setText(copyToClip)
        }, 3000)
    }

    const handleClick = () => {
        try {
            navigator.clipboard.writeText(content).then(() => {
              messageSuccess({ content: "Copied to clipboard", key: "Copiedtoclipboard", duration: 4 });
            })
          } catch (e) {
            alert("failed to copy")
          }
        setText(copiedToClip)
        timerToChangeText()
        copyToClipboardCb
    }

    return <>
        <div className={styles.container}>
            {(typeof content === "object" || content.length > 0) && <p onClick={handleClick} className={styles.CopyToClipboardTxt}>{text}</p>}
        </div>
    </>
}