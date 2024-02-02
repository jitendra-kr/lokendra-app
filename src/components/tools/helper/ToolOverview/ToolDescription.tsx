import ToolDescriptionStyles from "./ToolDescription.module.css";

export type ConvertedOutputByToolsProps = {
  content: string;
  name: string;
  keyFeatures?: string[];
};
export const ToolDescription = ({
  content,
  name,
  keyFeatures,
}: ConvertedOutputByToolsProps) => {
  if (!content) {
    return <></>;
  }
  return (
    <>
      <h2 className={ToolDescriptionStyles.heading}>
        How {`${name}`} is beneficial for you?
      </h2>
      <div className={ToolDescriptionStyles.container}>
        <p className={ToolDescriptionStyles.content}>{content}</p>
      </div>

      {keyFeatures && keyFeatures.length && (
        <>
          <h2 className={ToolDescriptionStyles.heading}>Key Features of it</h2>
          <div className={ToolDescriptionStyles.keyFeaturesContainer}>
            <ul>
              {keyFeatures.map((r, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "Inter",
                    padding: "4px",
                    fontSize: "20px",
                  }}
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
