import React from "react";
import Link from "next/link";
import { Layout } from "antd";
import styles from "../../../styles/MainFooter.module.css";
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className="row">
        <div className="col-lg-12">
          <div className="col-lg-4 display-inline-block">
            <Link href="/">
              <span style={{ color: "#ffffff" }}>Blogs</span>
            </Link>
          </div>
          <div className="col-lg-4 display-inline-block">
            <Link href="/questions" style={{ color: "#ffffff" }}>
              <span style={{ color: "#ffffff" }}>Questions</span>
            </Link>
          </div>
          <div className="col-lg-4 display-inline-block">
            <Link href="/donate" style={{ color: "#ffffff" }}>
              <span style={{ color: "#ffffff" }}>Donate</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-top-30">
        Jimmypoint © {new Date().getFullYear()}. All Rights Reserved
      </div>
    </Footer>
  );
};

export default MainFooter;
