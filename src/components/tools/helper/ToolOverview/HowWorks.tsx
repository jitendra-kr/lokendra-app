import ToolDescriptionStyles from "./ToolDescription.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
};
export const HowWorks = ({ content }: ConvertedOutputByToolsProps) => {
  return (
    <>
      <h3 className={ToolDescriptionStyles.heading}>How it works?</h3>
      <div className={ToolDescriptionStyles["container-how-works"]}>
        <p className={ToolDescriptionStyles.content}>{content}</p>
      </div>
    </>
  );
};
