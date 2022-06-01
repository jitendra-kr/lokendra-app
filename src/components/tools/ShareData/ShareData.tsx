import styles from "./ShareData.module.css";
import {
    ShareAltOutlined
} from "@ant-design/icons";
import { useGetUrl } from "../../../hooks";


type ShareDataProps = {
    data: string
}

export function ShareData({data}: ShareDataProps) {
    data = typeof data === "string" ? data : JSON.stringify(data)
    const { url }= useGetUrl()
    console.log(data, data.length, url);
    return (
        <span className={styles.share} >
            <ShareAltOutlined />
        </span>
    );
}
