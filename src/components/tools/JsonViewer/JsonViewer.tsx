import dynamic from 'next/dynamic'
import { JSONTree, StylingValue } from 'react-json-tree';

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
    const theme = {
        scheme: 'monokai',
        author: 'wimer hazenberg (http://www.monokai.nl)',
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        base05: '#f8f8f2',
        base06: '#f5f4f1',
        base07: '#f9f8f5',
        base08: '#f92672',
        base09: '#fd971f',
        base0A: '#f4bf75',
        base0B: '#a6e22e',
        base0C: '#a1efe4',
        base0D: '#66d9ef',
        base0E: '#ae81ff',
        base0F: '#cc6633',
    };

    const valueColor: any = {
        boolean: "boolean",
        number: "number",
        string: "string"
    }

    const typeOf = (value: any) => {
        if (value === "true" || value === "false") {
            return "boolean"
        }
        return typeof value
    }

    const isNativeArrayOrObj = (value: string) => {
        return value === `"${STRING_CONSTANTS.tools.internalArray}"` || value === `"${STRING_CONSTANTS.tools.internalObject}"`
    }

    const nativeArrayOrObj = (value: string) => {
        if(value === `"${STRING_CONSTANTS.tools.internalArray}"`) {
            return "Array"
        } else if (value === `"${STRING_CONSTANTS.tools.internalObject}"`) {
            return "Object"
        } else {
            return "Invalid value"
        }
    }

    return <>
        <CopyToClip content={content} copyToClipboardCb={copyToClipboardCb} copyToText={copyToText} />
        <div className={styles.container} >
            {
                !content ? <></> :
                    content === STRING_CONSTANTS.tools.invalidJson ?
                        <span className={styles.invalidJson} >{content}</span> :
                        <>

                            {/* &#123; */}
                            <JSONTree
                                data={content}
                                labelRenderer={([raw]) => <span className={styles.keyValues}>"{raw}":</span>}
                                valueRenderer={(raw: any) => (
                                    <em>
                                        <span className={`${styles.keyValues} ${styles.dataTypeLabel}`}>
                                            {!isNativeArrayOrObj(raw) ?  typeOf(raw) : ""}
                                        </span>{' '}
                                        <span className={`${styles.keyValues} ${styles[valueColor[typeOf(raw)]]}`}>
                                            {!isNativeArrayOrObj(raw) ? raw : 
                                            <>
                                            <span className={styles.invalidValues} >
                                               { nativeArrayOrObj(raw)}
                                            </span>
                                            <span className={styles.SyntaxError}> &#60;--------SyntaxError</span>
                                            </>
                                             }
                                        </span>
                                    </em>
                                )}
                                theme={{
                                    extend: theme,
                                }}
                                shouldExpandNode={() => true}

                                hideRoot={true}
                            />
                            {/* &#125; */}
                            {/* <ReactJson style={{ padding: 20 }} src={content} iconStyle={"square"} name={false} /> */}

                        </>
            }
        </div>
    </>
}