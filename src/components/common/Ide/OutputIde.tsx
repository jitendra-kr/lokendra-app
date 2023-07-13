import Editor, { Theme } from "@monaco-editor/react";
import styles from "./Ide.module.css";

export type OutputIdeProps = {
  value?: string;
  theme?: Theme;
  language?: string;
};

export default function OutputIde({
  value,
  theme,
  language = "json",
}: OutputIdeProps) {
  return (
    <Editor
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
