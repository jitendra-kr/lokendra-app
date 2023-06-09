import Editor, { Theme } from "@monaco-editor/react";
import styles from "./Ide.module.css";

type IdeProps = {
  cb?: (value: string | undefined) => void;
  error?: (value: string | undefined) => void;
  value?: string;
  theme?: Theme;
  minimapEnabled?: boolean;
};

export default function OutputIde({
  value,
  theme,
  minimapEnabled = true,
}: IdeProps) {
  return (
    <>
      <Editor
        theme={theme}
        height="74vh"
        defaultLanguage="json"
        className={styles.editor}
        value={value}
        options={{
          selectOnLineNumbers: true,
          lineNumbersMinChars: 3,
          lineDecorationsWidth: 1,
          mouseWheelZoom: true,
          smoothScrolling: true,
          minimap: {
            enabled: minimapEnabled,
            showSlider: "always",
          },
          bracketPairColorization: {
            enabled: true,
          },
          wordWrap: "on",
        }}
      />
    </>
  );
}
