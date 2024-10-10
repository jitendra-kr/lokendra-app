import { EditorProps } from "@monaco-editor/react";
import dynamic from "next/dynamic";
import LoadingMonaco from "./LoadingMonaco";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <LoadingMonaco />,
});

function CustomMonacoEditor(props: EditorProps) {
  return <MonacoEditor {...props} />;
}

export default CustomMonacoEditor;
