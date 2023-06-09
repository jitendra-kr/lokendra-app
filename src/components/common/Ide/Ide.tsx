import Editor, { Theme } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { updateToolsInput } from "../../../common/state/tools";
import { useAppDispatch } from "../../../hooks";
import { useGetQueryString } from "../../../hooks/useGetQueryString";
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
  const dispatch = useAppDispatch();
  const [editorValue, setEditorValue] = useState<string>();
  const paramsLoaded = useRef(false);

  const {
    params: { data },
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
    if (data && !paramsLoaded.current) {
      paramsLoaded.current = true;
      const prettyInput = JSON.parse(data);
      setEditorValue(JSON.stringify(prettyInput, null, "\t"));
      onChange(data);
      return;
    }
  }, [data]);

  return (
    <>
      <Editor
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
