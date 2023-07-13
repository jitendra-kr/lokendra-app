import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { getToolInput } from "../../../common/selectors";
import { updateToolsInput } from "../../../common/state/tools";
import { COLOR_CONST } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useGetQueryString } from "../../../hooks/useGetQueryString";
import { messageError, messageSuccess, repairJSON } from "../../../utils";
import { ButtonUsingReactIcon } from "../ButtonWithIcon";
import { EditorActions, EditorActionsButtons, MonoType } from "./EditorActions";
import styles from "./Ide.module.css";
import { UpdateMonacoTheme } from "./UpdateMonacoTheme";

export type EditorCallBackOptions = {
  monoType?: boolean;
};
type IdeProps = {
  cb?: (value: string | undefined, options?: EditorCallBackOptions) => void;
  error?: (value: string | undefined) => void;
  minimapEnabled?: boolean;
  options?: {
    monotype: boolean;
  };
};

export default function Ide({
  cb,
  error,
  minimapEnabled = true,
  options,
}: IdeProps) {
  const [monoType, setMonoType] = useState(false);
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const dispatch = useAppDispatch();
  const paramsLoaded = useRef(false);
  const [theme, setTheme] = useState<string>();
  const { value: globalInputValue } = useAppSelector(getToolInput);

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
    cb?.(value, { monoType: monoType });
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
      onChange(JSON.stringify(prettyInput, null, "\t"));
      return;
    }
  }, [paramsData]);

  const clear = () => {
    editorRef.current?.setValue("");
  };

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.focus();
  }

  const loadValue = (value: string | undefined) => {
    if (value) {
      onChange(value);
    }
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  const onRepairClick = () => {
    if (!globalInputValue) {
      return;
    }
    const repairedJSON = repairJSON(globalInputValue);
    if (repairedJSON) {
      messageSuccess({
        content: "JSON Repaired.",
        key: "repairJSON",
        duration: 4,
      });
      onChange(repairedJSON);
      return;
    }
    messageError({
      content:
        "Unable to repair the JSON. Please check the validity of the input.",
      key: "repairJSON",
      duration: 4,
    });
  };

  const onMonoTypeChange = (status: boolean) => {
    setMonoType(status);
    cb?.(globalInputValue, {
      monoType: status,
    });
  };

  return (
    <>
      <EditorActions
        clear={clear}
        onChange={loadValue}
        children={
          <>
            <EditorActionsButtons
              children={
                <UpdateMonacoTheme handleThemeChange={handleThemeChange} />
              }
            />
            <EditorActionsButtons
              children={
                <ButtonUsingReactIcon
                  name="Repair"
                  onClick={onRepairClick}
                  mdIcon={
                    <AiFillTool size={18} color={COLOR_CONST.defaultIcon} />
                  }
                  tooltip="Repair JSON: fix quotes, escape characters, remove comments and  trailing commas."
                />
              }
            />
            <></>
          </>
        }
        childrenAfter={
          <>{options?.monotype && <MonoType onChange={onMonoTypeChange} />}</>
        }
      />
      <Editor
        onMount={handleEditorDidMount}
        theme={theme}
        height="74vh"
        defaultLanguage="json"
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
