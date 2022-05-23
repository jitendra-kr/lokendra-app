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
    const json = {
        // array: [1, 2, 3],
        // bool: true,
        "detail": {
            "foo": 'bar',
        },
        "branch_id": "2314010"
        // immutable: Map({ key: 'value' }),
    };
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
    const getLabelStyle: StylingValue = ({ style }, nodeType, expanded) => ({
        style: {
            ...style,
            textTransform: expanded ? 'uppercase' : style!.textTransform,
        },
    });
    const getBoolStyle: StylingValue = ({ style }, nodeType) => ({
        style: {
            ...style,
            border: nodeType === 'Boolean' ? '1px solid #DD3333' : style!.border,
            borderRadius: nodeType === 'Boolean' ? 3 : style!.borderRadius,
        },
    });
    const getValueLabelStyle: StylingValue = ({ style }, nodeType, keyPath) => ({
        style: {
            ...style,
            color:
                !Number.isNaN((keyPath as unknown[])[0]) &&
                    !(parseInt(keyPath as string, 10) % 2)
                    ? '#33F'
                    : style!.color,
        },
    });

    return <>
        <CopyToClip content={content} copyToClipboardCb={copyToClipboardCb} copyToText={copyToText} />
        <div className={styles.container} >
            {
                !content ? <></> :
                    content === STRING_CONSTANTS.tools.invalidJson ?
                        <span className={styles.invalidJson} >{content}</span> :
                        <>
                            <ReactJson style={{ padding: 20 }} src={content} iconStyle={"square"} name={false} />
                            <JSONTree
                                data={content}
                                labelRenderer={([raw]) => <span className={styles.keyValues}>{raw}:</span>}
                                valueRenderer={(raw) => (
                                    <em>
                                        <span className={styles.keyValues}>
                                            {typeof raw}
                                        </span>{' '}
                                        <span className={`${styles.keyValues} ${styles.boolean}`}>
                                            {raw}
                                        </span>
                                    </em>
                                )}
                                theme={{
                                    extend: theme,
                                    // nestedNodeLabel: getLabelStyle,
                                    // value: getBoolStyle,
                                    // valueLabel: getValueLabelStyle,
                                }}
                                shouldExpandNode={() => true}
                                hideRoot={true}
                            />
                        </>
            }
        </div>
    </>
}