import dynamic from 'next/dynamic'
const ReactJson = dynamic(import('react-json-view'), { ssr: false });
import styles from "./JsonViewer.module.css";
import { STRING_CONSTANTS } from '../../../constants';
import { CopyToClip } from '../CopyToClip';

type JsonViewerProps = {
    content: any;
    copyToClipboardCb: () => void;
    copyToText: string
}

export const JsonViewer = ({ content, copyToClipboardCb, copyToText }: JsonViewerProps) => {

    return <>
        <CopyToClip content={content} copyToClipboardCb={copyToClipboardCb} copyToText={copyToText} />
        <div className={styles.container} >
            {
                !content ? <></> :
                    content === STRING_CONSTANTS.tools.invalidJson ?
                        <span className={styles.invalidJson} >{content}</span> :
                        <ReactJson style={{padding: 20}} src={content} iconStyle={"square"} name={false} />
            }
        </div>
    </>
}