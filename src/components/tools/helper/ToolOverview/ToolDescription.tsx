import ToolDescriptionStyles from "./ToolDescription.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
};
export const ToolDescription = ({ content }: ConvertedOutputByToolsProps) => {
  return (
    <>
      <h2 className={ToolDescriptionStyles.heading}>
        How can this tool beneficial for you?
      </h2>
      <div className={ToolDescriptionStyles.container}>
        <p className={ToolDescriptionStyles.content}>{content}</p>
      </div>
    </>
  );
};
