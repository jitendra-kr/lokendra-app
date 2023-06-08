import Editor, { Theme } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useState } from "react";
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
  value,
  theme,
  minimapEnabled = true,
}: IdeProps) {
  const dispatch = useAppDispatch();
  const [paramsData, setParamsData] = useState<string>();

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
    if (value) {
      setParamsData(value);
      return;
    }
    if (data) {
      const prettyInput = JSON.parse(data);
      setParamsData(JSON.stringify(prettyInput, null, "\t"));
      onChange(data);
    }
  }, [data, value]);

  return (
    <>
      <Editor
        theme={theme}
        height="100vh"
        defaultLanguage="json"
        onValidate={handleEditorValidation}
        onChange={onChange}
        className={styles.editor}
        value={paramsData}
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
