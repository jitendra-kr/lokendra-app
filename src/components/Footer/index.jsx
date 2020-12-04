import React from "react";
import Link from "next/link";
import { Layout } from "antd";
const { Footer } = Layout;


const MainFooter = ({ appName }) => {
  return (
    <Footer>
      <div className="row">
        <div className="col-lg-12">
          <div className="col-lg-4 display-inline-block">
          <Link href="/" style={{ color: "#ffffff" }}>
          Blogs
          </Link>
            </div>
          <div className="col-lg-4 display-inline-block">
          <Link href="/questions" style={{ color: "#ffffff" }}>
          Questions
          </Link>
            </div>
          <div className="col-lg-4 display-inline-block">
          <Link href="/donate" style={{ color: "#ffffff" }}>
          Donate
          </Link>
            </div>
        </div>
      </div>
      <div className="m-top-30">Jimmypoint © {new Date().getFullYear()}. All Rights Reserved</div>
    </Footer>
  );
};

export default MainFooter;
