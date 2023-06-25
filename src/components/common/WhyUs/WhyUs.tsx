import ToolDescriptionStyles from "../../tools/helper/ToolOverview/ToolDescription.module.css";
import WhyUsStyles from "./WhyUs.module.css";

export function WhyUs({
  heading,
  content,
}: {
  heading: string;
  content: string | React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "70%" }}>
        <h1 className={ToolDescriptionStyles.heading}>{heading}</h1>
        <div className={WhyUsStyles.content}>
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      </div>
    </div>
  );
}
