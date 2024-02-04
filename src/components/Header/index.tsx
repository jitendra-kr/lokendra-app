"use client";

import styles from "@ft/styles/MainHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetInput } from "../../common/state/tools";
import { STRING_CONSTANTS } from "../../constants";
import { useAppDispatch } from "../../hooks";

function MainHeader() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const completeHandler = () => {
      dispatch(resetInput());
      console.log("Router change completed");
    };

    router.events.on("routeChangeComplete", completeHandler);

    return () => {
      router.events.off("routeChangeComplete", completeHandler);
    };
  }, [dispatch, router.events]);

  return (
    <header className={styles.header}>
      <Link
        href="/"
        style={{
          color: "#ffffff",
          fontSize: "x-large",
          fontFamily: "math",
          cursor: "pointer",
          textTransform: "capitalize",
        }}
      >
        {STRING_CONSTANTS.global.appName}
      </Link>
    </header>
  );
}

export default MainHeader;
