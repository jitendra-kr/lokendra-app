import { diff as DiffEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-diff";
import "ace-builds/src-noconflict/theme-github";

type DiffIdeProps = {
  diffLeftValue: string;
  diffRightValue: string;
};
export default function DiffViewer({
  diffLeftValue,
  diffRightValue,
}: DiffIdeProps) {
  return (
    <DiffEditor
      value={[diffLeftValue, diffRightValue]}
      height="74vh"
      width="100%"
      mode="text"
      theme="github"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        showConnectors: true,
        readOnly: true,
        tabSize: 2,
      }}
    />
  );
}
