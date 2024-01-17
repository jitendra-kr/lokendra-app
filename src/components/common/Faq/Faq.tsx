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
      label: question,
      children: typeof ans === "string" ? <p>{ans}</p> : ans,
    }),
  );
  return (
    <>
      <H2Tag heading="FAQ" link={false}></H2Tag>
      <Collapse
        defaultActiveKey={[0]}
        style={{ marginTop: "20px", marginBottom: "20px" }}
        accordion
        items={faqData}
      />
    </>
  );
};
