import { EditorProps } from "@monaco-editor/react";
import dynamic from "next/dynamic";
import LoadingMonaco from "./LoadingMonaco";

// import { loader } from "@monaco-editor/react";

// // https://github.com/suren-atoyan/monaco-react/issues/12
// // load monaco from node_modules
// loader.config({ paths: { vs: "../vs" } });

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <LoadingMonaco />,
});

function CustomMonacoEditor(props: EditorProps) {
  return <MonacoEditor {...props} />;
}

export default CustomMonacoEditor;
