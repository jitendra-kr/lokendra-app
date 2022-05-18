import dynamic from 'next/dynamic'
const ReactJson = dynamic(import('react-json-view'), { ssr: false });
import styles from "./JsonViewer.module.css";
import { STRING_CONSTANTS } from '../../../constants';
import { CopyToClip } from '../CopyToClip';

const json = {
    "id": 4051,
    "name": {
        "id": 4051,
        "name": "manoj",
        "myCash": {
            "id": {
                "id": 4051,
                "name": "manoj",
                "myCash": {
                    "id": {
                        "id": 4051,
                        "name": "manoj",
                        "myCash": {
                            "id": {
                                "id": 4051,
                                "name": "manoj",
                                "myCash": {
                                    "id": {
                                        "id": 4051,
                                        "name": "manoj",
                                        "myCash": {
                                            "id": 4051
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "email": "manoj@gmail.com",
    "password": "Test@123",
    "about": null,
    "token": "7f471974-ae46-4ac0-a882-1980c300c4d6",
    "country": {
        "id": 4051,
        "name": "manoj",
        "email": "manoj@gmail.com",
        "password": "Test@123",
        "about": null,
        "token": "7f471974-ae46-4ac0-a882-1980c300c4d6",
        "country": null,
        "location": null,
        "lng": 0,
        "lat": 0,
        "dob": null,
        "gender": 0,
        "userType": 1,
        "userStatus": 1,
        "profilePicture": "Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png",
        "coverPicture": "Images/44af97d9-b8c9-4ec1-a099-010671db25b7.png",
        "enablefollowme": false,
        "sendmenotifications": false,
        "sendTextmessages": false,
        "enabletagging": false,
        "createdAt": "2020-01-01T11:13:27.1107739",
        "updatedAt": "2020-01-02T09:16:49.284864",
        "livelng": 77.389849,
        "livelat": 28.6282231,
        "liveLocation": "Unnamed Road, Chhijarsi, Sector 63, Noida, Uttar Pradesh 201307, India",
        "creditBalance": 127,
        "myCash": {
            "id": 4051,
            "name": "manoj",
            "email": "manoj@gmail.com",
            "password": "Test@123",
            "about": null,
            "token": "7f471974-ae46-4ac0-a882-1980c300c4d6",
            "country": null,
            "location": null,
            "lng": 0,
            "lat": 0,
            "dob": null,
            "gender": 0,
            "userType": 1,
            "userStatus": 1,
            "profilePicture": "Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png",
            "coverPicture": "Images/44af97d9-b8c9-4ec1-a099-010671db25b7.png",
            "enablefollowme": false,
            "sendmenotifications": false,
            "sendTextmessages": false,
            "enabletagging": false,
            "createdAt": "2020-01-01T11:13:27.1107739",
            "updatedAt": "2020-01-02T09:16:49.284864",
            "livelng": 77.389849,
            "livelat": 28.6282231,
            "liveLocation": "Unnamed Road, Chhijarsi, Sector 63, Noida, Uttar Pradesh 201307, India",
            "creditBalance": 127,
            "myCash": 0
        }
    },
    "location": null,
    "lng": 0,
    "lat": 0,
    "dob": null,
    "gender": 0,
    "userType": 1,
    "userStatus": 1,
    "profilePicture": "Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png",
    "coverPicture": "Images/44af97d9-b8c9-4ec1-a099-010671db25b7.png",
    "enablefollowme": false,
    "sendmenotifications": false,
    "sendTextmessages": false,
    "enabletagging": false,
    "createdAt": "2020-01-01T11:13:27.1107739",
    "updatedAt": "2020-01-02T09:16:49.284864",
    "livelng": 77.389849,
    "livelat": 28.6282231,
    "liveLocation": "Unnamed Road, Chhijarsi, Sector 63, Noida, Uttar Pradesh 201307, India",
    "creditBalance": 127,
    "myCash": 0
}

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