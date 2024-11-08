import "ace-builds";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver";
import AceEditor from "react-ace";

import { CopyToClip } from "../../../tools/helper/CopyToClip/CopyToClip";
import { InputOutputActionButton } from "../../Buttons/InputOutputActionButton";
import { EditorActions } from "../EditorActions";
import { DiffIdeProps } from "./DiffIde.types";

export default function DiffIde({
  id,
  value,
  onChange,
  onCompareClick,
}: DiffIdeProps) {
  return (
    <>
      <EditorActions
        clear={() => onChange("")}
        onChange={onChange}
        childrenAfter={<CopyToClip content={value} />}
      >
        <>
          {id === "rightIDE" && (
            <InputOutputActionButton
              name="Compare"
              onClick={onCompareClick}
              tooltip="Perform Diff"
              styles={{
                backgroundColor: "lightseagreen",
                fontWeight: "bold",
              }}
            />
          )}
        </>
      </EditorActions>
      <AceEditor
        mode="json"
        theme="github"
        name="json-editor"
        height="74vh"
        width="100%"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        onChange={onChange}
        style={{ border: "1px solid #ccc" }}
        setOptions={{
          useWorker: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
          fontSize: 18,
        }}
      />
    </>
  );
}
