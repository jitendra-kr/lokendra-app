import Editor, { Monaco } from "@monaco-editor/react";
import { Select, Space } from "antd";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { updateToolsInput } from "../../../common/state/tools";
import { useAppDispatch } from "../../../hooks";
import { useGetQueryString } from "../../../hooks/useGetQueryString";
import { EditorActions } from "./EditorActions";
import styles from "./Ide.module.css";

type ThemeType = string;
type IdeProps = {
  cb?: (value: string | undefined) => void;
  error?: (value: string | undefined) => void;
  value?: string;
  minimapEnabled?: boolean;
};

type UpdateThemeProps = {
  handleThemeChange: (value: ThemeType) => void;
};

function UpdateTheme({ handleThemeChange }: UpdateThemeProps) {
  return (
    <Space wrap style={{ marginRight: "5px" }}>
      <Select
        defaultValue="light"
        style={{ width: 120 }}
        onChange={handleThemeChange}
        options={[
          { value: "light", label: "Light" },
          { value: "vs-dark", label: "Vs Dark" },
          { value: "hc-black", label: "Hc Black" },
          { value: "hc-light", label: "Hc Light" },
        ]}
      />
    </Space>
  );
}

export default function Ide({ cb, error, minimapEnabled = true }: IdeProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const dispatch = useAppDispatch();
  const [editorValue, setEditorValue] = useState<string>();
  const paramsLoaded = useRef(false);
  const [theme, setTheme] = useState<string>();

  const {
    params: { data: paramsData },
  } = useGetQueryString();

  function handleEditorValidation(markers: editor.IMarker[]) {
    let errorMsg = "";
    const errors: string[] = [];
    markers.forEach((marker) => {
      if (!errors.includes(marker.message)) {
        errorMsg += ` \n${marker.message}`;
        errors.push(marker.message);
      }
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

  const handleThemeChange = (value: ThemeType) => {
    setTheme(value);
  };

  return (
    <>
      <EditorActions
        clear={clear}
        onChange={loadValue}
        children={<UpdateTheme handleThemeChange={handleThemeChange} />}
      />
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
