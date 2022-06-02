import styles from "./ShareData.module.css";
import {
    ShareAltOutlined
} from "@ant-design/icons";
import { useGetUrl } from "../../../hooks";
import { Button } from "antd";
import { copyToClipboard } from "../../../utils";


type ShareDataProps = {
    data: string
}

export function ShareData({ data }: ShareDataProps) {
    if (data) {
        try {
            data = JSON.stringify(JSON.parse(data))
        } catch (error) {
            console.log(error);
        }
    }

    const { url } = useGetUrl()

    const handleShareUrlClick = () => {
        copyToClipboard(`${url}?data=${data}`)
    };

    return (
        <span className={styles.share}>
            <Button type="primary" onClick={handleShareUrlClick} shape="circle" icon={<ShareAltOutlined />} size={"small"} />
        </span>
    );
}
