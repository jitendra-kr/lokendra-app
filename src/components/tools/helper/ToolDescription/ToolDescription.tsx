import ToolDescriptionStyles from "./ToolDescription.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
};
export const ToolDescription = ({ content }: ConvertedOutputByToolsProps) => {
  return (
    <>
      <h3 className={ToolDescriptionStyles.heading}>
        How can this tool beneficial for you?
      </h3>
      <div className={ToolDescriptionStyles.container}>
        <p className={ToolDescriptionStyles.content}>{content}</p>
      </div>
    </>
  );
};
