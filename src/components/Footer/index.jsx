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
          <div className="col-lg-3 display-inline-block">
            <Link href="/about-me">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>About Me</span>
            </Link>
          </div>

          <div className="col-lg-3 display-inline-block">
            <Link href="/blog">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Blogs</span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/questions">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Questions</span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/donate">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Donate</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-12" style={{ marginTop: "20px" }} >
          <div className="col-lg-3 display-inline-block">
            <Link href="/tools/string-to-ascii">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>String to ASCII</span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/tools/ascii-to-string">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>ASCII to String </span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/tools/json-to-string">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>JSON to String </span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/tools/json-parser">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>JSON parser</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-12" style={{ marginTop: "20px" }} >
        <div className="col-lg-3 display-inline-block">
            <Link href="/tools/text-to-uppercase">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Text to Uppercase</span>
            </Link>
          </div>
          <div className="col-lg-3 display-inline-block">
            <Link href="/tools/text-to-lowercase">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Text to Lowercase</span>
            </Link>
          </div>

          <div className="col-lg-3 display-inline-block">

          </div>
          <div className="col-lg-3 display-inline-block">

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
