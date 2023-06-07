import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import AceEditor from "react-ace";

type IdeProps = {
  cb: (value: string) => void;
};

export default function Ide({ cb }: IdeProps) {
  return (
    <AceEditor
      placeholder="Start typing"
      height="100vh"
      mode="json"
      theme="github"
      onChange={cb}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      fontSize={15}
      style={{ border: "1px solid #ccc" }}
    />
  );
}
