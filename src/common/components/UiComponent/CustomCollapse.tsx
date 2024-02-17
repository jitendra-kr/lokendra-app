"use client";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";

export default function CustomCollapse({
  faqData,
}: {
  faqData: CollapseProps["items"];
}) {
  if (!faqData) {
    return <></>;
  }

  return (
    <Collapse
      defaultActiveKey={faqData.map((_, index) => index)}
      style={{ marginTop: "20px", marginBottom: "20px" }}
      items={faqData}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    />
  );
}
