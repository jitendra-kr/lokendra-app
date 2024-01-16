import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { H2Tag } from "../HtmlTags";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
export type FaqProps = {
  question: string;
  ans: string;
};

export const Faq = ({ data }: { data: FaqProps[] }) => {
  const faqData: CollapseProps["items"] = data.map((item, index) => ({
    key: index,
    label: item.question,
    children: <p>{item.ans}</p>,
  }));
  return (
    <>
      <H2Tag heading="FAQ"></H2Tag>
      <Collapse
        style={{ marginTop: "20px", marginBottom: "20px" }}
        accordion
        items={faqData}
      />
    </>
  );
};
