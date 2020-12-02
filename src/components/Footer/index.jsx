import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Layout } from "antd";
const { Footer } = Layout;


const MainFooter = ({ appName }) => {
  return (
    <Footer>
      <div className="row">
        <div className="col-lg-12">
          <div className="col-lg-4 display-inline-block">
          <Link to={`/`} style={{ color: "#ffffff" }}>
          Blogs
          </Link>
            </div>
          <div className="col-lg-4 display-inline-block">
          <Link to={`/questions`} style={{ color: "#ffffff" }}>
          Questions
          </Link>
            </div>
          <div className="col-lg-4 display-inline-block">
          <Link to={`/donate`} style={{ color: "#ffffff" }}>
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
