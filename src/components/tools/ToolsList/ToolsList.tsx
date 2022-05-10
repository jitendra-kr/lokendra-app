
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Layout } from "antd";
import AppHead from "../../Head/head";
import styles from "./ToolsList.module.css";

interface ITools {
    title: string;
    link: string
}

interface IToolsArray extends Array<ITools> { }

export const ToolsList = () => {
    const router = useRouter()
    const handleClick = (item: ITools) => {
        router.push(item.link);
    };
    const data: IToolsArray = [{
        title: "String to ASCII",
        link: "/tools/string-to-ascii"
    },
    {
        title: "ASCII to String",
        link: "/tools/ascii-to-string"
    },
    {
        title: "JSON to String",
        link: "/tools/json-to-string"
    },
    {
        title: "JSON parser",
        link: "/tools/json-parser"
    },
    {
        title: "Text to Uppercase",
        link: "/tools/text-to-uppercase"
    },
    {
        title: "Text to Lowercase",
        link: "/tools/text-to-lowercase"
    }
    ]

    return (
        <>
            <AppHead data={{}} />
            <div className={`${styles.main} row`}>
                <h1 style={{ fontFamily: "serif" }}>Tools</h1>
                <div className="row">
                    {data.map((item, i) => {
                        return (
                            <div
                                className="col-lg-3 cursor-pointer"
                                key={i}
                                onClick={() => {
                                    handleClick(item);
                                }}
                                style={{ marginTop: "25px" }}
                            >
                                <div className="listing border">
                                    <div
                                        className="home-page-title"
                                        style={{ textAlign: "center" }}
                                    >
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
