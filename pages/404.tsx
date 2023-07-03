import { Button, Layout } from "antd";
import Link from "next/link";
import React from "react";
import { STRING_CONSTANTS } from "../src/constants";

const { Content } = Layout;

function Page404() {
  return (
    <Content>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Page Not Found</h1>
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
        Oops! We couldn't find what you were looking for, but we're here to
        help. Let's get you back on track!
      </p>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button type="primary" htmlType="submit">
          <Link href={`/`} style={{ fontWeight: "bold" }}>
            Return to {STRING_CONSTANTS.global.appName}`s Tools
          </Link>
        </Button>
      </div>
    </Content>
  );
}

export default Page404;
