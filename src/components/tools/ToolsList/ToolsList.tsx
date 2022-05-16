
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import AppHead from "../../Head/head";
import styles from "./ToolsList.module.css";
import { ITools, toolsListData } from "./toolsListingData"
import { useGetUrlPath } from "../../../hooks";

export const ToolsList = () => {
  const { isHome, pathname } = useGetUrlPath();

    const router = useRouter()
    const handleClick = (item: ITools) => {
        router.push(item.link);
    };

    const heading = isHome || pathname === "/tools" ? "Tools" : "Other tools"

    return (
        <>
            <AppHead data={{}} />
            <div className={`${isHome || pathname ? styles.home : styles.otherTools} row`}>
                <h1 className={`${isHome? "" : "text-align-center"}   mainHeadingfontFamily`}>{heading}</h1>
                <div className="row">
                    {toolsListData.map((item, i) => {
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
