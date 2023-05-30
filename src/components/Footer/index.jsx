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

          {/* <div className="col-lg-3 display-inline-block">
            <Link href="/blog">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Blogs</span>
            </Link>
          </div> */}
          {/* <div className="col-lg-3 display-inline-block">
            <Link href="/questions">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Questions</span>
            </Link>
          </div> */}
          <div className="col-lg-3 display-inline-block">
            <Link href="/donate">
              <span style={{ color: "#ffffff", cursor: 'pointer' }}>Donate</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-top-30">
      fireboxtools © {new Date().getFullYear()}. All Rights Reserved
      </div>
    </Footer>
  );
};

export default MainFooter;
