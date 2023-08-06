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
    <>
      <h2 className={ToolDescriptionStyles.heading}>{heading}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <div style={{ width: "70Wvw" }}>
          <div className={WhyUsStyles.content}>
            {typeof content === "string" ? <p>{content}</p> : content}
          </div>
        </div>
      </div>
    </>
  );
}
