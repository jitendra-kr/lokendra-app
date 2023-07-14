import { DiffEditor, Monaco, MonacoDiffEditor } from "@monaco-editor/react";
import { Col, Row } from "antd";
import { useRef, useState } from "react";
import { CopyToClip } from "../../../tools/helper/CopyToClip";
import {
  EditorActions,
  EditorActionsButtons,
  FormatInput,
} from "../EditorActions";
import styles from "../Ide.module.css";
import { UpdateMonacoTheme } from "../UpdateMonacoTheme";
import DiffViewerStyles from "./DiffViewer.module.css";

type DiffIdeProps = {
  diffLeftValue: string;
  diffRightValue: string;
  onLeftChange: (valueL: string | undefined) => void;
  onRightChange: (valueR: string | undefined) => void;
  formatLeftInput: (valueL: string | undefined) => void;
  formatRightInput: (valueR: string | undefined) => void;
  leftErrorMsg: string;
  rightErrorMsg: string;
};
export default function DiffViewer({
  diffLeftValue,
  diffRightValue,
  onLeftChange,
  onRightChange,
  formatLeftInput,
  formatRightInput,
  leftErrorMsg,
  rightErrorMsg,
}: DiffIdeProps) {
  const diffEditorRef = useRef<MonacoDiffEditor>();
  const [theme, setTheme] = useState<string>();

  function handleEditorDidMount(editor: MonacoDiffEditor, monaco: Monaco) {
    diffEditorRef.current = editor;
    editor.focus();
  }

  const getOrignalValue = () => {
    console.log(
      "diffEditorRef.current?.getOriginalEditor().getValue()",
      diffEditorRef.current?.getOriginalEditor().getValue(),
    );
    return diffEditorRef.current?.getOriginalEditor().getValue() ?? "";
  };

  const getModifiedValue = () => {
    return diffEditorRef.current?.getModifiedEditor().getValue() ?? "";
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  return (
    <>
      <Row
        style={{
          marginBottom: "5px",
          display: "fl",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <>
            {leftErrorMsg && (
              <div className={DiffViewerStyles.errorMessageBG}>
                <p className={DiffViewerStyles.errorMessageTxt}>
                  {leftErrorMsg}
                </p>
              </div>
            )}
            <EditorActions
              clear={() => {
                onLeftChange("");
                diffEditorRef.current?.getOriginalEditor().setValue("");
              }}
              children={
                <span style={{ marginTop: "5px" }}>
                  <UpdateMonacoTheme handleThemeChange={handleThemeChange} />
                </span>
              }
              onChange={onLeftChange}
              childrenAfter={
                <>
                  <FormatInput value={getOrignalValue} cb={formatLeftInput} />
                  <EditorActionsButtons
                    children={<CopyToClip content={getOrignalValue} />}
                  />
                </>
              }
            />
          </>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <>
            {rightErrorMsg && (
              <div className={DiffViewerStyles.errorMessageBG}>
                <p className={DiffViewerStyles.errorMessageTxt}>
                  {rightErrorMsg}
                </p>
              </div>
            )}
            <EditorActions
              clear={() => {
                onRightChange("");
                diffEditorRef.current?.getModifiedEditor().setValue("");
              }}
              onChange={onRightChange}
              childrenAfter={
                <>
                  <FormatInput value={getModifiedValue} cb={formatRightInput} />
                  <EditorActionsButtons
                    children={<CopyToClip content={getModifiedValue} />}
                  />
                </>
              }
            />
          </>
        </Col>
      </Row>

      <DiffEditor
        onMount={handleEditorDidMount}
        className={styles.editor}
        language={"json"}
        theme={theme}
        height="74vh"
        original={diffLeftValue}
        modified={diffRightValue}
        options={{
          selectOnLineNumbers: true,
          lineDecorationsWidth: 1,
          mouseWheelZoom: true,
          smoothScrolling: true,
          bracketPairColorization: {
            enabled: true,
          },
          wordWrap: "on",
          originalEditable: true,

          enableSplitViewResizing: true,
          diffCodeLens: true,
          formatOnPaste: true,
        }}
      />
    </>
  );
}
