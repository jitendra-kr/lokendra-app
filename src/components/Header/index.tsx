"use client";

import styles from "@ft/styles/MainHeader.module.css";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";
import { resetInput } from "../../common/state/tools";
import { STRING_CONSTANTS } from "../../constants";
import { useAppDispatch } from "../../hooks";

function MainHeader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleRouteChange = () => {
      // Dispatch reset action when the route changes
      dispatch(resetInput());
    };

    // Add event listener for route change
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [dispatch]);

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
