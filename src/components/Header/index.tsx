"use client";

import styles from "@ft/styles/MainHeader.module.css";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { resetInput } from "@ft/common/state/tools";
import { useEffect } from "react";
import { STRING_CONSTANTS } from "../../constants";
import { useAppDispatch } from "../../hooks";

function MainHeader() {
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  useEffect(() => {
    dispatch(resetInput());
  }, [dispatch, pathname]);

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
