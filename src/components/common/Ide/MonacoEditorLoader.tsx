import { editor } from "monaco-editor";
import { useEffect, useState } from "react";
import styles from "./Ide.module.css";

function MonacoEditorLoader({
  handleEditorDidMount,
  theme,
  language,
  handleEditorValidation,
  onChange,
  globalInputValue,
  miniMap,
}: {
  handleEditorDidMount(editor: editor.IStandaloneCodeEditor): void;
  theme: string | undefined;
  language: string;
  handleEditorValidation(markers: editor.IMarker[]): void;
  onChange: (value: string | undefined) => void;
  globalInputValue: string | undefined;
  miniMap: boolean;
}) {
  const [MonacoEditor, setMonacoEditor] = useState<any>(null);

  useEffect(() => {
    import("@monaco-editor/react").then((module) => {
      setMonacoEditor(module.default);
    });
  }, []);

  if (!MonacoEditor) {
    return <div style={{ height: "74vh" }}> </div>;
  }

  return (
    <MonacoEditor
      onMount={handleEditorDidMount}
      theme={theme}
      height="74vh"
      language={language}
      onValidate={handleEditorValidation}
      onChange={onChange}
      className={styles.editor}
      value={globalInputValue}
      options={{
        selectOnLineNumbers: true,
        lineNumbersMinChars: 3,
        lineDecorationsWidth: 1,
        mouseWheelZoom: true,
        smoothScrolling: true,
        minimap: {
          enabled: miniMap,
        },
        bracketPairColorization: {
          enabled: true,
        },
        wordWrap: "on",
      }}
    />
  );
}

export default MonacoEditorLoader;
