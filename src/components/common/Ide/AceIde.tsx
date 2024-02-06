import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import AceEditor from "react-ace";

type AceIdeProps = {
  changeCb: (value: string) => void;
  key: string;
};
export default function AceIde({ changeCb, key }: AceIdeProps) {
  const onChange = (value: string | undefined) => {
    changeCb(value ?? "");
  };

  return (
    <>
      <AceEditor
        key={key + 1}
        placeholder="Start typing"
        height="74vh"
        width="100%"
        mode="json"
        theme="github"
        name={"UNIQUE_ID_OF_DIV" + key + 2}
        editorProps={{ $blockScrolling: true }}
        fontSize={15}
        style={{ border: "1px solid #ccc" }}
        // value={globalInputValue}
        onChange={onChange}
      />
    </>
  );
}
