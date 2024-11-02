import CustomCollapse from "@ft/common/components/UiComponent/CustomCollapse";
import type { CollapseProps } from "antd";
import { H2Tag } from "../HtmlTags/H2Tag";

export type FaqProps = {
  question: string;
  ans: string | React.ReactNode;
};

const Faq = ({ data }: { data: FaqProps[] }) => {
  const faqData: CollapseProps["items"] = data.map(
    ({ ans, question }, index) => ({
      key: index,
      label: <strong>{question}</strong>,
      children: typeof ans === "string" ? <p>{ans}</p> : ans,
    }),
  );

  if (!faqData.length) {
    return <></>;
  }

  return (
    <>
      <H2Tag heading="FAQ" link={false}></H2Tag>
      <CustomCollapse faqData={faqData} />
    </>
  );
};

export default Faq;
