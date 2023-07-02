import { DiffEditor, Monaco, MonacoDiffEditor } from "@monaco-editor/react";
import { Col, Row } from "antd";
import { useRef } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { COLOR_CONST } from "../../../../constants";
import { CopyToClip } from "../../../tools/helper/CopyToClip";
import { ButtonUsingReactIcon } from "../../ButtonWithIcon";
import { EditorActions } from "../EditorActions";
import styles from "../Ide.module.css";
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

  function handleEditorDidMount(editor: MonacoDiffEditor, monaco: Monaco) {
    diffEditorRef.current = editor;
    editor.focus();
  }

  const getOrignalValue = () => {
    return diffEditorRef.current?.getOriginalEditor().getValue() ?? "ll";
  };

  const getModifiedValue = () => {
    return diffEditorRef.current?.getModifiedEditor().getValue() ?? "";
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
              onChange={onLeftChange}
              childrenAfter={
                <>
                  <ButtonUsingReactIcon
                    name="Format"
                    onClick={() => formatLeftInput(getOrignalValue())}
                    mdIcon={
                      <PiBracketsCurlyBold
                        color={COLOR_CONST.defaultIcon}
                        size={20}
                      />
                    }
                    tooltip="Format input"
                  />
                  <CopyToClip content={getOrignalValue} />
                </>
              }
            />
          </>
        </Col>
        {true && (
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
                    <ButtonUsingReactIcon
                      name="Format"
                      onClick={() => formatRightInput(getModifiedValue())}
                      mdIcon={
                        <PiBracketsCurlyBold
                          color={COLOR_CONST.defaultIcon}
                          size={20}
                        />
                      }
                      tooltip="Format input"
                    />
                    <CopyToClip content={getModifiedValue} />
                  </>
                }
              />
            </>
          </Col>
        )}
      </Row>

      <DiffEditor
        onMount={handleEditorDidMount}
        className={styles.editor}
        language={"json"}
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
