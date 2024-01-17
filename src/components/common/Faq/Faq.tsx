import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { H2Tag } from "../HtmlTags";

export type FaqProps = {
  question: string;
  ans: string | React.ReactNode;
};

export const Faq = ({ data }: { data: FaqProps[] }) => {
  const faqData: CollapseProps["items"] = data.map(
    ({ ans, question }, index) => ({
      key: index,
      label: <strong>{question}</strong>,
      children: typeof ans === "string" ? <p>{ans}</p> : ans,
    }),
  );

  return (
    <>
      <H2Tag heading="FAQ" link={false}></H2Tag>
      <Collapse
        defaultActiveKey={faqData.map((_, index) => index)}
        style={{ marginTop: "20px", marginBottom: "20px" }}
        items={faqData}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </>
  );
};
