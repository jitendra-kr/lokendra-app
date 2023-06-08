import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import styles from "./Ide.module.css";

type IdeProps = {
  cb: (value: string | undefined) => void;
  error: (value: string | undefined) => void;
};

export default function Ide({ cb, error }: IdeProps) {
  function handleEditorValidation(markers: editor.IMarker[]) {
    let errorMsg = "";
    markers.forEach((marker) => {
      errorMsg += ` \n${marker.message}`;
    });
    error(errorMsg);
  }

  return (
    <>
      <Editor
        height="100vh"
        defaultLanguage="json"
        onValidate={handleEditorValidation}
        onChange={cb}
        className={styles.editor}
      />
    </>
  );
}
