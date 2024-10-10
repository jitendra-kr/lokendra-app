import CustomMonacoEditor from "./CustomMonacoEditor";
import styles from "./Ide.module.css";
import { OutputIdeProps } from "./ide.types";

export default function OutputIde({
  value,
  theme,
  language = "json",
}: OutputIdeProps) {
  return (
    <CustomMonacoEditor
      theme={theme}
      height="74vh"
      language={language}
      className={styles.editor}
      value={value}
      options={{
        selectOnLineNumbers: true,
        lineNumbersMinChars: 3,
        lineDecorationsWidth: 1,
        mouseWheelZoom: true,
        smoothScrolling: true,
        minimap: {
          enabled: false,
        },
        bracketPairColorization: {
          enabled: true,
        },
        wordWrap: "on",
      }}
    />
  );
}
