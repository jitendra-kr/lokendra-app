"use client";
import { Empty } from "antd";

export function NoMatchFound() {
  return (
    <>
      <Empty
        description={<p>Oops! We Couldn’t Find the Tool You’re Looking For</p>}
      />
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        We apologize, but it seems that the tool you’re searching for is not
        available in our collection at the moment. Our team is constantly adding
        new tools to our platform, so please check back later to see if it
        becomes available
      </p>
      <p style={{ textAlign: "center" }}>
        In the meantime, we encourage you to explore our existing selection of
        tools. We offer a wide range of options that might fulfill your needs
        and help you achieve your goals
      </p>
    </>
  );
}
