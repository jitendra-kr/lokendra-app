import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import AceEditor from "react-ace";

type AceIdeProps = {
  value: any;
};
export default function AceIde({ value }: AceIdeProps) {
  return (
    <AceEditor
      placeholder="Start typing"
      height="100vh"
      mode="json"
      theme="github"
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      fontSize={15}
      style={{ border: "1px solid #ccc" }}
      value={value}
    />
  );
}
