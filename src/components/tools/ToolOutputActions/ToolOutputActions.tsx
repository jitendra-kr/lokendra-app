import styles from "./ToolOutputActions.module.css";
import { CopyToClip } from '../CopyToClip';
import { ShareData } from '../ShareData';
import { useGetToolsInput } from "../../../hooks/useGetToolsInput";

type JsonViewerProps = {
    content: string;
}

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
    const { value } = useGetToolsInput()
    return (content && (typeof content === "object" || content.length > 0)) ?  <div className={styles.container} >
        <CopyToClip content={content} />
        <ShareData data={value} />
    </div> : <div className={styles.empty} ></div>
}