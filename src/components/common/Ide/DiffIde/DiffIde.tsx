import "ace-builds";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/webpack-resolver";
import AceEditor from "react-ace";

import { GiMagnifyingGlass } from "react-icons/gi";
import { CopyToClip } from "../../../tools/helper/CopyToClip";
import { InputOutputActionButton } from "../../Buttons/InputOutputActionButton";
import { EditorActions } from "../EditorActions";

type DiffIdeProps = {
  id: "leftIDE" | "rightIDE";
  value: string;
  onChange: (value: string | undefined) => void;
  onCompareClick: () => void;
};
export default function DiffIde({
  id,
  value,
  onChange,
  onCompareClick,
}: DiffIdeProps) {
  const clear = () => {
    onChange("");
  };

  return (
    <>
      <EditorActions
        clear={clear}
        onChange={onChange}
        // eslint-disable-next-line react/no-children-prop
        children={
          <>
            {id === "rightIDE" && (
              <InputOutputActionButton
                name="Compare"
                onClick={onCompareClick}
                mdIcon={<GiMagnifyingGlass size={18} />}
                tooltip="Perform Diff"
                styles={{
                  backgroundColor: "lightseagreen",
                  fontWeight: "bold",
                }}
              />
            )}
          </>
        }
        childrenAfter={<CopyToClip content={value} />}
      />
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
