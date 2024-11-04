"use client";

import Empty from "antd/es/empty";

export default function NoMatchFound() {
  return (
    <Empty
      description={
        <p style={{ marginBottom: "50px" }}>
          Oops! We Couldn’t Find the Tool You’re Looking For
        </p>
      }
    />
  );
}
