"use client";
import { resetInput } from "@ft/common/state/tools";
import styles from "@ft/styles/MainFooter.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { STRING_CONSTANTS } from "../../constants";
import { useAppDispatch } from "../../hooks";

const MainFooter = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  useEffect(() => {
    dispatch(resetInput());
  }, [dispatch, pathname]);

  return (
    <footer className={styles.footer}>
      <div className="row">
        <div className="col-lg-3" style={{ marginTop: "30px" }}>
          <Link href="/fireboxtools-privacy-policy">
            <span style={{ color: "#ffffff", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        {STRING_CONSTANTS.global.appName} © {new Date().getFullYear()}. All
        Rights Reserved
      </div>
    </footer>
  );
};

export default MainFooter;
