import { EditorProps, loader } from "@monaco-editor/react";
import dynamic from "next/dynamic";
import LoadingMonaco from "./LoadingMonaco";

// custom configure load to use latest version of monaco-editor
loader.config({
  paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs" },
});

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <LoadingMonaco />,
});

function CustomMonacoEditor(props: EditorProps) {
  return <MonacoEditor {...props} />;
}

export default CustomMonacoEditor;
