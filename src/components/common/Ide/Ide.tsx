import Editor, { Monaco, Theme } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { updateToolsInput } from "../../../common/state/tools";
import { useAppDispatch } from "../../../hooks";
import { useGetQueryString } from "../../../hooks/useGetQueryString";
import { EditorActions } from "./EditorActions";
import styles from "./Ide.module.css";

type IdeProps = {
  cb?: (value: string | undefined) => void;
  error?: (value: string | undefined) => void;
  value?: string;
  theme?: Theme;
  minimapEnabled?: boolean;
};

export default function Ide({
  cb,
  error,
  theme,
  minimapEnabled = true,
}: IdeProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const dispatch = useAppDispatch();
  const [editorValue, setEditorValue] = useState<string>();
  const paramsLoaded = useRef(false);

  const {
    params: { data: paramsData },
  } = useGetQueryString();

  function handleEditorValidation(markers: editor.IMarker[]) {
    let errorMsg = "";
    markers.forEach((marker) => {
      errorMsg += ` \n${marker.message}`;
    });
    error?.(errorMsg);
  }

  const onChange = (value: string | undefined) => {
    cb?.(value);
    dispatch(
      updateToolsInput({
        value: value ?? "",
      }),
    );
  };

  useEffect(() => {
    if (paramsData && !paramsLoaded.current) {
      paramsLoaded.current = true;
      const prettyInput = JSON.parse(paramsData);
      setEditorValue(JSON.stringify(prettyInput, null, "\t"));
      onChange(paramsData);
      return;
    }
  }, [paramsData]);

  const clear = () => {
    editorRef.current?.setValue("");
  };

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) {
    editorRef.current = editor;
    editor.focus();
  }

  const loadValue = (value: string | undefined) => {
    if (value) {
      onChange(value);
      setEditorValue(value);
    }
  };

  return (
    <>
      <EditorActions clear={clear} onChange={loadValue} />
      <Editor
        onMount={handleEditorDidMount}
        theme={theme}
        height="74vh"
        defaultLanguage="json"
        onValidate={handleEditorValidation}
        onChange={onChange}
        className={styles.editor}
        value={editorValue}
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
