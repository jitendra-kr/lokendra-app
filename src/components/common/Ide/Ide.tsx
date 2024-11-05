import { getToolInput } from "@ft/common/selectors/toolsSelectors";
import {
  updateSampleData,
  updateToolsInput,
} from "@ft/common/state/tools/toolsInput.slice";
import { useAppDispatch } from "@ft/hooks/useAppDispatch";
import { useAppSelector } from "@ft/hooks/useAppSelector";
import { messageError, messageSuccess } from "@ft/utils/antd";
import { repairJSON } from "@ft/utils/json/repairJSON";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { useGetQueryString } from "../../../hooks/useGetQueryString";
import { InputOutputActionButton } from "../Buttons/InputOutputActionButton";
import CustomMonacoEditor from "./CustomMonacoEditor";
import {
  EditorActions,
  EditorActionsButtons,
  FormatInput,
  MiniMap,
  MonoType,
} from "./EditorActions";
import styles from "./Ide.module.css";
import { UpdateMonacoTheme } from "./UpdateMonacoTheme";

export type EditorCallBackOptions = {
  monoType?: boolean;
};
type IdeProps = {
  language?: string;
  cb?: (value: string | undefined, options?: EditorCallBackOptions) => void;
  error?: (value: string | undefined) => void;
  options?: {
    monotype?: boolean;
    format?: boolean;
    repair?: boolean;
  };
};

export default function Ide({
  language = "json",
  cb,
  error,
  options,
}: IdeProps) {
  const [monoType, setMonoType] = useState(false);
  const [miniMap, setMiniMap] = useState(false);

  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);
  const dispatch = useAppDispatch();
  const paramsLoaded = useRef(false);
  const [theme, setTheme] = useState<string>();
  const { value: globalInputValue, loadSampleData } =
    useAppSelector(getToolInput);

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
    dispatch(updateToolsInput(value ?? ""));
  };

  useEffect(() => {
    if (paramsData && !paramsLoaded.current) {
      paramsLoaded.current = true;
      const prettyInput = JSON.parse(paramsData);
      onChange(JSON.stringify(prettyInput, null, "\t"));
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsData]);

  useEffect(() => {
    if (loadSampleData && globalInputValue) {
      onChange(globalInputValue);
      dispatch(updateSampleData(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSampleData, globalInputValue]);

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

  const onRepairClick = async () => {
    if (!globalInputValue) {
      return;
    }
    const repairedJSON = await repairJSON(globalInputValue);
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

  const onFormat = (valueToFormat: string) => {
    dispatch(updateToolsInput(valueToFormat));
  };

  const handleMiniMapChange = (status: boolean) => {
    setMiniMap(status);
  };

  return (
    <>
      <EditorActions
        clear={clear}
        onChange={loadValue}
        // eslint-disable-next-line react/no-children-prop
        children={
          <>
            <EditorActionsButtons>
              <UpdateMonacoTheme handleThemeChange={handleThemeChange} />
            </EditorActionsButtons>
            {options && options.repair && (
              <EditorActionsButtons>
                <InputOutputActionButton
                  name="Repair"
                  onClick={onRepairClick}
                  tooltip="Repair JSON: fix quotes, escape characters, remove comments and  trailing commas."
                />
              </EditorActionsButtons>
            )}
            {options?.format && (
              <FormatInput value={globalInputValue ?? ""} cb={onFormat} />
            )}
          </>
        }
        childrenAfter={
          <>
            {options?.monotype && <MonoType onChange={onMonoTypeChange} />}
            <MiniMap onChange={handleMiniMapChange} />
          </>
        }
      />
      <CustomMonacoEditor
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
    </>
  );
}
